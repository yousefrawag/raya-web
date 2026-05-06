import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/Hedaer";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import Footer from "@/components/common/Footer";
import 'leaflet/dist/leaflet.css';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 🔥 المناطق (هنولد منها keywords)
const regions = [
  {
    name: "القدس",
    locations: [
      "صور باهر","شعفاط","بيت صفافا","كفر عقب","بيت حنينا",
      "جبل المكبر","ام طوبا","راس العمود"
    ]
  },
  {
    name: "اريحا",
    locations: ["اريحا","البوابه"]
  },
  {
    name: "رام الله",
    locations: ["رام الله","البيره","المصايف"]
  }
];

// 🔥 توليد keywords ديناميك
const generateKeywords = () => {
  const base = [
    "عقارات فلسطين",
    "شراء شقة في فلسطين",
    "شقق للبيع",
    "شقق للإيجار",
    "استثمار عقاري",
    "عقارات القدس",
    "عقارات رام الله",
    "عقارات اريحا"
  ];

  regions.forEach(region => {
    base.push(`عقارات ${region.name}`);
    base.push(`شقق للبيع في ${region.name}`);
    base.push(`شقق للإيجار في ${region.name}`);

    region.locations.forEach(loc => {
      if (!loc) return;
      base.push(`شقق للبيع في ${loc}`);
      base.push(`شقق للإيجار في ${loc}`);
      base.push(`عقارات ${loc}`);
    });
  });

  return base;
};

export const metadata = {
  metadataBase: new URL("https://www.rayapal.net"),

  title: {
    default: "عقارات القدس وفلسطين | شقق للبيع والإيجار | الراية العقارية",
    template: "%s | الراية العقارية"
  },

  description:
    "منصة الراية العقارية لعرض أفضل الشقق للبيع والإيجار في القدس، كفر عقب، رام الله، وأريحا. اكتشف أحدث العقارات والمشاريع الاستثمارية بسهولة.",

  keywords: generateKeywords(),

  authors: [{ name: "Raya Real Estate" }],
  creator: "Raya Real Estate",

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

  alternates: {
    canonical: "https://www.rayapal.net",
  },

  openGraph: {
    title: "عقارات القدس وفلسطين | الراية العقارية",
    description:
      "أفضل منصة لعرض الشقق والعقارات في القدس ورام الله وأريحا مع خريطة تفاعلية وأسعار محدثة.",
    url: "https://www.rayapal.net",
    siteName: "الراية العقارية",
    locale: "ar_PS",
    type: "website",
    images: [
      {
        url: "https://i.postimg.cc/g0KvYfbB/Screenshot-2025-10-20-174821.png", // حط صورة عندك
        width: 1200,
        height: 630,
        alt: "عقارات القدس - الراية العقارية",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "عقارات القدس وفلسطين",
    description:
      "ابحث عن شقق للبيع والإيجار في أفضل مناطق فلسطين بسهولة.",
    images: ["https://i.postimg.cc/g0KvYfbB/Screenshot-2025-10-20-174821.png"],
  },

  category: "real estate",
};


export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
