import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { CssBaseline } from '@mui/material'
import ThemeProviderComponent from './theme/ThemeProviderComponent'
import { RouterProvider } from 'react-router-dom'
import appRouter from './routes/router'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProviderComponent>
      <CssBaseline />
      <RouterProvider router={appRouter} />
    </ThemeProviderComponent>
  </React.StrictMode>,
)
