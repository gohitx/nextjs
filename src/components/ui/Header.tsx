import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "../ThemeToggle";

const navigation = [
  { href: "/#home", label: "Home" },
  { href: "/#work", label: "Work" },
  { href: "/#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="h-[73px] border-t border-[#303030] group-data-[theme=light]/theme:border-[#dedede]">
      <div className="mx-auto grid h-full w-[min(calc(100%-40px),1152px)] grid-cols-[1fr_auto_1fr] items-center max-[600px]:w-[min(calc(100%-24px),1152px)]">
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

        <nav
          className="flex items-center gap-7 max-[600px]:gap-3"
          aria-label="Main navigation"
        >
          {navigation.map(({ href, label }) => (
            <Link
              key={href}
              className="relative flex min-h-11 items-center text-base font-medium text-foreground after:absolute after:inset-x-0 after:bottom-2 after:h-px after:origin-center after:scale-x-0 after:bg-current after:[transition:transform_220ms_ease] hover:text-[#f3f3f3] hover:after:scale-x-100 focus-visible:outline-2 focus-visible:outline-current focus-visible:outline-offset-4 focus-visible:after:scale-x-100 group-data-[theme=light]/theme:hover:text-[#171717] motion-reduce:after:[transition-duration:0.01ms] max-[600px]:text-[13px]"
              href={href}
              aria-current={label === "Home" ? "page" : undefined}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex justify-end">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
