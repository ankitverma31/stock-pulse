import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import { Card, CardContent, Divider, Typography } from '@mui/material'
import { PRIMARY_COLOR } from '../../constants/color'
import { useEffect, useState } from 'react'
import { fetchSectorPerformanceData } from '../../api/fetchSectorPerformanceData'
import { Sector } from '../../types/type'

const SectorPerformanceChart = () => {
  const [data, setData] = useState<Sector[]>([])

  useEffect(() => {
    const getData = async () => {
      const sectorsData = await fetchSectorPerformanceData()
      const formattedData = sectorsData.map((sector: Sector) => ({
        name: sector.name,
        changePercent: sector.changePercent,
        marketCap: sector.marketCap / 1e12, // Convert to Trillions
        peRatio: sector.peRatio,
        dividendYield: sector.dividendYield,
        stocks: sector.stocks,
      }))
      setData(formattedData)
    }

    getData()
  }, [])

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Sector Performance
        </Typography>
        <Divider />
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data} margin={{ top: 10, right: 10, left: 10, bottom: 10 }}>
            <XAxis dataKey="name" />
            <YAxis label={{ value: 'Market Cap (T)', angle: -90, position: 'insideLeft' }} />
            <Tooltip />
            <Bar dataKey="marketCap" fill={PRIMARY_COLOR} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

export default SectorPerformanceChart
