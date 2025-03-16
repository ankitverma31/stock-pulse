import { Card, CardContent, Typography, Box, Divider } from '@mui/material'
import sectorsData from '../../store/sectors.json'

const MetricsSummary = () => {
  const totalMarketCap = sectorsData.reduce((sum, sector) => sum + sector.marketCap, 0)
  const avgPERatio = (sectorsData.reduce((sum, sector) => sum + sector.peRatio, 0) / sectorsData.length).toFixed(2)
  const avgDividendYield = (sectorsData.reduce((sum, sector) => sum + sector.dividendYield, 0) / sectorsData.length).toFixed(2)

  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Market Overview
        </Typography>
        <Divider />
        <Box marginTop={2}>
          <Box display="flex" flexDirection="column" gap={2}>
            <Box>
              <Typography variant="h6">Total Market Cap</Typography>
              <Typography variant="body1">${(totalMarketCap / 1e12).toFixed(2)}T</Typography>
            </Box>
            <Box>
              <Typography variant="h6">Avg P/E Ratio</Typography>
              <Typography variant="body1">{avgPERatio}</Typography>
            </Box>
            <Box>
              <Typography variant="h6">Avg Dividend Yield</Typography>
              <Typography variant="body1">{avgDividendYield}%</Typography>
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  )
}

export default MetricsSummary
