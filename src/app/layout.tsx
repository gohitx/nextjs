import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "test-3",
    template: "%s | test-3",
  },
  description: "A simple portfolio template.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} group/theme antialiased`}
    >
      <body className="flex min-h-screen flex-col">
        {children}
      </body>
    </html>
  );
}
