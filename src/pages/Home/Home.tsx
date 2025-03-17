import { Box, Stack } from '@mui/material'
import MetricsSummary from '../../components/MetricsSummary/MetricsSummary'
import WatchlistsOverview from '../../components/WatchListsOverview/WatchlistsOverview'
import SectorPerformanceChart from '../../components/SectorPerformanceChart/SectorPerformanceChart'
import useDocumentTitle from '../../hooks/useDocumentTitle'
import { APP_NAME } from '../../constants/text'
import Searchbar from '../../components/Searchbar/Searchbar'

const Home: React.FC = () => {
  useDocumentTitle({ title: `Home - ${APP_NAME}` })

  return (
    <>
      <Box sx={{ display: { xs: 'block', md: 'none' } }}>
        <Searchbar />
      </Box>
      <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent={{ xs: 'center', sm: 'space-between' }} spacing={2} sx={{ my: 2 }}>
        <Box width={{ xs: '100%', sm: '50%' }}>
          <MetricsSummary />
        </Box>
        <Box width={{ xs: '100%', sm: '50%' }}>
          <WatchlistsOverview />
        </Box>
      </Stack>
      <SectorPerformanceChart />
    </>
  )
}

export default Home
