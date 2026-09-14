export const SITE = {
  name: 'test-3',
} as const;

export const navigation = [
  { href: '/', label: 'Home' },
  { href: '/work', label: 'Work' },
  { href: '/contact', label: 'Contact' },
] as const;

export const authNavigation = [
  { href: '/login', label: 'Login' },
  { href: '/register', label: 'Register' },
] as const;
