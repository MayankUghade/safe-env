import Link from "next/link";

const HAND =
  "https://res.cloudinary.com/dxmda85h3/image/upload/v1786689841/left-hand_r906m5.png";

export const Hero = () => {
  return (
    <main className="super-env min-h-screen bg-white px-3 py-3 sm:px-5 sm:py-5 lg:px-6 mt-13">
      <section className="mx-auto w-full max-w-[1400px]">
        <div className="relative isolate min-h-[560px] overflow-hidden rounded-[28px] bg-[url('/bg-2.png')] bg-cover bg-center sm:min-h-[640px] lg:min-h-[720px]">
          <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2 z-[1] h-[420px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/15 blur-[100px] sm:h-[500px] sm:w-[750px] lg:h-[560px] lg:w-[850px]" />

          <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2 z-[1] h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.08] [background:repeating-conic-gradient(from_0deg,rgba(255,255,255,0.7)_0deg,rgba(255,255,255,0.7)_0.7deg,transparent_0.7deg,transparent_12deg)] blur-[1px]" />

          <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2 z-[1] h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 opacity-60 sm:h-[390px] sm:w-[390px] lg:h-[440px] lg:w-[440px]" />

          <img
            src={HAND}
            alt=""
            aria-hidden="true"
            draggable={false}
            className="pointer-events-none absolute -left-[3%] -top-[5%] z-[2] mt-10 w-[36%] -rotate-[4deg] select-none object-contain sm:-left-[2%] sm:-top-[4%] sm:mt-10 sm:w-[33%] lg:-left-[2%] lg:-top-[3%] lg:mt-8 lg:w-[30%]"
          />

          <img
            src={HAND}
            alt=""
            aria-hidden="true"
            draggable={false}
            className="pointer-events-none absolute -right-[3%] -bottom-[3%] z-[2] mb-10 w-[36%] rotate-[176deg] select-none object-contain sm:-right-[2%] sm:-bottom-[3%] sm:mb-10 sm:w-[33%] lg:-right-[2%] lg:-bottom-[2%] lg:mb-8 lg:w-[30%]"
          />

          <div className="relative z-10 flex min-h-[560px] flex-col items-center justify-center px-6 py-20 text-center sm:min-h-[640px] sm:px-10 sm:py-24 lg:min-h-[720px] lg:px-12 lg:py-28">
            <div className="w-full max-w-4xl">
              <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/60 px-4 py-1.5 text-xs font-medium text-[#53657A] shadow-[0_4px_20px_rgba(16,35,63,0.06)] backdrop-blur-md sm:mb-7 sm:text-sm">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0">
                  <path d="M12 2 4 6v6c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V6l-8-4Z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
                Secure
                <span className="text-[#8FA0B2]">•</span>
                Temporary
                <span className="text-[#8FA0B2]">•</span>
                Shareable
              </span>

              <h1 className="mx-auto max-w-3xl text-4xl font-medium leading-[1.02] tracking-[-0.045em] text-[#10233F] sm:text-5xl md:text-6xl lg:text-7xl">
                Make sure your envs are in{" "}
                <span className="font-serif italic text-[#245B8F]">safe hands.</span>
              </h1>

              <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-[#10233F]/60 sm:mt-6 sm:text-base sm:leading-7 lg:text-[17px]">
                Super Env lets you store, share, and manage temporary environment variables securely across your team.
              </p>
            
            
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:mt-9 sm:flex-row">
                <Link href = "/create">
                <button className="flex w-full items-center justify-center gap-2 rounded-full bg-[#10233F] px-6 py-3 text-sm font-medium text-white shadow-[0_8px_30px_rgba(16,35,63,0.18)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#193554] hover:shadow-[0_12px_35px_rgba(16,35,63,0.22)] sm:w-auto cursor-pointer" >
                  Get started
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14" />
                    <path d="m13 6 6 6-6 6" />
                  </svg>
                </button>
                </Link>
                
              <Link href="#how-it-works">
                <button className="w-full rounded-full border border-white/60 bg-white/50 px-6 py-3 text-sm font-medium text-[#10233F] shadow-[0_4px_20px_rgba(16,35,63,0.04)] backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/75 hover:shadow-[0_8px_25px_rgba(16,35,63,0.08)] sm:w-auto cursor-pointer">
                  See how it works
                </button>
              </Link>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
