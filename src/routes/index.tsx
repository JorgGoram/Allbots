
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LandingPage from '../landing/components/LandingPage';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/auth/Login';
import Signup from '../pages/auth/Signup';
import Onboarding from '../pages/onboarding/Onboarding';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '/onboarding',
    element: <Onboarding />,
  }
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
