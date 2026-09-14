import Image from "next/image";
import Link from "next/link";
import { authNavigation } from "@/src/consts";
import ThemeToggle from "../ThemeToggle";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="shrink-0 border-t border-border">
      <div className="mx-auto grid min-h-[72px] w-[min(calc(100%-40px),1152px)] grid-cols-[auto_1fr] items-center gap-x-4 py-2 md:grid-cols-[1fr_auto_1fr] md:py-0 max-[600px]:w-[min(calc(100%-24px),1152px)]">
        <Link
          className="flex w-fit items-center gap-[11px] text-base font-bold text-foreground hover:text-[#f3f3f3] focus-visible:outline-2 focus-visible:outline-current focus-visible:outline-offset-4 group-data-[theme=light]/theme:hover:text-[#171717] max-[600px]:gap-[5px] max-[600px]:text-[13px]"
          href="/"
          aria-label="test-3 home"
        >
          <Image
            className="h-auto shrink-0 group-data-[theme=light]/theme:brightness-0 max-[600px]:w-[17px]"
            src="/vercel.svg"
            alt=""
            width={22}
            height={19}
            loading="eager"
          />
          <span>test-3</span>
        </Link>

        <Navigation />

        <div className="col-start-2 row-start-1 flex items-center justify-end gap-2 md:col-start-3">
          {authNavigation.map(({ href, label }) => (
            <Link
              key={href}
              className="flex min-h-11 items-center rounded-md border border-border px-3 text-sm font-medium text-foreground hover:bg-[color-mix(in_srgb,var(--foreground)_9%,transparent)] focus-visible:outline-2 focus-visible:outline-current focus-visible:outline-offset-4 max-[600px]:px-2 max-[600px]:text-[13px]"
              href={href}
            >
              {label}
            </Link>
          ))}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
