import { Outlet } from 'react-router-dom'
import { Container, Stack } from '@mui/material'
import Header from './components/temp/Header'
import Footer from './components/temp/Footer'

const AppLayout: React.FC = () => {
  return (
    <Stack justifyContent="space-between" sx={{ height: '100%' }}>
      <Header />
      <Container maxWidth="xl" sx={{ flex: 1, mt: 4 }}>
        <Outlet />
      </Container>
      <Footer />
    </Stack>
  )
}

export default AppLayout
