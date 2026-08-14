"use client";

import { useState } from "react";
import { useParams } from "next/navigation";

export default function ViewPage() {
  const { id } = useParams();
  const [password, setPassword] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit() {
    setError("");
    const res = await fetch(`/api/view/${id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    const data = await res.json();
    if (!res.ok) {
      setError(data.error);
      return;
    }
    setContent(data.content);
  }

  if (content) {
    return (
      <div className="mx-auto max-w-lg p-6">
        <p className="mb-2 text-sm text-gray-500">
          This content is now deleted from the server. Save it now.
        </p>
        <pre className="whitespace-pre-wrap rounded bg-gray-100 p-4 text-sm">{content}</pre>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-sm p-6">
      <input
        className="w-full rounded border p-3"
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className="mt-3 w-full rounded bg-black py-3 text-white"
        onClick={handleSubmit}
      >
        Unlock
      </button>
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </div>
  );
}