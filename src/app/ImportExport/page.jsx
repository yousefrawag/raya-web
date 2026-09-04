export const revalidate = 86400;
import React from 'react';
import Image from 'next/image';
import Script from 'next/script';
import Link from 'next/link';
import TradeMap from '@/components/sections/Trademap';
import {
  HiOutlineChevronRight,
  HiOutlineShieldCheck,
  HiOutlinePlus,
  HiOutlineUserGroup,
  HiOutlineCheckCircle,
  HiOutlineClock,
  HiOutlineGlobeAlt,
  HiOutlineTruck,
  HiOutlineDocumentText,
  HiOutlineWarehouse,
  HiOutlineCash,
  HiOutlinePhone
} from 'react-icons/hi';
import { HiOutlineMapPin } from 'react-icons/hi2';

// SEO للصفحة
export const metadata = {
  metadataBase: new URL("https://www.rayapal.com"),
  title: "الاستيراد والتصدير من وإلى فلسطين | منصة الراية للتجارة العالمية",
  description:
    "نقدم خدمات الاستيراد والتصدير، التخليص الجمركي، الشحن، التخزين والوساطة التجارية في القدس، رام الله، وأريحا. شبكة عالمية من الموردين والمشترين.",
  alternates: {
    canonical: "https://www.rayapal.com/ImportExport",
  },
  keywords: [
    // ===== أساسيات الاستيراد والتصدير =====
    "الاستيراد والتصدير فلسطين",
    "شحن دولي فلسطين",
    "تخليص جمركي رام الله",
    "وساطة تجارية القدس",
    "خدمات الاستيراد والتصدير",
    "شركة شحن في فلسطين",
    "مستودعات تخزين رام الله",
    "تجارة دولية فلسطين",
    "استيراد بضائع فلسطين",
    "تصدير منتجات فلسطينية",
    "خدمات لوجستية فلسطين",
    "شركة تجارة عالمية",
    "شحن بحري فلسطين",
    "شحن جوي فلسطين",
    "تأمين شحنات فلسطين",
    "استشارات تجارية فلسطين",
    "الراية للاستيراد والتصدير",
    "منصة الراية التجارية",
    "ربط الأسواق العالمية فلسطين",
    "شحن حاويات فلسطين",
    "نقل دولي فلسطين",
    "معبر الكرامة جمارك",
    "جمارك فلسطين",
    "رسوم جمركية فلسطين",
    "إفراج جمركي القدس",
    "موانئ فلسطين",
    "مطارات فلسطين",
    "شحن بري فلسطين",
    "شحن جوي القدس",
    "شحن بحري أريحا",
    "FCL فلسطين",
    "LCL فلسطين",
    "حاويات 20 قدم فلسطين",
    "حاويات 40 قدم فلسطين",
    "نقل بضائع فلسطين",
    "خدمات لوجستية القدس",
    "تخزين بضائع رام الله",
    "توزيع منتجات فلسطين",
    "وساطة تجارية دولية",
    "موردون عالميون فلسطين",
    "تصدير زيت زيتون فلسطين",
    "تصدير حجر فلسطين",
    "تصدير البلح الفلسطيني",
    "استيراد مواد بناء فلسطين",
    "استيراد آلات ومعدات فلسطين",
    "استيراد سيارات فلسطين",
    "استيراد أدوية فلسطين",
    "استيراد مواد غذائية فلسطين",
    "استيراد ملابس فلسطين",
    "استيراد إلكترونيات فلسطين",
    "تصدير منتجات زراعية فلسطين",
    "تصدير الصناعات الفلسطينية",
    "تصدير الحجر والرخام فلسطين",
    "تصدير الملابس الجاهزة فلسطين",

    // ===== المناطق والمدن =====
    "استيراد وتصدير القدس",
    "شحن دولي بيت حنينا",
    "تخليص جمركي شعفاط",
    "خدمات لوجستية كفر عقب",
    "استيراد وتصدير رام الله",
    "شحن جوي البيرة",
    "تخزين أريحا",
    "وساطة تجارية أريحا البوابة",
    "استيراد وتصدير الديوك",
    "شحن بحري النويعمة",
    "خدمات تجارية بيت لحم",
    "استيراد وتصدير الخليل",
    "شحن دولي نابلس",
    "تخليص جمركي جنين",
    "خدمات لوجستية طولكرم",
    "استيراد وتصدير قلقيلية",
    "شحن جوي سلفيت",
    "تخزين طوباس",
    "وساطة تجارية غزة",
    "استيراد وتصدير فلسطين 2025",
    "شركة استيراد وتصدير في القدس",
    "أفضل شركة شحن في رام الله",
    "تخليص جمركي في أريحا",
    "استيراد بضائع من الصين إلى فلسطين",
    "تصدير منتجات فلسطينية إلى العالم",
    "خدمات الشحن البري في فلسطين",
    "شحن جوي سريع من فلسطين",
    "شحن بحري من ميناء أسدود إلى فلسطين",
    "شركة وساطة تجارية في القدس",
    "مستودعات تخزين في رام الله",
    "توزيع بضائع في الضفة الغربية",
    "خدمات التخليص الجمركي في معبر الكرامة",
    "رسوم جمركية للبضائع المستوردة",
    "إجراءات الاستيراد في فلسطين",
    "إجراءات التصدير من فلسطين",
    "شهادات منشأ فلسطينية",
    "تأمين شحنات بحرية فلسطين",
    "تأمين شحنات جوية فلسطين",
    "استشارات تجارة دولية فلسطين",
    "دراسات جدوى استيراد فلسطين",
    "تحليل أسواق التصدير الفلسطينية",
    "فرص استثمارية في التجارة الدولية فلسطين",

    // ===== صيغ بحثية طويلة (Long-tail) =====
    "كيف أستورد بضائع من تركيا إلى فلسطين",
    "أفضل شركة تخليص جمركي في رام الله",
    "سعر شحن الحاوية من الصين إلى فلسطين",
    "شركات الشحن البري في الضفة الغربية",
    "مكاتب تخليص جمركي في القدس",
    "استيراد الأغذية من أوروبا إلى فلسطين",
    "تصدير الحجر الفلسطيني إلى الخليج",
    "شحن مواد البناء من مصر إلى فلسطين",
    "تخزين الأدوية في مستودعات مبردة فلسطين",
    "توزيع المنتجات الغذائية في فلسطين",
    "شركة وساطة تجارية معتمدة في فلسطين",
    "استيراد الآلات الثقيلة إلى فلسطين",
    "تصدير الزيتون الفلسطيني إلى أمريكا",
    "شحن البضائع العاجلة جواً إلى فلسطين",
    "تخليص جمركي للسيارات في معبر الكرامة",
    "الاستيراد من الإمارات إلى فلسطين",
    "التصدير إلى الأسواق الأوروبية من فلسطين",
    "خدمات النقل الدولي في فلسطين",
    "شركات الشحن البحري في فلسطين",
    "شركات الشحن الجوي في فلسطين",
    "تكلفة شحن حاوية 40 قدم إلى فلسطين",
    "تخزين البضائع في مستودعات أريحا",
    "توزيع المنتجات في قطاع غزة",
    "خدمات التغليف والتعبئة في رام الله",
    "استيراد قطع الغيار إلى فلسطين",
    "تصدير الملابس الجاهزة من فلسطين",
    "شحن البضائع من ميناء حيفا إلى فلسطين",
    "تخليص جمركي في مطار بن غوريون",
    "خدمات العبور البري في معبر الكرامة",
    "شركات الاستيراد والتصدير المرخصة في فلسطين",
    "تسجيل شركة استيراد وتصدير في فلسطين",
    "تصاريح الاستيراد في فلسطين",
    "تصاريح التصدير من فلسطين",
    "قوانين الجمارك في فلسطين",
    "الضرائب على البضائع المستوردة فلسطين",
    "الإعفاءات الجمركية في فلسطين",
    "استيراد المعدات الطبية إلى فلسطين",
    "تصدير المنتجات الزراعية من أريحا",
    "شحن المنتجات الطازجة إلى الخليج",
    "خدمات التبريد في الشحن",
    "تخزين المنتجات الزراعية في مستودعات مبردة",
    "توزيع الخضار والفواكه في فلسطين",
    "استيراد الأسمدة والمبيدات إلى فلسطين",
    "تصدير الأعشاب الطبية من فلسطين",
    "شحن البضائع الخطرة إلى فلسطين",
    "تخليص جمركي للبضائع الخطرة",
    "تأمين البضائع ضد السرقة",
    "تأمين البضائع ضد الحريق",
    "تأمين البضائع ضد الكوارث الطبيعية",
    "استشارات التخليص الجمركي في فلسطين",
    "دراسات الجدوى للاستيراد والتصدير",
    "تحليل الأسواق الخارجية للصادرات الفلسطينية",
    "استراتيجيات التصدير إلى الأسواق العربية",
    "استراتيجيات الاستيراد من الأسواق الآسيوية",
    "شبكات التوزيع في فلسطين والمنطقة",

    // ===== مناطق إضافية =====
    "استيراد وتصدير بيت حنينا القدس",
    "شحن دولي شعفاط",
    "تخليص جمركي كفر عقب",
    "خدمات لوجستية عناتا",
    "استيراد وتصدير الرام",
    "شحن جوي حزما",
    "تخزين قلنديا",
    "وساطة تجارية مخيم شعفاط",
    "استيراد وتصدير بلدات القدس",
    "شحن بحري أريحا البوابة",
    "تخليص جمركي النويعمة",
    "خدمات لوجستية فصايل",
    "استيراد وتصدير مرج الغزال",
    "شحن جوي البيرة رام الله",
    "تخزين الماصيون",
    "وساطة تجارية الطيرة",
    "استيراد وتصدير المصايف",
    "شحن دولي رام الله والبيرة",
    "تخليص جمركي سلواد",
    "خدمات لوجستية دير جرير",
    "استيراد وتصدير عابود",
    "شحن جوي نابلس",
    "تخزين بلاطة",
    "وساطة تجارية روجيب",
    "استيراد وتصدير جنين",
    "شحن بحري طولكرم",
    "تخليص جمركي قلقيلية",
    "خدمات لوجستية سلفيت",
    "استيراد وتصدير طوباس",
    "شحن دولي غزة",
    "تخزين خان يونس",
    "وساطة تجارية رفح",
    "استيراد وتصدير دير البلح",
    "شحن جوي بيت لاهيا",
    "تخليص جمركي بيت حانون",
    "خدمات لوجستية المخيمات الفلسطينية",

    // ===== مصطلحات تجارية متقدمة =====
    "خطوط شحن عالمية إلى فلسطين",
    "وكلاء شحن معتمدون في فلسطين",
    "شركات النقل الدولي في فلسطين",
    "خدمات التخزين المؤقت في الموانئ",
    "تخليص جمركي إلكتروني فلسطين",
    "بوابة الاستيراد والتصدير الفلسطينية",
    "غرفة تجارة فلسطين للاستيراد والتصدير",
    "اتحاد المصدرين الفلسطينيين",
    "منصة تجارية فلسطينية عالمية",
    "حلول لوجستية متكاملة في فلسطين",
    "سلاسل التوريد في فلسطين",
    "إدارة سلاسل الإمداد فلسطين",
    "شهادات المطابقة للبضائع المستوردة",
    "فحص جودة البضائع قبل الشحن",
    "معاينة البضائع في المنشأ",
    "خدمات الفحص والتقييم للبضائع",
    "استيراد العينات التجارية إلى فلسطين",
    "تصدير العينات التجارية من فلسطين",
    "خدمات إعادة التصدير من فلسطين",
    "المناطق الحرة في فلسطين",
    "المناطق الصناعية في فلسطين",
    "مدينة أريحا الصناعية الاستيراد والتصدير",
    "المنطقة الصناعية في بيت لحم",
    "المنطقة الصناعية في الخليل",
    "المنطقة الصناعية في نابلس",
    "استيراد المواد الأولية للمصانع الفلسطينية",
    "تصدير المنتجات المصنعة في فلسطين",
    "دعم الصادرات الفلسطينية",
    "برامج دعم المصدرين الفلسطينيين",
    "تمويل الاستيراد والتصدير فلسطين",
    "اعتمادات مستندية للاستيراد فلسطين",
    "خطابات الضمان للاستيراد والتصدير",
    "تحويلات مالية للتجارة الدولية",
    "العملات المستخدمة في التجارة فلسطين",
    "سعر صرف الدولار في فلسطين",
    "تداول العملات في فلسطين",
    "البنوك التجارية في فلسطين للاستيراد والتصدير",
    "حسابات التوفير للشركات التجارية فلسطين",
    "بطاقات ائتمان للشركات الفلسطينية",

    // ===== الخدمات اللوجستية =====
    "تخزين بضائع في مستودعات أريحا",
    "توزيع بضائع في القدس وضواحيها",
    "خدمات التغليف والتعبئة في رام الله",
    "تغليف البضائع للتصدير",
    "تعبئة البضائع في حاويات الشحن",
    "تثبيت البضائع داخل الحاويات",
    "خدمات التفريغ والتحميل في الموانئ",
    "نقل البضائع من الموانئ إلى المستودعات",
    "نقل البضائع من المستودعات إلى الأسواق",
    "خدمات التوزيع في قطاع غزة والضفة",
    "توزيع المنتجات الغذائية في فلسطين",
    "توزيع الأدوية والمستلزمات الطبية",
    "توزيع مواد البناء في فلسطين",
    "توزيع الإلكترونيات في فلسطين",
    "توزيع الأثاث في فلسطين",
    "توزيع السيارات وقطع الغيار",
    "توزيع الملابس والأزياء",
    "توزيع المنتجات الزراعية",
    "توزيع المنتجات الصناعية",
    "توزيع المنتجات الاستهلاكية",

    // ===== الاستشارات والخدمات الإضافية =====
    "استشارات تجارية للاستيراد في فلسطين",
    "استشارات تصدير المنتجات الفلسطينية",
    "دراسات جدوى للتجارة الدولية في فلسطين",
    "خطط تسويقية للصادرات الفلسطينية",
    "تسويق المنتجات الفلسطينية عالمياً",
    "ترويج العلامات التجارية الفلسطينية",
    "تطوير المنتجات للأسواق الخارجية",
    "تغليف المنتجات حسب معايير التصدير",
    "شهادات الجودة للمنتجات المصدرة",
    "شهادات المنشأ للبضائع المصدرة",
    "شهادات الحلال للمنتجات الغذائية",
    "شهادات المطابقة للمواصفات القياسية",
    "معايير التعبئة والتغليف العالمية",
    "مواصفات التخزين للسلع الغذائية",
    "مواصفات التخزين للأدوية",
    "مواصفات التخزين للمواد الكيميائية",
    "مواصفات التخزين للمواد الخطرة",
    "إدارة المخزون في المستودعات",
    "أنظمة إدارة المستودعات WMS",
    "تكنولوجيا المعلومات في الخدمات اللوجستية",
    "أنظمة التتبع للشحنات",
    "تتبع الشحنات عبر الإنترنت",
    "تتبع الشحنات عبر GPS",
    "أنظمة إدارة النقل TMS",
    "تحسين سلاسل التوريد في فلسطين",
    "تقليل تكاليف الشحن في فلسطين",
    "تحسين كفاءة التوزيع في فلسطين",
    "حلول تخزين ذكية في فلسطين",
    "حلول لوجستية خضراء في فلسطين",
    "النقل المستدام في فلسطين",
    "تقليل البصمة الكربونية في الشحن",
    "شحنات صديقة للبيئة",
    "ممارسات مستدامة في التخزين والتوزيع",

    // ===== كلمات إضافية شاملة =====
    "استيراد وتصدير فلسطين",
    "شحن دولي فلسطين",
    "تخليص جمركي فلسطين",
    "وساطة تجارية فلسطين",
    "خدمات لوجستية فلسطين",
    "شركة شحن فلسطين",
    "مستودعات تخزين فلسطين",
    "تجارة دولية فلسطين",
    "استيراد بضائع فلسطين",
    "تصدير منتجات فلسطين",
    "شحن بحري فلسطين",
    "شحن جوي فلسطين",
    "تأمين شحنات فلسطين",
    "استشارات تجارية فلسطين",
    "شركات الشحن في فلسطين",
    "شركات التخليص الجمركي فلسطين",
    "شركات التخزين في فلسطين",
    "شركات النقل في فلسطين",
    "شركات التوزيع في فلسطين",
    "شركات الوساطة التجارية فلسطين",
    "وكالات شحن في فلسطين",
    "وكلاء جمارك في فلسطين",
    "خدمات الشحن من فلسطين",
    "خدمات الشحن إلى فلسطين",
    "استيراد من فلسطين",
    "تصدير من فلسطين",
    "استيراد إلى فلسطين",
    "تصدير إلى فلسطين",
    "الاستيراد والتصدير في القدس",
    "الاستيراد والتصدير في رام الله",
    "الاستيراد والتصدير في أريحا",
    "الاستيراد والتصدير في بيت حنينا",
    "الاستيراد والتصدير في شعفاط",
    "الاستيراد والتصدير في كفر عقب",
    "الاستيراد والتصدير في الخليل",
    "الاستيراد والتصدير في نابلس",
    "الاستيراد والتصدير في غزة",
    "شحن دولي في القدس",
    "شحن دولي في رام الله",
    "شحن دولي في أريحا",
    "تخليص جمركي في القدس",
    "تخليص جمركي في رام الله",
    "تخليص جمركي في أريحا",
    "تخزين بضائع في القدس",
    "تخزين بضائع في رام الله",
    "تخزين بضائع في أريحا",
    "وساطة تجارية في القدس",
    "وساطة تجارية في رام الله",
    "وساطة تجارية في أريحا",
    "خدمات لوجستية في القدس",
    "خدمات لوجستية في رام الله",
    "خدمات لوجستية في أريحا",
    "شركة شحن في القدس",
    "شركة شحن في رام الله",
    "شركة شحن في أريحا",
    "مستودعات تخزين في القدس",
    "مستودعات تخزين في رام الله",
    "مستودعات تخزين في أريحا",
    "تجارة دولية في القدس",
    "تجارة دولية في رام الله",
    "تجارة دولية في أريحا",
    "استيراد بضائع في القدس",
    "استيراد بضائع في رام الله",
    "استيراد بضائع في أريحا",
    "تصدير منتجات في القدس",
    "تصدير منتجات في رام الله",
    "تصدير منتجات في أريحا",
    "شحن بحري في القدس",
    "شحن بحري في رام الله",
    "شحن بحري في أريحا",
    "شحن جوي في القدس",
    "شحن جوي في رام الله",
    "شحن جوي في أريحا",
    "تأمين شحنات في القدس",
    "تأمين شحنات في رام الله",
    "تأمين شحنات في أريحا",
    "استشارات تجارية في القدس",
    "استشارات تجارية في رام الله",
    "استشارات تجارية في أريحا",
  ],
  openGraph: {
    title: "الاستيراد والتصدير | منصة الراية",
    description:
      "نربط العالم بجسر تجاري من القدس. نقدم حلولاً متكاملة للاستيراد والتصدير والتخليص الجمركي والتخزين.",
    url: "https://www.rayapal.com/ImportExport",
    siteName: "الراية العقارية والتجارية",
    locale: "ar_PS",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "الاستيراد والتصدير - الراية",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "الاستيراد والتصدير مع الراية",
    description:
      "شبكة عالمية من الموردين والمشترين، حلول شحن وتخليص جمركي وتخزين في فلسطين.",
    images: [
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  category: "Import and Export Services",
};

// المكون الرئيسي
const ImportExportPage = () => {
  // بيانات الخدمات مع صور حقيقية
  const services = [
    {
      id: "shipping",
      num: "01",
      title: "الشحن الدولي (بري - بحري - جوي)",
      badge: "حلول لوجستية متكاملة",
      desc: "نقدم خدمات الشحن من وإلى جميع أنحاء العالم عبر شركات شحن موثوقة. نختار أفضل المسارات وأقل التكاليف مع ضمان وصول البضائع في الوقت المحدد، سواء كنت تصدر منتجات زراعية، صناعية، أو تستورد مواد خام.",
      features: ["شحن بحري (FCL & LCL) بأسعار تنافسية", "شحن جوي سريع للبضائع العاجلة", "شحن بري يربط فلسطين بالأسواق المجاورة", "تتبع الشحنات لحظة بلحظة"],
      img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "customs",
      num: "02",
      title: "التخليص الجمركي والوساطة",
      badge: "خبراء في الإجراءات الجمركية",
      desc: "فريق متخصص في التخليص الجمركي يضمن عبور سريع لبضائعك عبر المعابر والمنافذ. نتعامل مع جميع الأوراق والتصاريح، ونسهل عملية الاستيراد والتصدير مع السلطات الجمركية في فلسطين والمنطقة.",
      features: ["تقديم الإقرارات الجمركية إلكترونياً", "متابعة الإفراج عن البضائع في الموانئ والمطارات", "استشارات حول الرسوم الجمركية والإعفاءات", "تسهيل إجراءات التصدير للمنتجات الفلسطينية"],
      img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "warehousing",
      num: "03",
      title: "التخزين والتوزيع",
      badge: "مستودعات حديثة ومجهزة",
      desc: "نوفر مساحات تخزين آمنة ومجهزة بأحدث الأنظمة لحماية بضائعك. نقدم خدمات التوزيع المحلي والإقليمي، وإدارة المخزون، والتغليف والتعبئة لتلبية احتياجات التجار والمصنعين.",
      features: ["مستودعات بدرجات حرارة مختلفة للسلع الحساسة", "إدارة المخزون ببرامج متطورة", "خدمات التغليف والتعبئة حسب المواصفات", "توزيع سريع في فلسطين والضفة الغربية"],
      img: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "brokerage",
      num: "04",
      title: "الوساطة التجارية وربط الأسواق",
      badge: "شبكة من الشركاء العالميين",
      desc: "نقوم بتوصيل الموردين بالمشترين، ونسهل عقد الصفقات التجارية بين الشركات الفلسطينية والعالمية. بفضل شبكتنا الواسعة، نستطيع إيجاد أفضل الفرص التجارية وتنظيم المعاملات المالية واللوجستية.",
      features: ["إيجاد موردين وشركاء موثوقين", "تنظيم معارض ومؤتمرات تجارية", "توفير دراسات السوق للسلع المختلفة", "تسهيل عمليات الدفع والتحويلات"],
      img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "insurance",
      num: "05",
      title: "تأمين الشحنات والمخاطر",
      badge: "حماية كاملة لبضائعك",
      desc: "نقدم وثائق تأمين تغطي جميع المخاطر المحتملة أثناء النقل والتخزين. نتعامل مع شركات تأمين عالمية لتوفير تغطية شاملة ضد الحوادث، السرقة، الأضرار، والتأخير.",
      features: ["تأمين بحري وجوي وبري", "تغطية الأضرار الجزئية والكلية", "تقديم التعويض بسرعة", "استشارات حول أفضل وثائق التأمين"],
      img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "consulting",
      num: "06",
      title: "استشارات التجارة الدولية",
      badge: "إرشاد استراتيجي للأسواق",
      desc: "فريق من الخبراء يقدم استشارات حول فرص التصدير، اختيار الأسواق، تحليل المنافسة، والامتثال للقوانين التجارية. نساعدك على اتخاذ قرارات مدروسة لتوسيع نطاق أعمالك عالمياً.",
      features: ["دراسات جدوى للأسواق الخارجية", "تحليل القوانين واللوائح التجارية", "تطوير استراتيجيات التسويق الدولي", "دعم في العلامات التجارية والملكية الفكرية"],
      img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80"
    }
  ];

  // بيانات "لماذا نحن"
  const whyUs = [
    {
      icon: <HiOutlineGlobeAlt className="text-3xl text-amber-600" />,
      title: "شبكة عالمية واسعة",
      desc: "علاقات مع شركاء في أكثر من 50 دولة، نضمن لك وصولاً إلى أفضل الأسواق والموردين."
    },
    {
      icon: <HiOutlineUserGroup className="text-3xl text-amber-600" />,
      title: "فريق خبير متكامل",
      desc: "نمتلك كوادر متخصصة في الشحن، الجمارك، والتجارة الدولية لتقديم حلول شاملة."
    },
    {
      icon: <HiOutlineShieldCheck className="text-3xl text-amber-600" />,
      title: "الثقة والشفافية",
      desc: "نعمل بشفافية كاملة، ونضمن حقوقك في كل صفقة مع عقود واضحة ومتابعة مستمرة."
    }
  ];

  // JSON-LD للـ SEO
 const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.rayapal.com/ImportExport/#webpage",
        "url": "https://www.rayapal.com/ImportExport",
        "name": "الاستيراد والتصدير - منصة الراية",
        "description":
          "خدمات الاستيراد والتصدير، التخليص الجمركي، الشحن، التخزين، والوساطة التجارية في فلسطين.",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://www.rayapal.com/#website",
          "url": "https://www.rayapal.com",
          "name": "الراية العقارية والتجارية",
        },
        "about": {
          "@type": "Service",
          "name": "خدمات الاستيراد والتصدير",
          "description": "نقدم خدمات استيراد وتصدير شاملة في فلسطين والشرق الأوسط.",
        },
      },
      {
        "@type": "Organization",
        "@id": "https://www.rayapal.com/ImportExport/#organization",
        "name": "الراية للاستيراد والتصدير",
        "url": "https://www.rayapal.com/ImportExport",
        "telePhone": "+972568700632",
        "email": "info@rayapal.com",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Jerusalem",
          "addressCountry": "PS",
        },
        "areaServed": [
          { "@type": "AdministrativeArea", "name": "Palestine" },
          { "@type": "AdministrativeArea", "name": "Jerusalem" },
          { "@type": "AdministrativeArea", "name": "Ramallah" },
          { "@type": "AdministrativeArea", "name": "Al-Bireh" },
          { "@type": "AdministrativeArea", "name": "Kfar Aqab" },
          { "@type": "AdministrativeArea", "name": "Beit Hanina" },
          { "@type": "AdministrativeArea", "name": "Shuafat" },
          { "@type": "AdministrativeArea", "name": "Anata" },
          { "@type": "AdministrativeArea", "name": "Al-Ram" },
          { "@type": "AdministrativeArea", "name": "Hizma" },
          { "@type": "AdministrativeArea", "name": "Qalandia" },
          { "@type": "AdministrativeArea", "name": "Jericho" },
          { "@type": "AdministrativeArea", "name": "Al-Duyuk" },
          { "@type": "AdministrativeArea", "name": "Al-Nuway'imah" },
          { "@type": "AdministrativeArea", "name": "Fasayil" },
          { "@type": "AdministrativeArea", "name": "Bethlehem" },
          { "@type": "AdministrativeArea", "name": "Hebron" },
          { "@type": "AdministrativeArea", "name": "Nablus" },
          { "@type": "AdministrativeArea", "name": "Jenin" },
          { "@type": "AdministrativeArea", "name": "Tulkarem" },
          { "@type": "AdministrativeArea", "name": "Qalqilya" },
          { "@type": "AdministrativeArea", "name": "Salfit" },
          { "@type": "AdministrativeArea", "name": "Tubas" },
          { "@type": "AdministrativeArea", "name": "Gaza" },
          { "@type": "AdministrativeArea", "name": "Khan Yunis" },
          { "@type": "AdministrativeArea", "name": "Rafah" },
          { "@type": "AdministrativeArea", "name": "Deir al-Balah" },
          { "@type": "AdministrativeArea", "name": "Beit Lahia" },
          { "@type": "AdministrativeArea", "name": "Beit Hanoun" },
          { "@type": "AdministrativeArea", "name": "Middle East" },
          { "@type": "AdministrativeArea", "name": "Arab World" },
          { "@type": "AdministrativeArea", "name": "Gulf Countries" },
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+972568700632",
          "contactType": "customer service",
          "availableLanguage": ["Arabic", "English"],
          "areaServed": ["PS", "Middle East"],
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Sunday",
          ],
          "opens": "08:00",
          "closes": "17:00",
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "خدمات الاستيراد والتصدير المتكاملة",
          "itemListElement": services.map((service) => ({
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": service.title,
              "description": service.desc,
              "url": `https://www.rayapal.com/ImportExport#${service.id}`,
              "provider": {
                "@type": "Organization",
                "name": "الراية للاستيراد والتصدير",
              },
              "areaServed": [
                "Palestine",
                "Jerusalem",
                "Ramallah",
                "Jericho",
                "Middle East",
              ],
              "category": "Import and Export Services",
            },
          })),
        },
        "makesOffer": services.map((service) => ({
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": service.title,
            "description": service.desc,
          },
          "availability": "https://schema.org/InStock",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "priceCurrency": "USD",
            "minPrice": 100,
            "maxPrice": 10000,
          },
        })),
        "potentialAction": {
          "@type": "CommunicateAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate":
              "https://wa.me/+972568700632?text=مرحباً%20شركة%20الراية%20للاستيراد%20والتصدير%2C%20أود%20الاستفسار%20عن%20خدماتكم.",
            "actionPlatform": [
              "http://schema.org/DesktopWebPlatform",
              "http://schema.org/MobileWebPlatform",
            ],
          },
          "actionStatus": "PotentialActionStatus",
          "recipient": {
            "@type": "Organization",
            "name": "الراية للاستيراد والتصدير",
          },
        },
        "sameAs": [
          "https://www.facebook.com/rayapal",
          "https://www.instagram.com/rayapal",
          "https://www.linkedin.com/company/rayapal",
        ],
      },
    ],
  };

  // خريطة SVG للدول (سنقوم بتضمينها كما هي ولكن بتعديل الألوان)
  // ... سنضعها في مكون TradeMap منفصل كما سبق، ولكن مع ألوان متناسقة.

  return (
    <div className="min-h-screen bg-white" dir="rtl">
      
      <Script
        id="import-export-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* --- HERO SECTION --- */}
      <section className="relative py-28 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-amber-50">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 right-20 w-72 h-72 bg-amber-600/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <span className="inline-block px-4 py-1.5 bg-amber-100 text-amber-800 rounded-lg text-xs font-black mb-6">
            منصة الراية للاستيراد والتصدير
          </span>
          
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">
            نربط العالم <span className="text-amber-500">بجسر تجاري</span> من القدس
          </h1>

          <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed font-medium mb-8">
            من خلال شبكتنا الواسعة من الموردين والمشترين حول العالم، نقدم حلولاً متكاملة
            للاستيراد والتصدير تضمن وصول منتجاتك بأمان وسرعة.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`https://wa.me/+972568700632?text=مرحباً شركة الراية للاستيراد والتصدير، أود الاستفسار عن خدماتكم.`}
              className="flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-amber-500 transition-all shadow-xl shadow-slate-200"
            >
              <HiOutlinePlus size={20}/> اطلب عرض سعر الآن
            </a>
          </div>
        </div>
      </section>

      {/* --- TRADE MAP (سنضيفها بين الهيرو والخدمات) --- */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <span className="text-amber-600 font-bold text-sm bg-amber-50 px-4 py-1.5 rounded-full">شبكتنا</span>
            <h2 className="text-3xl font-black text-slate-900 mt-3 mb-2">نربط العالم من القدس</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">نستورد ونصدر من وإلى جميع القارات، ومركز عملياتنا في القدس يربط الأسواق الرئيسية.</p>
          </div>
          {/* هنا نضع مكون الخريطة - سنقوم بتضمينه كـ SVG مباشر */}
            <TradeMap />
        
        </div>
      </section>

      {/* --- SERVICES SECTION (أفقي مع صور) --- */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <span className="text-amber-600 font-bold text-sm bg-amber-50 px-4 py-1.5 rounded-full">خدماتنا المتكاملة</span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-3 mb-3">كل ما تحتاجه للتجارة العالمية</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">نقدم مجموعة شاملة من الخدمات التي تغطي جميع احتياجات الاستيراد والتصدير.</p>
        </div>

        <div className="space-y-20">
          {services.map((service, idx) => (
            <div 
              key={service.id}
              className={`flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-16 ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
            >
              <div className="w-full lg:w-1/2 relative">
                <div className="absolute -inset-2 bg-gradient-to-tr from-amber-400/30 to-amber-200/30 rounded-[2.5rem] blur-lg transition-all"></div>
                <div className="relative h-72 md:h-[400px] w-full rounded-[2.5rem] overflow-hidden border border-amber-200 shadow-sm bg-amber-50/50">
                  <img 
                    src={service.img}
                    alt={service.title}
                    className="h-full w-full object-cover hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <span className="absolute bottom-6 right-6 bg-amber-500 text-slate-950 font-black text-xl h-12 w-12 rounded-xl flex items-center justify-center shadow-sm">
                    {service.num}
                  </span>
                </div>
              </div>

              <div className="w-full lg:w-1/2">
                <span className="text-xs font-bold text-amber-700 bg-amber-100 px-3 py-1 rounded-md">
                  {service.badge}
                </span>
                <h3 className="text-2xl md:text-3xl font-black text-slate-900 mt-3 mb-4">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
                  {service.desc}
                </p>

                <ul className="space-y-3">
                  {service.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2 text-slate-800 text-xs md:text-sm font-semibold">
                      <HiOutlineCheckCircle className="text-amber-500 shrink-0" size={18} />
                      {feat}
                    </li>
                  ))}
                </ul>

                {/* <div className="mt-8">
                  <Link
                    href={`#contact`}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-950 hover:text-amber-600 transition-colors"
                  >
                    تواصل معنا <HiOutlineChevronRight className="rotate-180" size={16}/>
                  </Link>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- WHY US (ثلاث بطاقات) --- */}
      <section className="bg-amber-50/30 py-16 rounded-[3rem] max-w-7xl mx-auto px-6 border border-amber-100/50 my-12">
        <div className="text-center mb-12">
          <span className="text-amber-600 font-bold text-sm bg-white border border-amber-100 px-4 py-1.5 rounded-full">لماذا نحن</span>
          <h2 className="text-3xl font-black text-slate-900 mt-3 mb-2">ثقتكم تبدأ من خبرتنا</h2>
          <p className="text-slate-500 max-w-xl mx-auto">نعمل بمعايير عالمية ونقدم خدمات لوجستية وتجارية تلبي تطلعاتكم.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {whyUs.map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl border border-amber-100/60 shadow-sm hover:shadow-md transition">
              <div className="bg-amber-100 text-amber-600 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h4>
              <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-16 border-t border-amber-100/50 max-w-7xl mx-auto px-6">
        <div className="bg-gradient-to-r from-amber-50 to-white p-8 rounded-3xl text-center border border-amber-200/50">
          <HiOutlinePhone className="text-amber-500 w-10 h-10 mx-auto mb-4" />
          <h3 className="text-2xl font-black text-slate-900 mb-2">هل أنت مستعد لتوسيع أعمالك عالمياً؟</h3>
          <p className="text-slate-600 max-w-lg mx-auto mb-6">تواصل مع فريقنا الآن للحصول على استشارة مجانية وعرض سعر مناسب لشحناتك.</p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`https://wa.me/+972568700632?text=مرحباً شركة الراية، أرغب في الحصول على استشارة حول الاستيراد والتصدير.`}
            className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-amber-500 transition-all shadow-xl shadow-slate-200"
          >
            <HiOutlinePlus size={20}/> احصل على استشارة مجانية
          </a>
        </div>
      </section>

    </div>
  );
};

export default ImportExportPage;

// =========================================================
// مكون الخريطة التفاعلية (بألوان متناسقة)
// =========================================================
// const TradeMap = () => {
//   const W = 900, H = 420;
//   const hubX = W * 0.48, hubY = H * 0.45;

//   // الدول مع إحداثيات وألوان ذهبية/برتقالية تتناسب مع هوية الراية
//   const supplierData = [
//     { name: "China", flag: "🇨🇳", fx: 0.88, fy: 0.35, color: "#E60012" },
//     { name: "India", flag: "🇮🇳", fx: 0.80, fy: 0.45, color: "#FF9933" },
//     { name: "Brazil", flag: "🇧🇷", fx: 0.20, fy: 0.55, color: "#009739" },
//     { name: "Argentina", flag: "🇦🇷", fx: 0.13, fy: 0.72, color: "#75AADB" },
//     { name: "Chile", flag: "🇨🇱", fx: 0.10, fy: 0.65, color: "#0033A0" },
//     { name: "Peru", flag: "🇵🇪", fx: 0.12, fy: 0.48, color: "#D91023" },
//     { name: "Colombia", flag: "🇨🇴", fx: 0.18, fy: 0.35, color: "#FCD116" },
//     { name: "Turkey", flag: "🇹🇷", fx: 0.58, fy: 0.20, color: "#E30A17" },
//     { name: "Egypt", flag: "🇪🇬", fx: 0.55, fy: 0.42, color: "#C8102E" },
//     { name: "South Africa", flag: "🇿🇦", fx: 0.52, fy: 0.80, color: "#DE3831" },
//     { name: "Indonesia", flag: "🇮🇩", fx: 0.90, fy: 0.62, color: "#CE1126" },
//     { name: "Germany", flag: "🇩🇪", fx: 0.45, fy: 0.13, color: "#DD0000" },
//   ];

//   return (
//     <div className="w-full overflow-x-auto">
//       <svg viewBox={`0 0 ${W} ${H}`} className="w-full max-w-4xl mx-auto" style={{ minWidth: 340 }}>
//         <defs>
//           <radialGradient id="hubGrad" cx="35%" cy="35%">
//             <stop offset="0%" stopColor="#fbbf24" /> {/* لون أصفر/ذهبي */}
//             <stop offset="100%" stopColor="#d97706" />
//           </radialGradient>
//         </defs>

//         {supplierData.map((s, i) => {
//           const sx = s.fx * W, sy = s.fy * H;
//           const cpx = (sx + hubX) / 2, cpy = Math.min(sy, hubY) - H * 0.28;
//           const d = `M ${sx},${sy} Q ${cpx},${cpy} ${hubX},${hubY}`;
//           return (
//             <g key={s.name}>
//               <path d={d} fill="none" stroke="#fbbf24" strokeWidth="1.5" strokeOpacity="0.3" />
//               <path d={d} fill="none" stroke="#d97706" strokeWidth="2" strokeDasharray="8 12" strokeOpacity="0.7">
//                 <animate attributeName="stroke-dashoffset" from="0" to="20" dur="1.5s" repeatCount="indefinite" />
//               </path>
//               <circle r="4" fill="#d97706" fillOpacity="0.9">
//                 <animateMotion dur={`${2 + i * 0.15}s`} repeatCount="indefinite" path={d} />
//               </circle>
//               <circle cx={sx} cy={sy} r="6" fill="#d97706" fillOpacity="0.9" />
//               <circle cx={sx} cy={sy} r="14" fill="#d97706" fillOpacity="0.15">
//                 <animate attributeName="r" values="14;22;14" dur="2.5s" repeatCount="indefinite" />
//               </circle>
//               <text x={sx} y={sy - 14} textAnchor="middle" fontSize="11" fill="white" fontFamily="sans-serif">{s.flag}</text>
//               <text x={sx} y={sy - 26} textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.8)" fontFamily="sans-serif" fontWeight="600">{s.name}</text>
//             </g>
//           );
//         })}

//         {/* نقطة المركز (القدس) */}
//         <circle cx={hubX} cy={hubY} r="45" fill="none" stroke="#d97706" strokeWidth="1.5" strokeOpacity="0.4">
//           <animate attributeName="r" values="45;60;45" dur="3s" repeatCount="indefinite" />
//         </circle>
//         <circle cx={hubX} cy={hubY} r="30" fill="none" stroke="#fbbf24" strokeWidth="2" strokeOpacity="0.6">
//           <animate attributeName="r" values="30;42;30" dur="2.2s" repeatCount="indefinite" />
//         </circle>
//         <circle cx={hubX} cy={hubY} r="22" fill="url(#hubGrad)" />
//         <text x={hubX} y={hubY + 5} textAnchor="middle" fontSize="12" fill="white" fontFamily="sans-serif" fontWeight="bold">القدس</text>
//         <text x={hubX} y={hubY + 38} textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.7)" fontFamily="sans-serif">Jerusalem</text>
//         <text x={hubX} y={hubY + 56} textAnchor="middle" fontSize="8.5" fill="#d97706" fontFamily="sans-serif" fontWeight="600" opacity="0.8">MIDDLE EAST HUB</text>
//       </svg>
//     </div>
//   );
// };