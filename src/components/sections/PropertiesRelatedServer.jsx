import React from 'react'
import PropertiesRelated from './PropertiesRelated'
import { GetEntryByquery } from '@/lib/GetEntryByquery'
import { toPropertyCard } from '@/lib/toCard'
const PropertiesRelatedServer = async ({city}) => {
  const data = await GetEntryByquery(city);

  if (!data || data.length === 0) return null;

  return <PropertiesRelated data={data.map(toPropertyCard)} />;
}

export default PropertiesRelatedServer