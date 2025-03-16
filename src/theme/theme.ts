import { createTheme, PaletteMode } from '@mui/material/styles'
import { DARK_BACKGROUND_COLOR, LIGHT_BACKGROUND_COLOR, PRIMARY_COLOR, SECONDARY_COLOR } from '../constants/color'
import { ThemeMode } from '../enums/enums'

const getTheme = (mode: PaletteMode) =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: PRIMARY_COLOR,
      },
      secondary: {
        main: SECONDARY_COLOR,
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          'html, body, #root': {
            height: '100%',
            backgroundColor: mode === ThemeMode.Light ? LIGHT_BACKGROUND_COLOR : DARK_BACKGROUND_COLOR,
          },
        },
      },
      MuiAutocomplete: {
        styleOverrides: {
          root: {
            backgroundColor: mode === ThemeMode.Light ? LIGHT_BACKGROUND_COLOR : DARK_BACKGROUND_COLOR,
            '& .MuiOutlinedInput-root': {
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: SECONDARY_COLOR,
              },
            },
            '& .MuiInputLabel-root': {
              '&.Mui-focused': {
                color: SECONDARY_COLOR,
              },
            },
          },
        },
      },
    },
  })

export default getTheme
