"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function CreatePage() {
  const [envContent, setEnvContent] = useState("");
  const [password, setPassword] = useState("");
  const [expirationMinutes, setExpirationMinutes] = useState(5);
  const [link, setLink] = useState("");
  const [isCopied, setIsCopied] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  async function handleSubmit() {
    if (!envContent || !password || isLoading) return;

    setIsLoading(true);
    setError("");
    setLink("");

    try {
      const res = await fetch("/api/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          envContent,
          password,
          expirationMinutes,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setLink(`${window.location.origin}/view/${data.id}`);
      setIsCopied(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  }

  async function handleCopy() {
    if (!link) return;

    await navigator.clipboard.writeText(link);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  }

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-24 pt-32 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-semibold tracking-tight text-[#10233F] sm:text-4xl">
            Secure your Environment Variables
          </h1>

          <p className="mt-3 text-sm text-[#10233F]/60 sm:text-base">
            Paste your sensitive .env content below, set a decryption password,
            and generate a self-destructing link to share with your team.
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="space-y-6">
            <div>
              <label
                htmlFor="envContent"
                className="mb-2 block text-sm font-medium text-gray-900"
              >
                Environment Variables
              </label>

              <textarea
                id="envContent"
                className="w-full rounded-xl border border-gray-300 bg-gray-50 p-4 font-mono text-sm text-gray-800 transition-colors focus:border-[#10233F] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#10233F]"
                rows={8}
                placeholder={`DATABASE_URL=postgres://user:pass@localhost:5432/db
API_KEY=your_secret_api_key`}
                value={envContent}
                onChange={(e) => setEnvContent(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-medium text-gray-900"
                >
                  Password to decrypt
                </label>

                <div className="relative">
                  <input
                    id="password"
                    className="w-full rounded-xl border border-gray-300 bg-gray-50 p-3.5 pr-12 text-sm text-gray-800 transition-colors focus:border-[#10233F] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#10233F]"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter a secure password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 flex items-center pr-3.5 text-gray-400 hover:text-gray-600 focus:outline-none"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>

              <div>
                <label
                  htmlFor="expiration"
                  className="mb-2 block text-sm font-medium text-gray-900"
                >
                  Expiration Time
                </label>

                <select
                  id="expiration"
                  className="w-full rounded-xl border border-gray-300 bg-gray-50 p-3.5 text-sm text-gray-800 transition-colors focus:border-[#10233F] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#10233F]"
                  value={expirationMinutes}
                  onChange={(e) =>
                    setExpirationMinutes(Number(e.target.value))
                  }
                >
                  <option value={2}>2 minutes</option>
                  <option value={3}>3 minutes</option>
                  <option value={4}>4 minutes</option>
                  <option value={5}>5 minutes</option>
                </select>
              </div>
            </div>

            {error && (
              <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                {error}
              </div>
            )}

            <button
              className="mt-2 flex w-full items-center justify-center gap-2 rounded-full bg-[#10233F] px-6 py-3.5 text-sm font-medium text-white shadow-md transition-transform hover:-translate-y-0.5 hover:bg-[#193554] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
              onClick={handleSubmit}
              disabled={!envContent || !password || isLoading}
            >
              {isLoading ? "Generating..." : "Generate Secure Link"}

              {!isLoading && (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m13 6 6 6-6 6" />
                </svg>
              )}
            </button>
          </div>

          {link && (
            <div className="mt-8 animate-in fade-in slide-in-from-bottom-2 rounded-xl border border-green-200 bg-green-50 p-5 duration-300">
              <h3 className="mb-1.5 text-sm font-semibold text-green-900">
                Link Generated Successfully!
              </h3>

              <p className="mb-4 text-sm text-green-800">
                Share this link and the password with your team. It will
                self-destruct after {expirationMinutes} minutes.
              </p>

              <div className="flex items-center gap-2">
                <input
                  readOnly
                  value={link}
                  className="w-full rounded-lg border border-green-300 bg-white p-2.5 text-sm text-gray-800 outline-none"
                  onFocus={(e) => e.target.select()}
                />

                <button
                  onClick={handleCopy}
                  className={`flex shrink-0 items-center justify-center rounded-lg px-4 py-2.5 text-sm font-medium text-white transition-colors ${
                    isCopied
                      ? "bg-green-700"
                      : "bg-green-600 hover:bg-green-700"
                  }`}
                >
                  {isCopied ? "Copied!" : "Copy"}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}