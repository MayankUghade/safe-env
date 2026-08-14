import { NextResponse } from "next/server";
import { redis } from "@/lib/redis";
import { verifyPassword, decryptContent } from "@/lib/crypto";

export async function POST(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const key = `env:${id}`;
  const { password } = await req.json();

  const raw = await redis.get<string>(key);
  if (!raw) {
    return NextResponse.json({ error: "This link has expired or doesn't exist" }, { status: 404 });
  }

  const data = typeof raw === "string" ? JSON.parse(raw) : raw;
  const isValid = await verifyPassword(password, data.hashedPassword);

  if (!isValid) {
    return NextResponse.json({ error: "Incorrect password" }, { status: 401 });
  }

  const content = decryptContent(data.encrypted, password, data.salt, data.iv, data.authTag);

  await redis.del(key);

  return NextResponse.json({ content });
}