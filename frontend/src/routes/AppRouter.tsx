import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './AppLayout'
import ScreenHome from '../pages/Home/ScreenHome'
import ScreenCampaign from '../pages/Campaign/ScreenCampaign'
import ScreenUser from '../pages/User/ScreenUser'
import { AppPaths } from './paths/AppPaths'

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: AppPaths.home, element: <ScreenHome /> },
      { path: AppPaths.campaign.detail, element: <ScreenCampaign /> },
      { path: AppPaths.user, element: <ScreenUser /> },
    ],
  },
])

const AppRouter = () => {
  return <RouterProvider router={router} />
}

export default AppRouter
