import { createBrowserRouter } from 'react-router-dom'
import { ROUTES } from '../constants/route'
import AppLayout from '../App'
import Home from '../pages/Home/Home'
import { lazy, Suspense } from 'react'
import CompanyDetailLoader from '../components/Loaders/CompanyDetailLoader'

const CompanyDetail = lazy(() => import('../pages/Company/CompanyDetail'))

const appRouter = createBrowserRouter([
  {
    path: ROUTES.ROOT,
    element: <AppLayout />,
    errorElement: <div>404 Not Found</div>,
    children: [
      { path: ROUTES.ROOT, element: <Home /> },
      {
        path: `${ROUTES.COMPANY_DETAIL}/:id`,
        element: (
          <Suspense fallback={<CompanyDetailLoader />}>
            <CompanyDetail />
          </Suspense>
        ),
      },
    ],
  },
])

export default appRouter
