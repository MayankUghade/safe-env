#!/usr/bin/env node

import prompts from "prompts";
import fs from "fs";

async function main() {
  const link = process.argv[2];

  if (!link) {
    console.error("Usage: safe-env <link>");
    process.exit(1);
  }

  let url;
  try {
    url = new URL(link);
  } catch {
    console.error("That doesn't look like a valid link.");
    process.exit(1);
  }

  const id = url.pathname.split("/view/")[1];

  if (!id) {
    console.error("That doesn't look like a valid safe-env link.");
    process.exit(1);
  }

  const apiBase = url.origin;

  const { password } = await prompts({
    type: "password",
    name: "password",
    message: "Enter the password for this link:",
  });

  if (!password) {
    console.error("No password entered, aborting.");
    process.exit(1);
  }

  const res = await fetch(`${apiBase}/api/view/${id}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ password }),
  });

  const data = await res.json();

  if (!res.ok) {
    console.error(`Error: ${data.error}`);
    process.exit(1);
  }

  const envExists = fs.existsSync(".env");

  if (envExists) {
    const existing = fs.readFileSync(".env", "utf8");
    const separator = existing.endsWith("\n") ? "\n" : "\n\n";
    fs.appendFileSync(
      ".env",
      `${separator}# Added via safe-env (${new Date().toISOString()})\n${data.content}\n`
    );
    console.log("Success — appended to existing .env file.");
  } else {
    fs.writeFileSync(".env", `${data.content}\n`);
    console.log("Success — .env file created in this directory.");
  }
}

main();