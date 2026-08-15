"use client";

import { useState } from "react";
import { useParams } from "next/navigation";

export default function ViewPage() {
  const { id } = useParams();
  const [password, setPassword] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  async function handleSubmit() {
    setError("");
    setLoading(true);
    const res = await fetch(`/api/view/${id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    const data = await res.json();
    setLoading(false);
    if (!res.ok) {
      setError(data.error);
      return;
    }
    setContent(data.content);
  }

  function handleCopy() {
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  if (content) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f7f9fb] px-4">
        <div className="w-full max-w-lg">
          <div className="mb-5 flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e8f5ec]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1f8a4c" strokeWidth="2.5">
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </div>
            <h1 className="text-lg font-medium tracking-[-0.01em] text-[#10233F]">Unlocked</h1>
          </div>

          <div className="mb-4 flex items-start gap-3 rounded-2xl border border-[#f0d9a8] bg-[#fdf6e6] p-4">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#a5730f" strokeWidth="2" className="mt-0.5 shrink-0">
              <path d="M12 9v4M12 17h.01M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z" />
            </svg>
            <p className="text-sm leading-5 text-[#8a5f0f]">
              This content has been permanently deleted from the server. Copy or save it now — this link no longer works.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-[#10233F]/10 bg-[#10233F] shadow-[0_20px_50px_rgba(16,35,63,0.15)]">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                <span className="ml-2 text-xs text-white/40">.env</span>
              </div>
              <button onClick={handleCopy} className="flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium text-white transition hover:bg-white/20">
                {copied ? (
                  <>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    Copied
                  </>
                ) : (
                  <>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="9" y="9" width="13" height="13" rx="2" />
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                    </svg>
                    Copy
                  </>
                )}
              </button>
            </div>
            <pre className="max-h-80 overflow-auto whitespace-pre-wrap p-4 font-mono text-sm leading-6 text-[#e2ecf5]">{content}</pre>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f7f9fb] px-4">
      <div className="w-full max-w-sm">
        <div className="rounded-3xl border border-[#10233F]/8 bg-white p-8 shadow-[0_20px_50px_rgba(16,35,63,0.08)]">
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#245B8F]/10">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#245B8F" strokeWidth="2">
              <rect x="3" y="11" width="18" height="11" rx="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          </div>

          <h1 className="text-xl font-medium tracking-[-0.02em] text-[#10233F]">This link is protected</h1>
          <p className="mt-1.5 text-sm leading-5 text-[#10233F]/55">
            Enter the password to decrypt and view this content. It can only be viewed once.
          </p>

          <div className="mt-6">
            <input
              className="w-full rounded-xl border border-[#10233F]/12 bg-[#f7f9fb] px-4 py-3 text-sm text-[#10233F] outline-none transition focus:border-[#245B8F]/40 focus:bg-white focus:ring-4 focus:ring-[#245B8F]/8"
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
            />

            <button
              onClick={handleSubmit}
              disabled={loading || !password}
              className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-[#10233F] py-3 text-sm font-medium text-white transition hover:bg-[#193554] disabled:cursor-not-allowed disabled:opacity-40"
            >
              {loading ? "Unlocking..." : "Unlock"}
              {!loading && (
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14" />
                  <path d="m13 6 6 6-6 6" />
                </svg>
              )}
            </button>

            {error && (
              <div className="mt-3 flex items-center gap-2 rounded-lg bg-red-50 px-3 py-2.5 text-sm text-red-600">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="shrink-0">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 8v4M12 16h.01" />
                </svg>
                {error}
              </div>
            )}
          </div>
        </div>

        <p className="mt-5 text-center text-xs text-[#10233F]/35">
          Encrypted on the sender&apos;s device. We can&apos;t read this content, even if we wanted to.
        </p>
      </div>
    </div>
  );
}