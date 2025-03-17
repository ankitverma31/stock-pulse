import { Container, Divider, Typography } from '@mui/material'
import { memo } from 'react'

const Footer: React.FC = () => {
  return (
    <Container maxWidth="xl">
      <Divider sx={{ mt: 2 }} />
      <footer>
        <Typography sx={{ textAlign: 'center', py: 2 }}>&copy; {new Date().getFullYear()} Stock Pulse. All rights reserved.</Typography>
      </footer>
    </Container>
  )
}

export default memo(Footer)
