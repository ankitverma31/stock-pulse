import { useEffect, useState } from 'react'
import { Button, ButtonGroup, Card, CardContent, Typography } from '@mui/material'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { PRIMARY_COLOR } from '../../constants/color'
import { fetchHistoricalData } from '../../api/fetchHistoricalDataById'
import { HistoricalDataByCompany, TimeFrame } from '../../types/type'
import PriceChartLoader from '../loaders/PriceChartLoader'

const timeFrames: { [key: string]: TimeFrame } = {
  '1D': 'daily',
  '1M': 'monthly',
  '1Y': 'yearly',
  '5Y': 'yearly',
}

const PriceChart = ({ id = 'AAPL' }) => {
  const [stockData, setStockData] = useState<HistoricalDataByCompany | null>(null)
  const [loading, setLoading] = useState(true)
  const [selectedTimeFrame, setSelectedTimeFrame] = useState('1D')
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const data = await fetchHistoricalData(id)
      setStockData(data)
      setLoading(false)
    }

    fetchData()
  }, [id])

  if (loading) return <PriceChartLoader />

  if (!stockData) {
    return (
      <Typography variant="h6" color="error">
        No stock data available
      </Typography>
    )
  }

  let chartData = stockData[timeFrames[selectedTimeFrame]] || []
  if (selectedTimeFrame === '5Y') {
    chartData = chartData.slice(-5)
  }

  return (
    <Card sx={{ margin: 'auto', padding: 2 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {id} Price Chart ({selectedTimeFrame})
        </Typography>
        <ButtonGroup fullWidth>
          {Object.keys(timeFrames).map((time) => (
            <Button key={time} variant={selectedTimeFrame === time ? 'contained' : 'outlined'} onClick={() => setSelectedTimeFrame(time)}>
              {time}
            </Button>
          ))}
        </ButtonGroup>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={chartData} margin={{ top: 20, right: 20, left: 0, bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis domain={['auto', 'auto']} />
            <Tooltip />
            <Line type="monotone" dataKey="close" stroke={PRIMARY_COLOR} strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

export default PriceChart
