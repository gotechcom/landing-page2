import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gotechcom.com"),
  title: "GoTechCom - Kiến tạo giải pháp công nghệ | Technology Solutions",
  description:
    "GoTechCom Technology JSC - Công ty cổ phần công nghệ chuyên cung cấp giải pháp phần mềm, hạ tầng công nghệ và tư vấn AI cho doanh nghiệp vừa và nhỏ tại Việt Nam. Thành lập từ 2015.",
  keywords: [
    "GoTechCom",
    "giải pháp công nghệ",
    "phần mềm doanh nghiệp",
    "GoStore",
    "Betinyai",
    "AI consulting",
    "custom software Vietnam",
    "phát triển phần mềm",
    "chuyển đổi số",
    "technology solutions Vietnam",
  ],
  authors: [{ name: "GoTechCom Technology JSC" }],
  openGraph: {
    title: "GoTechCom - Kiến tạo giải pháp công nghệ cho doanh nghiệp Việt",
    description:
      "Giải pháp phần mềm, hạ tầng công nghệ và tư vấn AI cho doanh nghiệp vừa và nhỏ. Sản phẩm: GoStore.vn, Betinyai.com",
    url: "https://gotechcom.com",
    siteName: "GoTechCom",
    locale: "vi_VN",
    alternateLocale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo-og.svg",
        width: 1200,
        height: 630,
        alt: "GoTechCom Technology Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GoTechCom - Technology Solutions for Vietnamese Enterprises",
    description:
      "Software solutions, tech infrastructure & AI consulting for SMBs in Vietnam since 2015.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const t = localStorage.getItem('theme');
                if (t === 'dark' || (!t && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                }
              } catch (e) {}
            `,
          }}
        />
        {/* Structured data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "GoTechCom Technology JSC",
              alternateName: "GOTC CO.,LTD",
              url: "https://gotechcom.com",
              logo: "https://gotechcom.com/favicon.svg",
              foundingDate: "2015-11-20",
              taxID: "0107123893",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "Tầng 5, số 1/120 đường Trường Chinh, Phường Phương Mai",
                addressLocality: "Quận Đống Đa",
                addressRegion: "Hà Nội",
                addressCountry: "VN",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+84936900898",
                email: "thanhle@gotechcom.com",
                contactType: "sales",
                availableLanguage: ["Vietnamese", "English"],
              },
              sameAs: [
                "https://gostore.vn",
                "https://betinyai.com",
              ],
            }),
          }}
        />
        {/* Umami Analytics - free, open-source, privacy-focused */}
        {process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID && (
          <script
            defer
            src="https://cloud.umami.is/script.js"
            data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
          />
        )}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
