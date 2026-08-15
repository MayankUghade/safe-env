export const Footer = () => {
  return (
    <footer className="border-t border-[#10233F]/10 bg-white px-5 py-10 sm:px-8 lg:px-12">
      <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2.5">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 256 256" className="h-7 w-7 shrink-0">
            <path d="M 128 128 C 198.692 128 256 185.308 256 256 L 192 256 C 192 220.654 163.346 192 128 192 C 92.654 192 64 220.654 64 256 L 0 256 C 0 185.308 57.308 128 128 128 Z M 256 0 C 256 70.692 198.692 128 128 128 C 57.308 128 0 70.692 0 0 L 64 0 C 64 35.346 92.654 64 128 64 C 163.346 64 192 35.346 192 0 Z" fill="#245B8F" />
          </svg>
          <span className="text-lg font-semibold tracking-[-0.03em] text-[#10233F]">
            Super Env
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-[#53657A]">
          <a href="#features" className="transition-colors hover:text-[#10233F]">
            Features
          </a>
          <a href="#how-it-works" className="transition-colors hover:text-[#10233F]">
            How it works
          </a>
          <a href="#security" className="transition-colors hover:text-[#10233F]">
            Security
          </a>
          <a href="#pricing" className="transition-colors hover:text-[#10233F]">
            Pricing
          </a>
          <a href="/docs" className="transition-colors hover:text-[#10233F]">
            Docs
          </a>
        </div>

        <p className="text-xs text-[#10233F]/45">
          © {new Date().getFullYear()} Super Env. All rights reserved.
        </p>
      </div>
    </footer>
  );
};