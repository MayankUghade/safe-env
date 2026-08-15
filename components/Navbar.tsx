import Link from "next/link";
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
              d="M 152 70.059 L 201.539 20.519 L 235.48 54.461 L 185.941 104 L 256 104 L 256 152 L 185.941 152 L 235.48 201.539 L 201.539 235.48 L 152 185.941 L 152 256 L 104 256 L 104 185.941 L 54.46 235.48 L 20.52 201.539 L 70.059 152 L 0 152 L 0 104 L 70.059 104 L 20.519 54.46 L 54.461 20.52 L 104 70.059 L 104 0 L 152 0 Z"
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
        </div>

        <Link href="/create">
        <Button className="rounded-full bg-[#10233F] px-5 py-2.5 text-sm font-medium text-white shadow-[0_6px_20px_rgba(16,35,63,0.14)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#193554] hover:shadow-[0_10px_25px_rgba(16,35,63,0.18)]">
            Get started
        </Button>
        </Link>
      </div>
    </nav>
  );
};

