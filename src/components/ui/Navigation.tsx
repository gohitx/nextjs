"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/src/consts";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav
      className="col-span-2 row-start-2 flex items-center justify-center gap-7 md:col-span-1 md:col-start-2 md:row-start-1 max-[600px]:gap-3"
      aria-label="Main navigation"
    >
      {navigation.map(({ href, label }) => (
        <Link
          key={href}
          className="relative flex min-h-11 items-center text-base font-medium text-foreground after:absolute after:inset-x-0 after:bottom-2 after:h-px after:origin-center after:scale-x-0 after:bg-current after:[transition:scale_220ms_ease] hover:text-[#f3f3f3] hover:after:scale-x-100 focus-visible:outline-2 focus-visible:outline-current focus-visible:outline-offset-4 focus-visible:after:scale-x-100 aria-[current=page]:after:scale-x-100 group-data-[theme=light]/theme:hover:text-[#171717] motion-reduce:after:transition-none max-[600px]:text-[13px]"
          href={href}
          aria-current={pathname === href ? "page" : undefined}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}
