import Link from "next/link";

export const Banner = () => {
  return (
    <div className="mx-auto my-20 w-full max-w-[1300px] px-4 sm:px-6">
      <div className="relative min-h-[420px] overflow-hidden rounded-[28px] bg-[url('/bg-2.png')] bg-cover bg-center shadow-[0_20px_60px_rgba(16,35,63,0.10)] sm:min-h-[440px]">
        <div className="absolute inset-0 z-[1] bg-gradient-to-r from-white/95 via-white/80 to-white/35" />
        <div className="absolute -right-24 top-1/2 z-[1] h-[480px] w-[480px] -translate-y-1/2 rounded-full bg-[#245B8F]/10 blur-[100px]" />
        <div className="absolute -right-10 -top-20 z-[1] h-[260px] w-[260px] rounded-full bg-white/30 blur-[70px]" />
        <div className="absolute inset-0 z-[2] bg-[url('/noise.png')] bg-[length:180px_180px] opacity-[0.055] mix-blend-multiply" />


        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="pointer-events-none absolute -right-16 -top-16 z-[1] h-[340px] w-[340px] rotate-12 opacity-[0.06] sm:h-[420px] sm:w-[420px]">
          <path
            d="M 152 70.059 L 201.539 20.519 L 235.48 54.461 L 185.941 104 L 256 104 L 256 152 L 185.941 152 L 235.48 201.539 L 201.539 235.48 L 152 185.941 L 152 256 L 104 256 L 104 185.941 L 54.46 235.48 L 20.52 201.539 L 70.059 152 L 0 152 L 0 104 L 70.059 104 L 20.519 54.46 L 54.461 20.52 L 104 70.059 L 104 0 L 152 0 Z"
            fill="#10233F"
          />
        </svg>

        <div className="relative z-10 flex min-h-[420px] flex-col justify-center px-7 py-14 sm:min-h-[440px] sm:px-10 lg:px-14">
          <div className="max-w-[600px]">
            <div className="mb-4 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-[#245B8F]/70">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="h-3 w-3 shrink-0">
                <path
                  d="M 152 70.059 L 201.539 20.519 L 235.48 54.461 L 185.941 104 L 256 104 L 256 152 L 185.941 152 L 235.48 201.539 L 201.539 235.48 L 152 185.941 L 152 256 L 104 256 L 104 185.941 L 54.46 235.48 L 20.52 201.539 L 70.059 152 L 0 152 L 0 104 L 70.059 104 L 20.519 54.46 L 54.461 20.52 L 104 70.059 L 104 0 L 152 0 Z"
                  fill="#245B8F"
                />
              </svg>
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
        <Link href="/create">
            <button className="mt-7 flex w-fit items-center gap-3 rounded-full bg-[#10233F] px-6 py-3.5 text-sm font-medium text-white shadow-[0_8px_25px_rgba(16,35,63,0.18)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#193554] hover:shadow-[0_12px_30px_rgba(16,35,63,0.22)] cursor-pointer">
              Get started
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14" />
                <path d="m13 6 6 6-6 6" />
              </svg>
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};