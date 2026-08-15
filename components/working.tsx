"use client"

import React, { useState } from 'react';
import { Lock, Eye, EyeOff, Link2, Clock, ShieldCheck, Copy, Check, KeyRound, Share2, Sparkles, AlertCircle } from 'lucide-react';

export const HowItWorksSection: React.FC = () => {
  // Step 1 interactive state
  const [showPassword, setShowPassword] = useState(false);
  const [selectedTtl, setSelectedTtl] = useState('5m');
  const [step1LinkCreated, setStep1LinkCreated] = useState(false);

  // Step 2 interactive state
  const [copiedLink, setCopiedLink] = useState(false);
  const handleCopyLink = () => {
    navigator.clipboard.writeText('https://superenvs.dev/s/vault_9x8f2a');
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

//   // Step 4 interactive state
//   const [testPasswordInput, setTestPasswordInput] = useState('');
//   const [isDecrypted, setIsDecrypted] = useState(false);

  return (
    <section id="how-it-works" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
        <div className="inline-block">
          <span className="px-3.5 py-1 text-xs font-semibold tracking-wider text-[#8A7969] uppercase bg-[#FAF8F5] border border-[#E7DFD4] rounded-full">
            How it works
          </span>
        </div>
        <h2 className="font-serif-editorial text-3xl sm:text-4xl md:text-5xl font-normal text-[#1C1A18] mt-4 tracking-[-0.02em]">
          Secure. Simple. Super.
        </h2>
        <p className="text-base sm:text-lg text-[#6B655D] mt-2 font-normal">
          Get started in minutes.
        </p>
      </div>

      {/* Steps List */}
      <div className="relative space-y-12 sm:space-y-16">
        {/* Connecting vertical line behind step numbers */}
        <div className="hidden md:block absolute left-[27px] top-8 bottom-12 w-[1.5px] bg-[#E8E2D8] -z-0" />

        {/* STEP 1: Add your secrets, expiration time and a password to create a sharable link */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Left Column: Number + Content */}
          <div className="md:col-span-6 flex items-start gap-5">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#FFEFE6] text-[#E57A44] border-2 border-white shadow-sm flex items-center justify-center font-bold text-lg">
              1
            </div>
            <div className="pt-1">
              <h3 className="text-xl sm:text-2xl font-bold text-[#1E1C1A] mb-2.5 font-sans tracking-tight">
                Add secrets & create link
              </h3>
              <p className="text-[15px] text-[#6C665D] leading-relaxed max-w-md">
                Add your secrets, expiration time and a password to create a sharable link.
              </p>
            </div>
          </div>

          {/* Right Column: Visual Mockup */}
          <div className="md:col-span-6 relative">
            <div className="bg-white rounded-2xl border border-[#E9E4DC] p-5 sm:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all">
              {/* Header */}
              <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-[#F0ECE4]">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                </div>
                <span className="text-xs font-semibold text-[#8C8479]">Create Secret Vault</span>
                <div className="w-8" />
              </div>

              {/* Form elements */}
              <div className="space-y-3 font-sans text-xs sm:text-sm">
                {/* Secrets input preview */}
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#8A837A] mb-1">
                    Environment Secrets
                  </label>
                  <div className="p-2.5 rounded-lg bg-[#FAF8F5] border border-[#EFEBE4] font-mono text-xs text-[#3D3A36] space-y-1">
                    <div className="flex justify-between">
                      <span className="font-semibold text-[#18181B]">DATABASE_URL</span>
                      <span className="text-[#8E877C]">•••••••••••••</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-[#18181B]">API_SECRET</span>
                      <span className="text-[#8E877C]">•••••••••••••</span>
                    </div>
                  </div>
                </div>

                {/* Expiration + Password Row */}
                <div className="grid grid-cols-2 gap-2.5">
                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#8A837A] mb-1">
                      Expires After
                    </label>
                    <div className="flex gap-1">
                      {['2m', '5m', '15m'].map((ttl) => (
                        <button
                          key={ttl}
                          onClick={() => setSelectedTtl(ttl)}
                          className={`flex-1 py-1.5 px-2 rounded-md text-xs font-medium border transition-colors ${
                            selectedTtl === ttl
                              ? 'bg-[#18181B] text-white border-[#18181B]'
                              : 'bg-[#FAF8F5] text-[#6C665D] border-[#EFEBE4] hover:bg-[#F2EFE9]'
                          }`}
                        >
                          {ttl}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#8A837A] mb-1">
                      Password
                    </label>
                    <div className="flex items-center justify-between px-2.5 py-1.5 rounded-md bg-[#FAF8F5] border border-[#EFEBE4]">
                      <span className="font-mono text-xs text-[#3D3A36]">
                        {showPassword ? 'secret-pass-99' : '••••••••••••'}
                      </span>
                      <button
                        onClick={() => setShowPassword(!showPassword)}
                        className="text-[#9C9488] hover:text-[#E57A44] transition-colors"
                      >
                        {showPassword ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Submit button */}
                <div className="pt-1">
                  <button
                    onClick={() => {
                      setStep1LinkCreated(true);
                      setTimeout(() => setStep1LinkCreated(false), 2500);
                    }}
                    className="w-full py-2 bg-[#18181B] hover:bg-black text-white text-xs font-medium rounded-full transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    {step1LinkCreated ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Link created!</span>
                      </>
                    ) : (
                      <>
                        <KeyRound className="w-3.5 h-3.5 text-[#E57A44]" />
                        <span>Create Sharable Link</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Floating Lock Badge */}
            <div className="absolute -bottom-4 -right-2 sm:-right-4 w-12 h-12 rounded-full bg-[#FFEFE6] border-2 border-white shadow-md flex items-center justify-center text-[#E57A44]">
              <Lock className="w-5 h-5 stroke-[2.2]" />
            </div>
          </div>
        </div>

        {/* STEP 2: Share the link with who ever you want to share your credentials with */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Left Column */}
          <div className="md:col-span-6 flex items-start gap-5">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#EFF4FF] text-[#3B66DE] border-2 border-white shadow-sm flex items-center justify-center font-bold text-lg">
              2
            </div>
            <div className="pt-1">
              <h3 className="text-xl sm:text-2xl font-bold text-[#1E1C1A] mb-2.5 font-sans tracking-tight">
                Share the link
              </h3>
              <p className="text-[15px] text-[#6C665D] leading-relaxed max-w-md">
                Share the link with who ever you want to share your credentials with.
              </p>
            </div>
          </div>

          {/* Right Column: Visual Mockup */}
          <div className="md:col-span-6 relative">
            <div className="bg-white rounded-2xl border border-[#E9E4DC] p-5 sm:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-[#8C8479] uppercase tracking-wider">
                  Sharable Link Ready
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#3B66DE] bg-[#EFF4FF] px-2 py-0.5 rounded-full">
                  <Sparkles className="w-3 h-3" /> One-Time Vault
                </span>
              </div>

              {/* Sharable link card */}
              <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#EFEBE4] mb-3.5">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 overflow-hidden">
                    <Link2 className="w-4 h-4 text-[#3B66DE] flex-shrink-0" />
                    <span className="font-mono text-xs text-[#2A2724] truncate">
                      https://superenvs.dev/s/vault_9x8f2a
                    </span>
                  </div>
                  <button
                    onClick={handleCopyLink}
                    className="flex-shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#18181B] hover:bg-black text-white text-xs font-medium transition-all cursor-pointer"
                  >
                    {copiedLink ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Share recipients info */}
              <div className="flex items-center justify-between text-xs text-[#7A746B] pt-1">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>Send via Slack, Email, or Discord</span>
                </div>
                <span className="text-[11px] font-medium text-[#9E978C]">Password required to view</span>
              </div>
            </div>

            {/* Floating Link/Share Badge */}
            <div className="absolute -bottom-4 -right-2 sm:-right-4 w-12 h-12 rounded-full bg-[#EFF4FF] border-2 border-white shadow-md flex items-center justify-center text-[#3B66DE]">
              <Share2 className="w-5 h-5 stroke-[2.2]" />
            </div>
          </div>
        </div>

        {/* STEP 3: Auto expires after 2-5 minutes */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Left Column */}
          <div className="md:col-span-6 flex items-start gap-5">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#EBFDF2] text-[#12B76A] border-2 border-white shadow-sm flex items-center justify-center font-bold text-lg">
              3
            </div>
            <div className="pt-1">
              <h3 className="text-xl sm:text-2xl font-bold text-[#1E1C1A] mb-2.5 font-sans tracking-tight">
                Auto-expires in 2-5 minutes
              </h3>
              <p className="text-[15px] text-[#6C665D] leading-relaxed max-w-md">
                Auto expires after 2-5 minutes.
              </p>
            </div>
          </div>

          {/* Right Column: Visual Mockup */}
          <div className="md:col-span-6 relative">
            <div className="bg-white rounded-2xl border border-[#E9E4DC] p-5 sm:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-xs font-semibold text-[#8C8479] uppercase tracking-wider block">
                    Self-Destruct Timer
                  </span>
                  <span className="text-sm font-bold text-[#2D2A26]">Time remaining</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ECFDF3] border border-[#D1FADF] text-[#027A48] text-xs font-semibold">
                  <Clock className="w-3.5 h-3.5 animate-pulse" />
                  <span>03m : 24s</span>
                </div>
              </div>

              {/* Animated Progress Bar */}
              <div className="w-full bg-[#F2EFE9] h-2.5 rounded-full overflow-hidden mb-3">
                <div
                  className="bg-[#A6D96A] h-full rounded-full transition-all duration-500"
                  style={{ width: '62%' }}
                />
              </div>

              <div className="flex items-center justify-between text-[11px] text-[#857F75]">
                <span>Set TTL: 5 minutes</span>
                <span className="text-emerald-700 font-medium">Auto-purges permanently</span>
              </div>
            </div>

            {/* Floating Clock Badge */}
            <div className="absolute -bottom-4 -right-2 sm:-right-4 w-12 h-12 rounded-full bg-[#EBFDF2] border-2 border-white shadow-md flex items-center justify-center text-[#12B76A]">
              <Clock className="w-5 h-5 stroke-[2.2]" />
            </div>
          </div>
        </div>

        {/* STEP 4: Completely password protected and encrypted(Even we cannot se your creds) */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Left Column */}
          <div className="md:col-span-6 flex items-start gap-5">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#F6F4FE] text-[#7C3AED] border-2 border-white shadow-sm flex items-center justify-center font-bold text-lg">
              4
            </div>
            <div className="pt-1">
              <h3 className="text-xl sm:text-2xl font-bold text-[#1E1C1A] mb-2.5 font-sans tracking-tight">
                Zero-knowledge encryption
              </h3>
              <p className="text-[15px] text-[#6C665D] leading-relaxed max-w-md">
                Completely password protected and encrypted (Even we cannot see your creds).
              </p>
            </div>
          </div>

          {/* Right Column: Visual Mockup */}
          <div className="md:col-span-6 relative">
            <div className="bg-white rounded-2xl border border-[#E9E4DC] p-5 sm:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
              <div className="flex items-center justify-between mb-3.5">
                <span className="text-xs font-semibold text-[#8C8479] uppercase tracking-wider">
                  Client-Side AES-256 Protection
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#7C3AED] bg-[#F6F4FE] px-2.5 py-0.5 rounded-full">
                  <ShieldCheck className="w-3 h-3" /> Zero Knowledge
                </span>
              </div>

              {/* Password unlock demonstration */}
              <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#EFEBE4] space-y-2 mb-2.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#5E584F] font-medium">Server Plaintext Access:</span>
                  <span className="font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded text-[11px]">
                    0% (Impossible)
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#5E584F] font-medium">Cipher Stored:</span>
                  <span className="font-mono text-[10px] text-[#8E877C] bg-white px-2 py-0.5 rounded border border-[#ECE7DE]">
                    U2FsdGVkX19...8fE9
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-[11px] text-[#787268] bg-[#F9F8F5] p-2 rounded-lg border border-[#F0EBE3]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#7C3AED] flex-shrink-0" />
                <span>Encrypted on your device before sending. Decrypted only with your password.</span>
              </div>
            </div>

            {/* Floating Shield Badge */}
            <div className="absolute -bottom-4 -right-2 sm:-right-4 w-12 h-12 rounded-full bg-[#F6F4FE] border-2 border-white shadow-md flex items-center justify-center text-[#7C3AED]">
              <ShieldCheck className="w-5 h-5 stroke-[2.2]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
