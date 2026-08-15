"use client"

import React, { useState } from 'react';
import {
  Lock,
  Eye,
  EyeOff,
  Link2,
  Clock,
  ShieldCheck,
  Copy,
  Check,
  KeyRound,
  Terminal,
  Globe,
  GitBranch,
  ArrowDown,
  Sparkles,
  Download,
  FileCode,
  CornerDownRight,
  ChevronRight,
  Layers
} from 'lucide-react';

export const HowItWorksSection: React.FC = () => {
  // Step 1 interactive state
  const [showPassword, setShowPassword] = useState(false);
  const [selectedTtl, setSelectedTtl] = useState('5m');
  const [step1LinkCreated, setStep1LinkCreated] = useState(false);

  // Branch Selection state
  const [activeBranch, setActiveBranch] = useState<'all' | 'browser' | 'cli'>('all');

  // Path A (Browser) interactive state
  const [browserPassword, setBrowserPassword] = useState('');
  const [browserDecrypted, setBrowserDecrypted] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  // Path B (CLI) interactive state
  const [cliCopied, setCliCopied] = useState(false);
  const [cliRunning, setCliRunning] = useState(false);
  const [cliComplete, setCliComplete] = useState(false);

  const handleRunCli = () => {
    setCliRunning(true);
    setCliComplete(false);
    setTimeout(() => {
      setCliRunning(false);
      setCliComplete(true);
    }, 1200);
  };

  return (
    <section id="how-it-works" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
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
          Create an encrypted link and pull credentials anywhere via Browser or CLI.
        </p>
      </div>

      {/* Main Flow Container */}
      <div className="relative space-y-12 sm:space-y-16">
        
        {/* ========================================================================= */}
        {/* STEP 1: Add your secrets, expiration time & password to create link */}
        {/* ========================================================================= */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-white/70 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-[#EAE4DC] shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
          {/* Left Column: Number + Content */}
          <div className="md:col-span-6 flex items-start gap-5">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#FFEFE6] text-[#E57A44] border-2 border-white shadow-sm flex items-center justify-center font-bold text-lg">
              1
            </div>
            <div className="pt-1">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#FFF3EB] text-[#E57A44] text-xs font-semibold uppercase tracking-wider mb-2">
                <KeyRound className="w-3.5 h-3.5" /> Step 1 • Origin
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#1E1C1A] mb-2.5 font-sans tracking-tight">
                Add secrets & create link
              </h3>
              <p className="text-[15px] text-[#6C665D] leading-relaxed max-w-md">
                Add your environment secrets, set a 2–5 minute expiration timer, and secure it with a password to forge a client-encrypted sharable link.
              </p>
            </div>
          </div>

          {/* Right Column: Visual Mockup */}
          <div className="md:col-span-6 relative">
            <div className="bg-white rounded-2xl border border-[#E9E4DC] p-5 sm:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
              {/* Window Header */}
              <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-[#F0ECE4]">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                </div>
                <span className="text-xs font-semibold text-[#8C8479]">Create Secret Vault</span>
                <span className="text-[11px] font-mono text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">AES-256</span>
              </div>

              {/* Form elements */}
              <div className="space-y-3 text-xs sm:text-sm">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="text-[11px] font-semibold uppercase tracking-wider text-[#8A837A]">
                      Environment Secrets
                    </label>
                    <span className="text-[10px] text-[#9E978C] font-mono">2 keys added</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#FAF8F5] border border-[#EFEBE4] font-mono text-xs text-[#3D3A36] space-y-1.5">
                    <div className="flex justify-between">
                      <span className="font-semibold text-[#18181B]">DATABASE_URL</span>
                      <span className="text-[#8E877C]">•••••••••••••••••</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-[#18181B]">STRIPE_SECRET_KEY</span>
                      <span className="text-[#8E877C]">•••••••••••••••••</span>
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
                        {showPassword ? 'rome-vault-99' : '••••••••••••'}
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
                    className="w-full py-2.5 bg-[#18181B] hover:bg-black text-white text-xs font-medium rounded-full transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                  >
                    {step1LinkCreated ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Link created: https://safe-envs.dev/s/vault_9x8f2a</span>
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-3.5 h-3.5 text-[#E57A44]" />
                        <span>Generate Encrypted Link</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* TREE CONNECTOR: Splitting into Browser Path & CLI Path */}
        {/* ========================================================================= */}
        <div className="relative text-center">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF8F5] border border-[#E2DBD1] shadow-sm text-xs font-bold text-[#4A453E] uppercase tracking-wider">
            <GitBranch className="w-4 h-4 text-[#E57A44]" />
            <span>Access via web interface or CLI — whichever fits your workflow</span>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* STEP 2: TREE BRANCHES (Browser Path vs CLI Path) */}
        {/* ========================================================================= */}
        <div className={`grid gap-6 ${activeBranch === 'all' ? 'grid-cols-1 lg:grid-cols-2' : 'grid-cols-1'}`}>
          
          {/* BRANCH A: Browser Path */}
          {(activeBranch === 'all' || activeBranch === 'browser') && (
            <div className="relative bg-white rounded-3xl p-6 sm:p-8 border-2 border-[#DCE7FC] shadow-[0_8px_30px_rgba(59,102,222,0.06)] flex flex-col justify-between transition-all">
              {/* Branch Header Tag */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFF4FF] border border-[#D5E3FF] text-[#3B66DE] text-xs font-bold uppercase tracking-wider">
                    <Globe className="w-3.5 h-3.5" /> Path A • Web Browser
                  </div>
                  <span className="text-xs font-medium text-[#7E889B]">Zero Install</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#1E1C1A] mb-2 font-sans">
                  Open link & decrypt in browser
                </h3>
                <p className="text-sm text-[#6C665D] leading-relaxed mb-6">
                  Paste the generated link into any web browser. Enter your password to decrypt and view keys or download a clean <code className="bg-[#FAF8F5] px-1.5 py-0.5 rounded border border-[#EFEBE4] text-[#18181B] font-mono text-xs">.env</code> file.
                </p>

                {/* Interactive Browser Mockup */}
                <div className="bg-[#FAF8F5] rounded-2xl border border-[#E7E2D8] p-4 sm:p-5 space-y-3.5">
                  {/* Browser Address Bar */}
                  <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-[#E9E4DC] text-xs">
                    <Globe className="w-3.5 h-3.5 text-[#3B66DE]" />
                    <span className="font-mono text-[#333] truncate">safe-envs.dev/s/vault_9x8f2a</span>
                    <span className="ml-auto text-[10px] text-emerald-600 font-semibold bg-emerald-50 px-1.5 py-0.2 rounded">SSL</span>
                  </div>

                  {/* Password Unlock Input */}
                  {!browserDecrypted ? (
                    <div className="space-y-2 pt-1">
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#7C766E]">
                        Enter Password to Decrypt
                      </label>
                      <div className="flex gap-2">
                        <input
                          type="password"
                          placeholder="Enter vault password"
                          value={browserPassword}
                          onChange={(e) => setBrowserPassword(e.target.value)}
                          className="flex-1 px-3 py-1.5 bg-white border border-[#DDD6CB] rounded-lg text-xs font-mono focus:outline-none focus:border-[#3B66DE]"
                        />
                        <button
                          onClick={() => setBrowserDecrypted(true)}
                          className="px-4 py-1.5 bg-[#3B66DE] hover:bg-[#2F54BF] text-white text-xs font-medium rounded-lg transition-colors cursor-pointer"
                        >
                          Decrypt
                        </button>
                      </div>
                    </div>
                  ) : (
                    /* Decrypted Credentials View */
                    <div className="space-y-2.5 pt-1 animate-in fade-in duration-300">
                      <div className="flex items-center justify-between text-xs text-emerald-700 font-semibold bg-emerald-50 p-2 rounded-lg border border-emerald-200">
                        <span className="flex items-center gap-1.5">
                          <Check className="w-3.5 h-3.5" /> Decrypted successfully!
                        </span>
                        <button
                          onClick={() => setBrowserDecrypted(false)}
                          className="text-[10px] text-[#7A756D] hover:underline"
                        >
                          Lock again
                        </button>
                      </div>

                      <div className="p-2.5 bg-white rounded-lg border border-[#E9E4DC] font-mono text-xs space-y-1">
                        <div className="text-[#18181B] font-semibold">DATABASE_URL="postgres://..."</div>
                        <div className="text-[#18181B] font-semibold">STRIPE_SECRET_KEY="sk_live_..."</div>
                      </div>

                      <div className="flex gap-2 pt-1">
                        <button
                          onClick={() => {
                            setDownloadSuccess(true);
                            setTimeout(() => setDownloadSuccess(false), 2000);
                          }}
                          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 bg-[#18181B] hover:bg-black text-white text-xs font-medium rounded-lg transition-all cursor-pointer"
                        >
                          {downloadSuccess ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Download className="w-3.5 h-3.5" />}
                          <span>{downloadSuccess ? 'Downloaded .env' : 'Download .env File'}</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Footer Note */}
              <div className="mt-4 pt-3 border-t border-[#F0ECE4] text-xs text-[#7A756D] flex items-center justify-between">
                <span>✓ Perfect for teammates & non-devs</span>
                <span className="font-semibold text-[#3B66DE]">Web UI Ready</span>
              </div>
            </div>
          )}

          {/* BRANCH B: CLI Path */}
          {(activeBranch === 'all' || activeBranch === 'cli') && (
            <div className="relative bg-[#18181B] text-zinc-100 rounded-3xl p-6 sm:p-8 border-2 border-[#3F3F46] shadow-[0_8px_30px_rgba(0,0,0,0.2)] flex flex-col justify-between transition-all">
              {/* Branch Header Tag */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-800 border border-zinc-700 text-amber-400 text-xs font-bold uppercase tracking-wider">
                    <Terminal className="w-3.5 h-3.5" /> Path B • Command Line (CLI)
                  </div>
                  <span className="text-xs font-medium text-zinc-400">Developer Workflow</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 font-sans">
                  Pull credentials directly into CLI
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                  Add the generated link and password into your command line. It automatically pulls and appends the decrypted environment variables straight into your local environment.
                </p>

                {/* Interactive Terminal Mockup */}
                <div className="bg-black/80 rounded-2xl border border-zinc-800 p-4 sm:p-5 font-mono text-xs space-y-2.5">
                  {/* Terminal Tab Bar */}
                  <div className="flex items-center justify-between pb-2 border-b border-zinc-800 text-[11px] text-zinc-500">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                    </div>
                    <span>bash ~ my-project</span>
                    <div className="w-8" />
                  </div>

                  {/* Terminal Code Execution */}
                  <div className="space-y-1.5">
                    <div className="text-zinc-400 flex items-center justify-between">
                      <span>$ npx safe-envs-cli https://safe-envs.dev/s/vault_9x8f2a</span>
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText('npx super-envs pull https://safe-envs.dev/s/vault_9x8f2a');
                          setCliCopied(true);
                          setTimeout(() => setCliCopied(false), 2000);
                        }}
                        className="p-1 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 transition-colors"
                      >
                        {cliCopied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                      </button>
                    </div>

                    <div className="text-amber-400">? Enter vault password: ••••••••••••</div>

                    {cliRunning && (
                      <div className="text-blue-400 animate-pulse">
                        ⏳ Fetching & decrypting ciphertext...
                      </div>
                    )}

                    {cliComplete && (
                      <div className="space-y-1 pt-1 text-emerald-400 animate-in fade-in duration-200">
                        <div>✔ Vault decrypted successfully (AES-GCM-256)</div>
                        <div className="text-zinc-300">✔ Injected 2 variables into ./.env</div>
                        <div className="text-zinc-500 text-[10px]">$ ready to run `npm run dev`</div>
                      </div>
                    )}

                    {!cliComplete && !cliRunning && (
                      <div className="pt-2">
                        <button
                          onClick={handleRunCli}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-sans font-medium transition-colors cursor-pointer"
                        >
                          <Terminal className="w-3.5 h-3.5" /> Simulate CLI Pull
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Footer Note */}
              <div className="mt-4 pt-3 border-t border-zinc-800 text-xs text-zinc-400 flex items-center justify-between">
                <span>✓ Automatically writes to local .env</span>
                <span className="font-semibold text-emerald-400">CLI Automated</span>
              </div>
            </div>
          )}
        </div>

        {/* ========================================================================= */}
        {/* STEP 3: Auto expires after 2-5 minutes */}
        {/* ========================================================================= */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-white/70 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-[#EAE4DC] shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
          {/* Left Column */}
          <div className="md:col-span-6 flex items-start gap-5">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#EBFDF2] text-[#12B76A] border-2 border-white shadow-sm flex items-center justify-center font-bold text-lg">
              3
            </div>
            <div className="pt-1">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#ECFDF3] text-[#027A48] text-xs font-semibold uppercase tracking-wider mb-2">
                <Clock className="w-3.5 h-3.5" /> Step 3 • Self-Destruction
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#1E1C1A] mb-2.5 font-sans tracking-tight">
                Auto-expires after 2-5 minutes
              </h3>
              <p className="text-[15px] text-[#6C665D] leading-relaxed max-w-md">
                Your credentials and link automatically self-destruct after the time you set (2 to 5 minutes). No persistent storage. No residual traces.
              </p>
            </div>
          </div>

          {/* Right Column: Visual Mockup */}
          <div className="md:col-span-6 relative">
            <div className="bg-white rounded-2xl border border-[#E9E4DC] p-5 sm:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-xs font-semibold text-[#8C8479] uppercase tracking-wider block">
                    Self-Destruct Countdown
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
                <span className="text-emerald-700 font-medium">Memory purged upon expiration</span>
              </div>
            </div>

            {/* Floating Clock Badge */}
            <div className="absolute -bottom-4 -right-2 sm:-right-4 w-12 h-12 rounded-full bg-[#EBFDF2] border-2 border-white shadow-md flex items-center justify-center text-[#12B76A]">
              <Clock className="w-5 h-5 stroke-[2.2]" />
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* STEP 4: Completely password protected & encrypted (Zero Knowledge) */}
        {/* ========================================================================= */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-white/70 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-[#EAE4DC] shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
          {/* Left Column */}
          <div className="md:col-span-6 flex items-start gap-5">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#F6F4FE] text-[#7C3AED] border-2 border-white shadow-sm flex items-center justify-center font-bold text-lg">
              4
            </div>
            <div className="pt-1">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#F6F4FE] text-[#7C3AED] text-xs font-semibold uppercase tracking-wider mb-2">
                <ShieldCheck className="w-3.5 h-3.5" /> Step 4 • Privacy First
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#1E1C1A] mb-2.5 font-sans tracking-tight">
                Completely password protected & encrypted
              </h3>
              <p className="text-[15px] text-[#6C665D] leading-relaxed max-w-md">
                Even we cannot see your credentials. Secrets are encrypted client-side with AES-256 before leaving your machine and are only decrypted with your password.
              </p>
            </div>
          </div>

          {/* Right Column: Visual Mockup */}
          <div className="md:col-span-6 relative">
            <div className="bg-white rounded-2xl border border-[#E9E4DC] p-5 sm:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
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
                    0% (Mathematically Impossible)
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#5E584F] font-medium">Encrypted Payload:</span>
                  <span className="font-mono text-[10px] text-[#8E877C] bg-white px-2 py-0.5 rounded border border-[#ECE7DE]">
                    U2FsdGVkX19...8fE9
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-[11px] text-[#787268] bg-[#F9F8F5] p-2 rounded-lg border border-[#F0EBE3]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#7C3AED] flex-shrink-0" />
                <span>Zero backend persistence. Keys only exist in RAM during the active TTL window.</span>
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
