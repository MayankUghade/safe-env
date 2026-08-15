export const Footer = () => {
  return (
    <footer className="border-t border-[#10233F]/10 bg-white px-5 py-10 sm:px-8 lg:px-12">
      <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2.5">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 256 256" className="h-7 w-7 shrink-0">
            <path
              d="M 152 70.059 L 201.539 20.519 L 235.48 54.461 L 185.941 104 L 256 104 L 256 152 L 185.941 152 L 235.48 201.539 L 201.539 235.48 L 152 185.941 L 152 256 L 104 256 L 104 185.941 L 54.46 235.48 L 20.52 201.539 L 70.059 152 L 0 152 L 0 104 L 70.059 104 L 20.519 54.46 L 54.461 20.52 L 104 70.059 L 104 0 L 152 0 Z"
              fill="#245B8F"
            />
          </svg>
          <span className="text-lg font-semibold tracking-[-0.03em] text-[#10233F]">
            Super Env
          </span>
        </div>

      <p className="text-xs text-[#10233F]/45">
        © {new Date().getFullYear()} Made by{" "}
        <a
          href="https://x.com/MayankUghade3"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-[#10233F] underline"
        >
          Mayank Ughade
        </a>
      </p>
      </div>
    </footer>
  );
};