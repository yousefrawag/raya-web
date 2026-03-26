import { GetAllinvestment } from '@/lib/GetAllinvestment'
import React from 'react'
import LandingProject from './LandingProject'

const InvestMentServer = async() => {
    const data = await GetAllinvestment()
  return <LandingProject  data={data}/>
}

export default InvestMentServer