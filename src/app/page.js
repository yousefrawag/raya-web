export const revalidate = 60;

// استيراد المكونات الخاصة بك
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import Projects from "@/components/sections/ProjectSection";
import Properties from "@/components/sections/Properties";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import FilterSection from "@/components/sections/FilterSection";
import RegionFilter from "@/components/sections/RegionFilter";
import LandingProject from "@/components/sections/LandingProject";
import ProjectServerDataLanding from "@/components/sections/ProjectServerDataLanding";
import BlogServerRendering from "@/components/sections/BlogServerRendering";
import InvestMentServer from "@/components/sections/InvestMentServer";
import ScrollToHash from "@/components/common/ScrollToHash";

// --- استيراد دالة الكلمات المفتاحية اللي عملناها ---
// ملاحظة: لو الدالة في ملف خارجي استوردها، لو لا، حطها هنا فوق الـ metadata
const regions = [
  { name: "القدس", locations: ["صور باهر","شعفاط","بيت صفافا","كفر عقب","بيت حنينا","جبل المكبر","ام طوبا","راس العمود"] },
  { name: "اريحا", locations: ["اريحا","البوابه"] },
  { name: "رام الله", locations: ["رام الله","البيره","المصايف"] }
];

const generateKeywords = () => {
  const base = [
    "عقارات فلسطين", "شراء شقة في فلسطين", "شقق للبيع", "شقق للإيجار", "استثمار عقاري",
    "عقارات القدس", "عقارات رام الله", "عقارات اريحا", "أراضي للبيع في القدس",
    "شركة الراية العقارية", "سوق العقارات الفلسطيني", "عقارات بالتقسيط"
  ];
  const types = ["شقق", "اراضي", "فلل", "محلات"];
  const actions = ["للبيع", "للايجار", "للاستثمار"];

  regions.forEach(region => {
    base.push(`عقارات ${region.name}`);
    types.forEach(type => {
      actions.forEach(action => {
        base.push(`${type} ${action} في ${region.name}`);
      });
    });
    region.locations.forEach(loc => {
      base.push(`شقق للبيع في ${loc}`, `عقارات ${loc}`, `اراضي ${loc}`);
    });
  });
  return base;
};

// --- إعدادات الـ Metadata الشاملة للموقع ---
export const metadata = {
  metadataBase: new URL("https://www.rayapal.com"),
  title: {
    default: "منصة الراية العقارية | عقارات القدس وفلسطين | شقق، أراضي، وفلل",
    template: "%s | الراية العقارية"
  },
  description: "المنصة الأولى لعقارات القدس، رام الله، وأريحا. شقق للبيع والإيجار، أراضي طابو، وفلل سياحية في بيت حنينا، كفر عقب، صور باهر والبوابة. استثمر الآن بأفضل الأسعار.",
  keywords: generateKeywords(),
  alternates: { canonical: "/" },
  openGraph: {
    title: "عقارات القدس وفلسطين | الراية العقارية",
    description: "ابحث عن بيتك القادم في أفضل مناطق فلسطين (القدس، رام الله، أريحا) بأسعار منافسة وخيارات تقسيط.",
    url: "https://www.rayapal.com",
    siteName: "الراية العقارية",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    locale: "ar_PS",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true }
  }
};

export default function Home() {
  return (
    <div className="w-full">
      {/* 1. إضافة Schema.org لتعريف الموقع لجوجل كشركة (Structured Data) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RealEstateAgent",
            "name": "الراية العقارية",
            "url": "https://www.rayapal.com",
            "logo": "https://www.rayapal.com/icon.png",
            "description": "أفضل شركة عقارات في القدس وفلسطين لبيع وتأجير الشقق والأراضي.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Jerusalem",
              "addressCountry": "PS"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "31.7683",
              "longitude": "35.2137"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+970-XXX-XXXXXX",
              "contactType": "customer service"
            }
          })
        }}
      />

      {/* 2. محتوى نصي مخفي (للروبوتات فقط) لتعزيز الكلمات المفتاحية الطويلة */}
      <section className="sr-only">
        <h1>عقارات فلسطين والقدس</h1>
        <p>
          نحن في الراية العقارية نوفر شقق للبيع في القدس، شقق للايجار في رام الله، واراضي للبيع في اريحا. 
          نغطي مناطق بيت حنينا، شعفاط، كفر عقب، صور باهر، ومنطقة البوابة في اريحا. 
          استثمر في عقارات فلسطين بأفضل الأسعار وبنظام التقسيط المباشر.
        </p>
      </section>

      <ScrollToHash />
      <HeroSection />
      <RegionFilter />
      <Properties /> 
      <InvestMentServer />
      <AboutSection />
      <BlogServerRendering />
      <ServicesSection />
    </div>
  );
}