import React from 'react'
import PropertiesRelated from './PropertiesRelated'
import { GetEntryByquery } from '@/lib/GetEntryByquery'
const PropertiesRelatedServer = async ({city}) => {
  const data = await GetEntryByquery(city);
console.log("data-from related properties" , city);

  if (!data || data.length === 0) return null;

  return <PropertiesRelated data={data} />;
}

export default PropertiesRelatedServer