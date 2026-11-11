import { GetAllinvestment } from '@/lib/GetAllinvestment'
import React from 'react'
import LandingProject from './LandingProject'
import { toInvestmentCard } from '@/lib/toCard'

const InvestMentServer = async() => {
    const data = await GetAllinvestment()
  return <LandingProject data={(data || []).map(toInvestmentCard)} />
}

export default InvestMentServer