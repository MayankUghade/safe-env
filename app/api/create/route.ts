import { NextResponse } from "next/server";
import { nanoid } from "nanoid";
import { redis } from "@/lib/redis";
import { hashPassword, encryptContent } from "@/lib/crypto";

export async function POST(req: Request) {
  const { envContent, password, expirationMinutes } = await req.json();

  if (!envContent || !password || !expirationMinutes) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const id = nanoid(10);
  const hashedPassword = await hashPassword(password);
  const { encrypted, salt, iv, authTag } = encryptContent(envContent, password);

  await redis.set(
    `env:${id}`,
    JSON.stringify({ hashedPassword, encrypted, salt, iv, authTag }),
    { ex: expirationMinutes * 60 }
  );

  return NextResponse.json({ id });
}