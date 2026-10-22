import type { Topbar as TopbarType } from "../../content/manifesto.types";

export function Topbar({ marca }: TopbarType) {
  return (
    <header className="absolute top-0 inset-x-0 z-40 border-b border-white/10 bg-section-dark-bg md:fixed">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <span className="font-display text-[15px] font-semibold text-section-dark-fg sm:text-base md:text-[18px]">
          {marca}
        </span>
      </div>
    </header>
  );
}

