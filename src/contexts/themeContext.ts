import { createContext, useContext } from 'react'
import { PaletteMode } from '@mui/material'

type ThemeModeContextProps = {
  mode: PaletteMode
  toggleThemeMode: () => void
}

export const ThemeModeContext = createContext<ThemeModeContextProps | undefined>(undefined)

export const useThemeMode = () => {
  const context = useContext(ThemeModeContext)
  if (!context) {
    throw new Error('useThemeMode must be used within a ThemeProviderComponent')
  }
  return context
}
