import AddProperty from '../../components/sections/AddProperty';
import Script from "next/script";

export const metadata = {
  title: 'أضف عقارك مع منصة الراية | تسويق عقاري واستشارات هندسية',

  description:
    'شارك مشروعك العقاري مع منصة الراية – نوفر لك حلولاً متكاملة للتسويق، البيع، الإيجار، والاستشارات الهندسية. أضف عقارك الآن واستفد من شبكتنا الواسعة من المستثمرين والمشترين.',

  keywords: [
    'إضافة عقار',
    'تسويق عقاري',
    'بيع عقار',
    'إيجار عقار',
    'استشارات هندسية',
    'منصة الراية',
    'عقارات فلسطين',
    'شقق للبيع',
    'فلل للبيع',
    'أراضي للبيع',
    'استثمار عقاري',
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: 'https://www.rayapal.com/add-property',
  },

  openGraph: {
    title: 'أضف عقارك مع منصة الراية | تسويق عقاري واستشارات هندسية',

    description:
      'شارك مشروعك العقاري مع منصة الراية واستفد من خدمات التسويق العقاري والاستشارات الهندسية.',

    url: 'https://www.rayapal.com/add-property',

    type: 'website',

    images: [
      {
        url: 'https://www.rayapal.com/icon.png',
        width: 1200,
        height: 630,
        alt: 'منصة الراية العقارية',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',

    title:
      'أضف عقارك مع منصة الراية | تسويق عقاري واستشارات هندسية',

    description:
      'شارك مشروعك العقاري مع منصة الراية واستفد من خدمات التسويق العقاري والاستشارات الهندسية.',

    images: ['https://www.rayapal.com/icon.png'],
  },
};

const schemaData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'إضافة عقار ومنصة تسويق عقاري واستشارات هندسية',

  description:
    'شارك مشروعك العقاري مع منصة الراية – نوفر لك حلولاً متكاملة للتسويق، البيع، الإيجار، والاستشارات الهندسية.',

  provider: {
    '@type': 'Organization',
    name: 'منصة الراية',
    url: 'https://www.rayapal.com',
    logo: 'https://www.rayapal.com/icon.png',

    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+972568700632',
      contactType: 'Customer Service',
      availableLanguage: ['Arabic'],
    },
  },

  areaServed: {
    '@type': 'Place',
    name: 'فلسطين',

    address: {
      '@type': 'PostalAddress',
      addressCountry: 'PS',
    },
  },

  serviceType: [
    'تسويق عقاري',
    'استشارات هندسية',
    'بيع عقار',
    'إيجار عقار',
    'استثمار عقاري',
  ],

  potentialAction: {
    '@type': 'CommunicateAction',

    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://www.rayapal.com/add-property',

      actionPlatform: [
        'http://schema.org/DesktopWebPlatform',
        'http://schema.org/MobileWebPlatform',
      ],
    },
  },

  about: {
    '@type': 'Thing',
    name: 'العقارات في فلسطين',

    description:
      'خدمة عرض وإضافة العقارات والمشاريع السكنية والتجارية والصناعية في فلسطين مع استشارات هندسية متكاملة.',
  },

  audience: {
    '@type': 'Audience',
    audienceType:
      'ملاك العقارات والمستثمرين والمطورين العقاريين',
  },
};

export default function AddPropertyPage() {
  return (
    <div>
      <Script
        type="application/ld+json"
              dangerouslySetInnerHTML={{
          __html: JSON.stringify(
       schemaData
          )
        }}
    
      />

      <AddProperty />
    </div>
  );
}