import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { poppins } from "@/lib/font";
import { ThemeToggle } from "@/components/theme-toggle";

export const metadata: Metadata = {
  title: "Dickson - Web Designer & Developer",
  description:
    "Professional web designer and frontend developer based in New York City",
  keywords: [
    "web design",
    "frontend development",
    "UI/UX design",
    "React developer",
  ],
  authors: [{ name: "Dickson" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourdomain.com",
    title: "Dickson - Web Designer & Developer",
    description:
      "Professional web designer and frontend developer based in New York City",
    siteName: "Dickson Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dickson - Web Designer & Developer",
    description:
      "Professional web designer and frontend developer based in New York City",
    creator: "@dickson",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          poppins.className,
          "min-h-screen bg-background font-sans antialiased"
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ThemeToggle />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
