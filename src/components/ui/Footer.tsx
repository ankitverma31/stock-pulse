import { Container, Typography } from '@mui/material'
import { memo } from 'react'
import { PRIMARY_COLOR } from '../../constants/color'

const Footer: React.FC = () => {
  return (
    <Container maxWidth="xl">
      <footer style={{ borderTop: `1px solid ${PRIMARY_COLOR}` }}>
        <Typography sx={{ textAlign: 'center', py: 2 }}>&copy; {new Date().getFullYear()} Stock Pulse. All rights reserved.</Typography>
      </footer>
    </Container>
  )
}

export default memo(Footer)
