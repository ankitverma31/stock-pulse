import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Tooltip from '@mui/material/Tooltip'
import { DarkMode, LightMode, QueryStats } from '@mui/icons-material'
import { useThemeMode } from '../../contexts/themeContext'
import { ThemeMode } from '../../enums/enums'
import { APP_NAME } from '../../constants/text'

import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import Searchbar from '../Searchbar/Searchbar'
import { memo } from 'react'
import MovingTicker from '../MovingTicker/MovingTicker'

const Header: React.FC = () => {
  const { mode, toggleThemeMode } = useThemeMode()

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: 'primary.main' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
              <QueryStats sx={{ mr: 1 }} />
              <Typography
                variant="h6"
                noWrap
                sx={{
                  mr: 2,
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                {APP_NAME}
              </Typography>
            </Link>
            <Stack sx={{ flexGrow: 0 }} direction="row" spacing={0.5} justifyContent="center">
              <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                <Searchbar />
              </Box>
              <Tooltip title="Toggle light/dark theme">
                <IconButton sx={{ p: 1 }} onClick={toggleThemeMode}>
                  {mode === ThemeMode.Light ? <LightMode /> : <DarkMode />}
                </IconButton>
              </Tooltip>
            </Stack>
          </Toolbar>
        </Container>
        <MovingTicker />
      </AppBar>
    </>
  )
}
export default memo(Header)
