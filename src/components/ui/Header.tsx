import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "../ThemeToggle";

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" href="/" aria-label="test-3 home">
          <Image
            className="brand-mark"
            src="/vercel.svg"
            alt=""
            width={22}
            height={19}
            loading="eager"
          />
          <span>test-3</span>
        </Link>

        <nav className="primary-nav" aria-label="Main navigation">
          <Link href="/#home" aria-current="page">
            Home
          </Link>
          <Link href="/#work">Work</Link>
          <Link href="/#contact">Contact</Link>
        </nav>

        <div className="header-actions">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
