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
  alternates: {
    canonical: "https://gotechcom.com",
    languages: {
      vi: "https://gotechcom.com/?lang=vi",
      en: "https://gotechcom.com/?lang=en",
    },
  },
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
        {/* Structured data: SoftwareApplication (GoStore) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "GoStore.vn",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web, iOS, Android",
              url: "https://gostore.vn",
              description:
                "Nền tảng quản lý bán hàng POS trên nền tảng đám mây dành cho doanh nghiệp vừa và nhỏ.",
              author: {
                "@type": "Organization",
                name: "GoTechCom Technology JSC",
                url: "https://gotechcom.com",
              },
              datePublished: "2017",
              featureList: [
                "Quản lý đa chi nhánh tập trung",
                "Kiểm soát kho hàng thời gian thực",
                "Tích hợp sàn thương mại điện tử",
                "Ứng dụng di động cho iOS & Android",
                "Báo cáo doanh thu & phân tích kinh doanh",
                "Quản lý khách hàng và chương trình khuyến mãi",
              ],
            }),
          }}
        />
        {/* Structured data: Product (BetinyAI) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name: "BetinyAI",
              url: "https://betinyai.com",
              description:
                "Thiết bị đồng hành AI không màn hình dành cho trẻ em — sản phẩm kết hợp trí tuệ nhân tạo và giáo dục sớm.",
              brand: {
                "@type": "Brand",
                name: "BetinyAI",
              },
              manufacturer: {
                "@type": "Organization",
                name: "GoTechCom Technology JSC",
                url: "https://gotechcom.com",
              },
              category: "Educational Device",
              releaseDate: "2025",
            }),
          }}
        />
        {/* Structured data: Services */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Service",
                name: "Phát triển hạ tầng công nghệ",
                description:
                  "Tư vấn, thiết kế và triển khai hạ tầng công nghệ thông tin toàn diện cho doanh nghiệp.",
                provider: {
                  "@type": "Organization",
                  name: "GoTechCom Technology JSC",
                  url: "https://gotechcom.com",
                },
                serviceType: "IT Infrastructure Development",
                areaServed: {
                  "@type": "Country",
                  name: "Vietnam",
                },
              },
              {
                "@context": "https://schema.org",
                "@type": "Service",
                name: "Phát triển phần mềm theo yêu cầu",
                description:
                  "Xây dựng giải pháp phần mềm được thiết kế riêng biệt, phù hợp chính xác với quy trình và nhu cầu đặc thù của doanh nghiệp.",
                provider: {
                  "@type": "Organization",
                  name: "GoTechCom Technology JSC",
                  url: "https://gotechcom.com",
                },
                serviceType: "Custom Software Development",
                areaServed: {
                  "@type": "Country",
                  name: "Vietnam",
                },
              },
              {
                "@context": "https://schema.org",
                "@type": "Service",
                name: "Tư vấn giải pháp AI",
                description:
                  "Dịch vụ tư vấn và triển khai trí tuệ nhân tạo cho doanh nghiệp, từ tự động hóa quy trình, phân tích dữ liệu thông minh đến xây dựng chatbot và trợ lý ảo.",
                provider: {
                  "@type": "Organization",
                  name: "GoTechCom Technology JSC",
                  url: "https://gotechcom.com",
                },
                serviceType: "AI Consulting",
                areaServed: {
                  "@type": "Country",
                  name: "Vietnam",
                },
              },
            ]),
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
        {/* DNS prefetch for external domains */}
        <link rel="dns-prefetch" href="https://cloud.umami.is" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        {/* Preload critical fonts */}
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Geist:wght@100..900&family=Geist+Mono:wght@100..900&display=swap"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-lg focus:outline-none"
        >
          Skip to content
        </a>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
