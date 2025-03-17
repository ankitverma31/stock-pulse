import { Outlet } from 'react-router-dom'
import Footer from './components/UI/Footer'
import Header from './components/UI/Header'
import { Container, Stack } from '@mui/material'

const AppLayout: React.FC = () => {
  return (
    <Stack justifyContent="space-between" sx={{ height: '100%' }}>
      <Header />
      <Container maxWidth="xl" style={{ flex: 1 }}>
        <Outlet />
      </Container>
      <Footer />
    </Stack>
  )
}

export default AppLayout
