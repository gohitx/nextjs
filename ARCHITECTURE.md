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
│       └── GXB.tsx
└── consts.ts                   Main and account navigation links
```