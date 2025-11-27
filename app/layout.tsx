import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/shared/navbar";
import { Footer } from "@/components/shared/footer";
import { personalInfo } from "@/lib/data";
import { GoogleAnalytics } from "@/components/google-analytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://dilmith.live"),
  title: {
    default: "Dilmith Pathirana | Software Engineer",
    template: "%s | Dilmith Pathirana",
  },
  description: personalInfo.summary,
  keywords: [
    "Software Engineer",
    "Full Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Sri Lanka",
    "Portfolio",
    "Dilmith Pathirana",
    "Web Developer",
    "Java",
    "Python",
    "Cloud Computing",
  ],
  authors: [{ name: "Dilmith Pathirana", url: "https://dilmith.live" }],
  creator: "Dilmith Pathirana",
  publisher: "Dilmith Pathirana",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dilmith.live",
    title: "Dilmith Pathirana | Software Engineer",
    description: personalInfo.summary,
    siteName: "Dilmith Pathirana Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dilmith Pathirana Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dilmith Pathirana | Software Engineer",
    description: personalInfo.summary,
    images: ["/og-image.png"],
    creator: "@dilmithp",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: personalInfo.name,
              url: "https://dilmith.live",
              image: "https://dilmith.live/og-image.png",
              sameAs: [
                personalInfo.github,
                personalInfo.linkedin,
                `mailto:${personalInfo.email}`,
              ],
              jobTitle: personalInfo.role,
              worksFor: {
                "@type": "Organization",
                name: "SynthiaSync (Pvt) Ltd",
              },
              description: personalInfo.summary,
              address: {
                "@type": "PostalAddress",
                addressLocality: "Bandarawela",
                addressCountry: "Sri Lanka",
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <GoogleAnalytics />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="flex-1 h-screen overflow-hidden">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
