export const Banner = () => {
  return (
    <div className="mx-auto my-20 w-full max-w-[1100px] px-4 sm:px-6">
      <div className="relative min-h-[420px] overflow-hidden rounded-[28px] bg-[url('/bg-2.png')] bg-cover bg-center shadow-[0_20px_60px_rgba(16,35,63,0.10)] sm:min-h-[440px]">
        <div className="absolute inset-0 z-[1] bg-gradient-to-r from-white/95 via-white/80 to-white/35" />

        <div className="absolute -right-24 top-1/2 z-[1] h-[480px] w-[480px] -translate-y-1/2 rounded-full bg-[#245B8F]/10 blur-[100px]" />

        <div className="absolute -right-10 -top-20 z-[1] h-[260px] w-[260px] rounded-full bg-white/30 blur-[70px]" />

        <div className="absolute inset-0 z-[2] bg-[url('/noise.png')] bg-[length:180px_180px] opacity-[0.055] mix-blend-multiply" />

        <div className="absolute right-[8%] top-1/2 z-[2] hidden h-[260px] w-[260px] -translate-y-1/2 rounded-full border border-white/40 opacity-50 sm:block" />

        <div className="absolute right-[12%] top-1/2 z-[2] hidden h-[170px] w-[170px] -translate-y-1/2 rounded-full border border-[#245B8F]/10 sm:block" />

        <div className="absolute bottom-0 right-0 z-[2] h-40 w-[65%] bg-gradient-to-t from-[#dcecf5]/30 to-transparent" />

        <div className="relative z-10 flex min-h-[420px] flex-col justify-center px-7 py-14 sm:min-h-[440px] sm:px-10 lg:px-14">
          <div className="max-w-[600px]">
            <div className="mb-4 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-[#245B8F]/70">
              <span className="h-px w-6 bg-[#245B8F]/40" />
              Built for your team
            </div>

            <h2 className="max-w-[520px] text-4xl font-medium leading-[1.02] tracking-[-0.045em] text-[#10233F] sm:text-5xl lg:text-[52px]">
              Keep your env&apos;s{" "}
              <span className="font-serif italic text-[#245B8F]">safe.</span>
            </h2>

            <p className="mt-5 max-w-[480px] text-sm leading-6 text-[#10233F]/65 sm:text-base sm:leading-7">
              Share secrets securely, without the hassle. Password-protected,
              self-destructing links your team can trust.
            </p>

            <div className="mt-6 grid max-w-[480px] grid-cols-2 gap-x-8 gap-y-3 text-xs text-[#10233F]/70 sm:text-sm">
              <div className="flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#245B8F]/60" />
                No login required
              </div>

              <div className="flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#245B8F]/60" />
                Free forever
              </div>

              <div className="flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#245B8F]/60" />
                End-to-end encrypted
              </div>

              <div className="flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#245B8F]/60" />
                Self-destructing links
              </div>
            </div>

            <button className="mt-7 flex w-fit items-center gap-3 rounded-full bg-[#10233F] px-6 py-3.5 text-sm font-medium text-white shadow-[0_8px_25px_rgba(16,35,63,0.18)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#193554] hover:shadow-[0_12px_30px_rgba(16,35,63,0.22)]">
              Get started
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14" />
                <path d="m13 6 6 6-6 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};