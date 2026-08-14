import { Button } from "./ui/button";

export const Navbar = () => {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 px-4 pt-3 sm:px-6 lg:px-10">
      <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between rounded-full border border-white/50 bg-white/60 px-4 py-2.5 shadow-[0_4px_24px_rgba(16,35,63,0.06)] backdrop-blur-xl sm:px-5">
        <a href="/" className="flex items-center gap-2.5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 256 256"
            className="h-8 w-8 shrink-0"
          >
            <path
              d="M 128 128 C 198.692 128 256 185.308 256 256 L 192 256 C 192 220.654 163.346 192 128 192 C 92.654 192 64 220.654 64 256 L 0 256 C 0 185.308 57.308 128 128 128 Z M 256 0 C 256 70.692 198.692 128 128 128 C 57.308 128 0 70.692 0 0 L 64 0 C 64 35.346 92.654 64 128 64 C 163.346 64 192 35.346 192 0 Z"
              fill="#245B8F"
            />
          </svg>

          <span className="text-[22px] font-semibold tracking-[-0.03em] text-[#10233F]">
            Super Env
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#features"
            className="text-sm font-medium text-[#53657A] transition-colors hover:text-[#10233F]"
          >
            Features
          </a>

          <a
            href="#how-it-works"
            className="text-sm font-medium text-[#53657A] transition-colors hover:text-[#10233F]"
          >
            How it works
          </a>

          <a
            href="#security"
            className="text-sm font-medium text-[#53657A] transition-colors hover:text-[#10233F]"
          >
            Security
          </a>

          <a
            href="#pricing"
            className="text-sm font-medium text-[#53657A] transition-colors hover:text-[#10233F]"
          >
            Pricing
          </a>
        </div>

        <Button className="rounded-full bg-[#10233F] px-5 py-2.5 text-sm font-medium text-white shadow-[0_6px_20px_rgba(16,35,63,0.14)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#193554] hover:shadow-[0_10px_25px_rgba(16,35,63,0.18)]">
          Get started
        </Button>
      </div>
    </nav>
  );
};