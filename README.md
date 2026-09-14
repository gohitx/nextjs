# Plantilla

A small Next.js App Router starter using Bun, TypeScript, Tailwind CSS 4, Geist, and Lucide icons. Five routes, a responsive shared header, social links, and an animated light/dark toggle. No authentication service or database is included.

## Run locally

```bash
bun install
bun run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Check the project

```bash
bun run lint
bun run build
```

## Structure and routes

```text
src/
├── app/
│   ├── layout.tsx              Root document, font, and default metadata
│   ├── globals.css             Shared theme colors and base styles
│   ├── favicon.ico
│   ├── (workspace)/
│   │   ├── layout.tsx          Shared header for public site pages
│   │   ├── page.tsx            / — Home with GXB and social links
│   │   ├── work/page.tsx       /work — hello Work
│   │   └── contact/page.tsx    /contact — hello Contact
│   └── (auth)/
│       ├── login/page.tsx      /login — hello Login
│       └── register/page.tsx   /register — hello register
├── components/
│   ├── ThemeToggle.tsx
│   ├── icons/social-media.tsx
│   └── ui/
│       ├── Header.tsx
│       ├── Navigation.tsx
│       └── GXB.tsx
└── consts.ts                   Main and account navigation links
```

Names in parentheses are route groups, not URL segments. `(workspace)` groups pages that share the header. `(auth)` groups the two greeting-only pages, without that header or an extra layout. All five routes are public; neither group provides authentication or route protection.

Pages and layouts are Server Components. Only navigation's active-link detection and the theme button need Client Components.

## Adapt the template

- Navigation labels and destinations: [src/consts.ts](src/consts.ts).
- Brand name and logo: [Header.tsx](src/components/ui/Header.tsx). Replace `test-3` and `/vercel.svg`.
- Default title, title suffix, description, and document language: [layout.tsx](src/app/layout.tsx). Each placeholder page supplies its own title.
- Home content and social destinations: [GXB.tsx](src/components/ui/GXB.tsx) and [Home](src/app/(workspace)/page.tsx).
- Shared background, foreground, border, and scrollbar colors: [globals.css](src/app/globals.css). Component-specific styling stays in its component.
- Public assets: `public/`; the favicon lives in `src/app/favicon.ico`.

The existing `@/` alias points to the repository root, so source imports use `@/src/...`.

### Add or remove a page

To add a page with the shared header, create `src/app/(workspace)/about/page.tsx`, default-export its page component, and add `/about` to `navigation` in `src/consts.ts`. Setting `metadata.title` on that page uses the root title suffix automatically.

To remove a page, remove both its directory and its navigation entry. Editing `consts.ts` changes links, not the route files.

If account pages are not needed, set `authNavigation` to `[]` and delete `src/app/(auth)/`. The header can stay unchanged. For a complete cleanup, also remove the empty export and its import/rendering block in Header.

There are no form handlers, session helpers, or backend dependencies to remove. Add them only when a real project needs authentication.

## Theme and motion

The initial theme is dark. The button changes `html[data-theme]`; colors, icon visibility, and the button's accessible label all follow that same attribute. The theme stays consistent during client-side navigation and when the header mounts again.

The selection is not stored: a full reload or opening a new document starts dark again. There is no automatic system-theme detection.

Colors switch immediately. The sun/moon rotation and hover motion remain enabled, with reduced-motion support for users who request it. The smooth-scrolling fallback in global CSS is also an accessibility rule, not unused code.

## Browser checks before reuse

After lint and build, check all five routes both by direct URL and through the header. Verify back/forward navigation, the current-page indicator, keyboard focus, theme switching before and after visiting an account page, and layouts at mobile and desktop widths. Check reduced-motion mode too; a successful build alone does not verify these interactions.
