import React from 'react'
import { getProperties } from './GetpropertiesEntry'

const getFullTypes = async() => {
    const properties = await getProperties()
    console.log("properties" , properties?.length);
    
    const types = [...new Set(properties?.map((item) => item.typeOfproject))]
    const cityes = [...new Set(properties?.map((item) => item.city))]
    const opeartions = [...new Set(properties?.map((item) => item?.opeartion))]
     const Areas = [...new Set(properties?.map((item) => item?.area))]
    console.log("types" , types);
    
  return {types , Areas,  cityes , opeartions}
}

export default getFullTypes