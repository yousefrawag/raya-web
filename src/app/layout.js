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
  // 1. الكلمات الأساسية (Base Keywords) - كملت على اللي عندك وزودت بقوة
  const base = [
    "عقارات فلسطين", "شراء شقة في فلسطين", "شقق للبيع", "شقق للإيجار", "استثمار عقاري",
    "عقارات القدس", "عقارات رام الله", "عقارات اريحا", "أراضي للبيع في القدس",
    "أراضي للبيع في اريحا", "فلل للبيع في فلسطين", "محلات تجارية للإيجار",
    "مكاتب للاستثمار في رام الله", "عقارات بالتقسيط في فلسطين", "أرخص شقق في القدس",
    "بيوت مستقلة للبيع", "دليل العقارات الفلسطيني", "شركة الراية العقارية",
    "اسعار العقارات في القدس", "شقق للبيع في كفر عقب بالتقسيط", "سوق العقارات الفلسطيني",
    "عقارات للبيع كاش وتقسيط", "افضل مكتب عقاري في القدس", "استثمارات عقارية مضمونة",
    "اراضي طابو للبيع", "شقق روف للبيع", "شقق دوبلكس في فلسطين", "قروض عقارية فلسطين"
  ];

  // 2. مصفوفات العمليات والأنواع لعمل دمج تلقائي (Dynamic Generation)
  const types = ["شقق", "اراضي", "فلل", "محلات", "مكاتب", "عقارات", "بيوت"];
  const actions = ["للبيع في", "للايجار في", "للاستثمار في", "بالتقسيط في"];

  // 3. توليد الكلمات بناءً على المناطق والأحياء
  regions.forEach(region => {
    // إضافة توليفات للمدينة الرئيسية
    types.forEach(type => {
      actions.forEach(action => {
        base.push(`${type} ${action} ${region.name}`);
      });
    });

    // إضافة توليفات لكل حي/موقع بالتفصيل
    region.locations.forEach(loc => {
      if (!loc) return;
      base.push(`شقق للبيع في ${loc}`);
      base.push(`شقق للإيجار في ${loc}`);
      base.push(`عقارات ${loc}`);
      base.push(`اراضي للبيع في ${loc}`);
      base.push(`اسعار الشقق في ${loc}`);
      base.push(`استثمار عقاري في ${loc}`);
      base.push(`بيوت مستقلة في ${loc}`);
      base.push(`شقق تقسيط في ${loc}`);
    });
  });

  // 4. إضافة كلمات "النية" (User Intent) لزيادة العدد ليتجاوز 500 كلمة
  const intents = [
    "افضل", "ارخص", "احدث", "عقارات لقطة في", "مكاتب تسويق في", "مشاريع جديدة في"
  ];
  
  regions.forEach(region => {
    intents.forEach(intent => {
      base.push(`${intent} عقارات ${region.name}`);
      base.push(`${intent} شقق في ${region.name}`);
    });
  });

  return base;
};

export const metadata = {
  metadataBase: new URL("https://www.rayapal.com"),
icons: {
    icon: "/icon.png", // سيقوم Next.js بالبحث عنها في مجلد public تلقائياً
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  title: {
    default: "عقارات القدس وفلسطين | شقق للبيع والإيجار | الراية العقارية",
    template: "%s | الراية العقارية"
  },

description:
    "اكتشف أفضل الشقق والعقارات للبيع والإيجار في القدس، رام الله، وأريحا عبر منصة الراية العقارية. فرص استثمارية حصرية في بيت حنينا، كفر عقب، صور باهر، ومنطقة البوابة بأسعار تنافسية.",

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
    canonical: "https://www.rayapal.com",
  },

  openGraph: {
    title: "عقارات القدس وصور باهر واريحا وبيت حنينا والبوابه وفلسطين | الراية العقارية",
    description:
      "أفضل منصة لعرض الشقق والعقارات في القدس ورام الله وأريحا وصورباهر و بيت حنينا والبوابه مع خريطة تفاعلية وأسعار محدثة.",
    url: "https://www.rayapal.com",
    siteName: "الراية العقارية",
    locale: "ar_PS",
    type: "website",
    images: [
      {
        url: "https://www.rayapal.com/icon.png", // حط صورة عندك
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
    images: ["https://www.rayapal.com/icon.png"],
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
