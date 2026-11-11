import { getProperties } from './GetpropertiesEntry'

// ⚠️ بيشتغل على السيرفر بس (HeroSection / صفحة العقارات) وبيبعت للفلاتر قوائم نصوص صغيرة.
// متستدعيهوش من "use client" component — هيحمّل مكتبة Contentful كلها في المتصفح.
const unique = (list) => [...new Set(list.filter(Boolean))]

const getFullTypes = async () => {
  try {
    const properties = (await getProperties()) || []
    return {
      types: unique(properties.map((item) => item.typeOfproject)),
      cityes: unique(properties.map((item) => item.city)),
      opeartions: unique(properties.map((item) => item?.opeartion)),
      Areas: unique(properties.map((item) => item?.area)),
    }
  } catch (error) {
    console.error('getFullTypes failed', error?.message)
    // القوائم الافتراضية جوه الفلاتر هتشتغل لو رجعنا arrays فاضية
    return { types: [], cityes: [], opeartions: [], Areas: [] }
  }
}

export default getFullTypes
