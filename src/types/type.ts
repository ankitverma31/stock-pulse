export type Company = {
  id: string
  name: string
  sector: string
  industry: string
  currentPrice: number
  change: number
  changePercent: number
  marketCap: number
  volume: number
  avgVolume: number
  pe: number
  eps: number
  dividend: number
  dividendYield: number
  beta: number
  yearHigh: number
  yearLow: number
}

export type HistoricalData = {
  date: string
  open?: number
  high?: number
  low?: number
  close: number
  volume?: number
}[]

export type HistoricalDataByCompany = {
  [key: string]: HistoricalData
  daily: { date: string; open: number; high: number; low: number; close: number; volume: number }[]
  weekly: { date: string; close: number }[]
  monthly: { date: string; close: number }[]
  yearly: { date: string; close: number }[]
}

export type Sector = {
  name: string
  changePercent: number
  marketCap: number
  peRatio: number
  dividendYield: number
  stocks: string[]
}

export type TimeFrame = 'daily' | 'weekly' | 'monthly' | 'yearly'
