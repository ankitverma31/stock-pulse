import { ThemeProvider, CssBaseline, PaletteMode } from '@mui/material'
import { useState, useMemo, useEffect, ReactNode } from 'react'
import getTheme from './theme'
import { ThemeModeContext } from '../contexts/themeContext'

const ThemeProviderComponent = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<PaletteMode>(() => {
    const savedMode = localStorage.getItem('themeMode') as PaletteMode
    return savedMode || 'light'
  })

  const toggleThemeMode = () => {
    setMode((prevMode) => {
      const newMode = prevMode === 'light' ? 'dark' : 'light'
      localStorage.setItem('themeMode', newMode)
      return newMode
    })
  }

  const theme = useMemo(() => getTheme(mode), [mode])

  useEffect(() => {
    localStorage.setItem('themeMode', mode)
  }, [mode])

  return (
    <ThemeModeContext.Provider value={{ toggleThemeMode, mode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeModeContext.Provider>
  )
}

export default ThemeProviderComponent
