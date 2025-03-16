import { Box, Stack } from '@mui/material'
import MetricsSummary from '../../components/MetricsSummary/MetricsSummary'
import WatchlistsOverview from '../../components/WatchListsOverview/WatchlistsOverview'
import SectorPerformanceChart from '../../components/SectorPerformanceChart/SectorPerformanceChart'

const Home: React.FC = () => {
  return (
    <Box sx={{ mt: 4 }}>
      <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent={{ xs: 'center', sm: 'space-between' }} spacing={2} sx={{ my: 2 }}>
        <Box width={{ xs: '100%', sm: '50%' }}>
          <MetricsSummary />
        </Box>
        <Box width={{ xs: '100%', sm: '50%' }}>
          <WatchlistsOverview />
        </Box>
      </Stack>
      <SectorPerformanceChart />
    </Box>
  )
}

export default Home
