import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/portfolio/theme-provider";
import { SplashScreen } from "@/components/portfolio/splash-screen";

const display = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const SITE_URL = "https://wafiqizna.dev";
const NAME = "Moch. Wafiq Izna";
const TITLE = "Moch. Wafiq Izna | Full Stack Developer & Project Manager";
const DESCRIPTION =
  "Personal portfolio of Moch. Wafiq Izna, Full Stack Developer and Project Manager based in Surabaya, Indonesia. Explore projects, professional experience, and technical skills.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: `%s — ${NAME}`,
  },
  description: DESCRIPTION,
  keywords: [
    "Moch. Wafiq Izna",
    "Wafiq Izna",
    "Full Stack Developer",
    "Project Manager",
    "Web Developer Surabaya",
    "Laravel Developer",
    "Vue.js Developer",
    "Portfolio",
    "Indonesia Developer",
    "Software Engineer",
  ],
  authors: [{ name: NAME, url: SITE_URL }],
  creator: NAME,
  publisher: NAME,
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "Moch. Wafiq Izna — Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/profile.png",
        width: 827,
        height: 1134,
        alt: "Moch. Wafiq Izna — Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/profile.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "portfolio",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#080808" },
    { media: "(prefers-color-scheme: light)", color: "#f6f6f6" },
  ],
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: NAME,
  jobTitle: ["Full Stack Developer", "Project Manager"],
  email: "mailto:mochwafiqizna@gmail.com",
  telephone: "+62-815-5404-8271",
  url: SITE_URL,
  image: `${SITE_URL}/profile.png`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Surabaya",
    addressRegion: "East Java",
    addressCountry: "ID",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Universitas Negeri Surabaya",
  },
  knowsAbout: [
    "Full Stack Development",
    "Laravel",
    "Vue.js",
    "Node.js",
    "Project Management",
    "REST API",
    "Database Design",
  ],
  sameAs: ["https://github.com/Wafiq1977"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body
        className={`${display.variable} ${mono.variable} font-sans antialiased bg-background text-foreground selection:bg-foreground selection:text-background`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <SplashScreen />
          {children}
          <Toaster />
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
