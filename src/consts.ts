export const SITE = {
  name: "Starter",
  description: "A starting point for your next project.",
  lang: "en",
} as const;

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/contact", label: "Contact" },
] as const;

export const authNavigation = [
  { href: "/login", label: "Login" },
  { href: "/register", label: "Register" },
] as const;

export const socials = [
  {
    href: "https://x.com/intent/follow?screen_name=gohitx",
    icon: "Twitter",
    label: "X (Twitter)",
  },
  {
    href: "https://github.com/gohitx",
    icon: "GitHubThin",
    label: "GitHub",
  },
  {
    href: "https://linkedin.com/in/gohitx",
    icon: "Linkedin",
    label: "LinkedIn",
  },
  {
    href: "https://instagram.com/gohitx",
    icon: "Instagram",
    label: "Instagram",
  },
  {
    href: "https://www.youtube.com/@gohitx?sub_confirmation=1",
    icon: "YouTube",
    label: "YouTube",
  },
  {
    href: "https://tiktok.com/@gohitx",
    icon: "Tiktok",
    label: "TikTok",
  },
  {
    href: "https://facebook.com/gohitx",
    icon: "Facebook",
    label: "Facebook",
  },
] as const;
