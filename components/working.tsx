"use client"

import React, { useState } from 'react';
import { Lock, Eye, EyeOff, Users, Clock, ShieldCheck, ChevronDown, Check, UserPlus } from 'lucide-react';

export const HowItWorksSection: React.FC = () => {
  // Step 1 interactive state
  const [revealed, setRevealed] = useState<{ [key: string]: boolean }>({});
  const toggleReveal = (key: string) => {
    setRevealed((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // Step 2 interactive state
  const [members, setMembers] = useState([
    { email: 'alice@example.com', role: 'Viewer' },
    { email: 'bob@example.com', role: 'Editor' },
  ]);
  const [inviteSent, setInviteSent] = useState(false);

  // Step 3 interactive state
  const [expireHours, setExpireHours] = useState(2.5); // 2h 30m

  return (
    <section id="how-it-works" className="py-5 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
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
        {/* Subtle connecting vertical line behind step numbers */}
        <div className="hidden md:block absolute left-[27px] top-8 bottom-12 w-[1.5px] bg-[#E8E2D8] -z-0" />

        {/* STEP 1: Store your envs */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Left Column: Number + Content */}
          <div className="md:col-span-6 flex items-start gap-5">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#FFEFE6] text-[#E57A44] border-2 border-white shadow-sm flex items-center justify-center font-bold text-lg">
              1
            </div>
            <div className="pt-1">
              <h3 className="text-xl sm:text-2xl font-bold text-[#1E1C1A] mb-2.5 font-sans tracking-tight">
                Store your envs
              </h3>
              <p className="text-[15px] text-[#6C665D] leading-relaxed max-w-md">
                Add your environment variables securely via the dashboard, CLI or API. Everything is encrypted before it's stored.
              </p>
            </div>
          </div>

          {/* Right Column: Visual Mockup */}
          <div className="md:col-span-6 relative">
            <div className="bg-white rounded-2xl border border-[#E9E4DC] p-5 sm:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all">
              {/* Window Bar */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#F0ECE4]">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                </div>
                <span className="text-xs font-semibold text-[#8C8479]">super env's</span>
                <div className="w-8" />
              </div>

              {/* Secrets List */}
              <div className="space-y-3 font-mono text-xs sm:text-sm">
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#FAF8F5] border border-[#EFEBE4]">
                  <span className="font-semibold text-[#3D3A36]">DATABASE_URL</span>
                  <div className="flex items-center gap-2">
                    <span className="text-[#8E877C] tracking-widest">
                      {revealed['db'] ? 'postgresql://prod_db:5432' : '•••••••••••••'}
                    </span>
                    <button
                      onClick={() => toggleReveal('db')}
                      className="text-[#B3ABA0] hover:text-[#E57A44] transition-colors p-0.5"
                    >
                      {revealed['db'] ? <EyeOff className="w-3.5 h-3.5" /> : <Lock className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#FAF8F5] border border-[#EFEBE4]">
                  <span className="font-semibold text-[#3D3A36]">API_KEY</span>
                  <div className="flex items-center gap-2">
                    <span className="text-[#8E877C] tracking-widest">
                      {revealed['api'] ? 'sk_live_9948271049' : '•••••••••••••'}
                    </span>
                    <button
                      onClick={() => toggleReveal('api')}
                      className="text-[#B3ABA0] hover:text-[#E57A44] transition-colors p-0.5"
                    >
                      {revealed['api'] ? <EyeOff className="w-3.5 h-3.5" /> : <Lock className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#FAF8F5] border border-[#EFEBE4]">
                  <span className="font-semibold text-[#3D3A36]">JWT_SECRET</span>
                  <div className="flex items-center gap-2">
                    <span className="text-[#8E877C] tracking-widest">
                      {revealed['jwt'] ? 'auth_jwt_super_key' : '•••••••••••••'}
                    </span>
                    <button
                      onClick={() => toggleReveal('jwt')}
                      className="text-[#B3ABA0] hover:text-[#E57A44] transition-colors p-0.5"
                    >
                      {revealed['jwt'] ? <EyeOff className="w-3.5 h-3.5" /> : <Lock className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Lock Badge */}
            <div className="absolute -bottom-4 -right-2 sm:-right-4 w-12 h-12 rounded-full bg-[#FFEFE6] border-2 border-white shadow-md flex items-center justify-center text-[#E57A44]">
              <Lock className="w-5 h-5 stroke-[2.2]" />
            </div>
          </div>
        </div>

        {/* STEP 2: Share with your team */}

        {/* STEP 3: Auto-expire */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Left Column */}
          <div className="md:col-span-6 flex items-start gap-5">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#EBFDF2] text-[#12B76A] border-2 border-white shadow-sm flex items-center justify-center font-bold text-lg">
              2
            </div>
            <div className="pt-1">
              <h3 className="text-xl sm:text-2xl font-bold text-[#1E1C1A] mb-2.5 font-sans tracking-tight">
                Auto-expire
              </h3>
              <p className="text-[15px] text-[#6C665D] leading-relaxed max-w-md">
                Your envs automatically expire after the time you set. No clutter. No risk.
              </p>
            </div>
          </div>

          {/* Right Column: Visual Mockup */}
          <div className="md:col-span-6 relative">
            <div className="bg-white rounded-2xl border border-[#E9E4DC] p-5 sm:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-semibold text-[#2D2A26]">Expires in</span>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ECFDF3] border border-[#D1FADF] text-[#027A48] text-xs font-semibold">
                  <Clock className="w-3.5 h-3.5" />
                  <span>2h 30m</span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-[#F2EFE9] h-2.5 rounded-full overflow-hidden mb-1">
                <div
                  className="bg-[#A6D96A] h-full rounded-full transition-all duration-500"
                  style={{ width: '68%' }}
                />
              </div>
            </div>

            {/* Floating Clock Badge */}
            <div className="absolute -bottom-4 -right-2 sm:-right-4 w-12 h-12 rounded-full bg-[#EBFDF2] border-2 border-white shadow-md flex items-center justify-center text-[#12B76A]">
              <Clock className="w-5 h-5 stroke-[2.2]" />
            </div>
          </div>
        </div>

        {/* STEP 4: Stay secure */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Left Column */}
          <div className="md:col-span-6 flex items-start gap-5">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#F6F4FE] text-[#7C3AED] border-2 border-white shadow-sm flex items-center justify-center font-bold text-lg">
              3
            </div>
            <div className="pt-1">
              <h3 className="text-xl sm:text-2xl font-bold text-[#1E1C1A] mb-2.5 font-sans tracking-tight">
                Stay secure
              </h3>
              <p className="text-[15px] text-[#6C665D] leading-relaxed max-w-md">
                Rest easy knowing your secrets are safe with end-to-end encryption and audit logs.
              </p>
            </div>
          </div>

          {/* Right Column: Visual Mockup */}
          <div className="md:col-span-6 relative">
            <div className="bg-white rounded-2xl border border-[#E9E4DC] p-5 sm:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
              <h4 className="text-xs font-semibold text-[#8C8479] uppercase tracking-wider mb-3.5">
                Audit log
              </h4>

              <div className="flex items-center justify-between p-3 rounded-xl bg-[#FAF8F5] border border-[#EFEBE4]">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white border border-[#E8E2D8] flex items-center justify-center text-[#6B655D]">
                    <ShieldCheck className="w-4 h-4 text-[#7C3AED]" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-semibold text-[#292623]">
                      Variable accessed
                    </div>
                    <div className="text-[11px] sm:text-xs text-[#827C74]">
                      by alice@example.com
                    </div>
                  </div>
                </div>
                <span className="text-[11px] sm:text-xs text-[#9E978C] font-medium">
                  2m ago
                </span>
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
