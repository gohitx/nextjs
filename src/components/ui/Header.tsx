import Link from 'next/link';
import ThemeToggle from '../ThemeToggle';

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" href="/" aria-label="test-3 home">
          <svg className="brand-mark" width="22" height="24" viewBox="0 0 22 24" fill="none" aria-hidden="true">
            <path d="M8 2h6l6 15-7-2-2-5-2 5-7 2L8 2Z" fill="currentColor" />
            <path d="m11 19-3 2 3 2 3-2-3-2Z" fill="currentColor" />
          </svg>
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
