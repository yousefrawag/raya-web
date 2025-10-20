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

export const metadata = {
  title: "الراية العقارية | عقارات القدس وأريحا وكفر عقب",
  description:
    "منصة الراية العقارية تتيح لك البحث عن شقق للبيع أو الإيجار في القدس، أريحا، كفر عقب، وجميع مناطق فلسطين عبر الخريطة أو حسب المنطقة. اكتشف أحدث المشاريع العقارية بسهولة.",
  keywords: [
    "عقارات القدس",
    "شقق للبيع في القدس",
    "شقق للإيجار في القدس",
    "عقارات أريحا",
    "مشاريع كفر عقب",
    "منصة الراية",
    "خريطة عقارات القدس",
    "مشاريع القدس الجديدة",
  ],
  openGraph: {
    title: "الراية العقارية | اكتشف أفضل عقارات القدس",
    description:
      "ابحث عن عقارات القدس وأريحا وكفر عقب عبر خريطة تفاعلية أو حسب المنطقة. منصة الراية العقارية توفر أحدث المشاريع السكنية والاستثمارية في القدس وما حولها.",
    url: "https://alraya-realestate.com", // ← غيّرها للرابط الفعلي لموقعك
    siteName: "الراية العقارية",
    images: [
      {
        url: "https://i.postimg.cc/g0KvYfbB/Screenshot-2025-10-20-174821.png",
        width: 1200,
        height: 630,
        alt: "منصة الراية العقارية - عقارات القدس",
      },
    ],
    locale: "ar_PS",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "الراية العقارية | عقارات القدس وأريحا وكفر عقب",
    description:
      "منصة عقارية فلسطينية متخصصة في عرض العقارات والمشاريع الاستثمارية في القدس ومحيطها.",
    images: [
      "https://i.postimg.cc/g0KvYfbB/Screenshot-2025-10-20-174821.png",
    ],
  },
  alternates: {
    canonical: "https://alraya-realestate.vercal", // ← غيّرها للدومين الحقيقي
  },
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
