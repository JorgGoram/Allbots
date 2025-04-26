
import { createBrowserRouter } from 'react-router-dom';
import LandingPage from '../landing/components/LandingPage';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/auth/Login';
import Signup from '../pages/auth/Signup';
import Onboarding from '../pages/onboarding/Onboarding';
import ErrorBoundary from '../components/error/ErrorBoundary';
import NotFound from '../pages/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: '/dashboard/*',
    element: <Dashboard />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: '/signup',
    element: <Signup />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: '/onboarding',
    element: <Onboarding />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: '*',
    element: <NotFound />,
    errorElement: <ErrorBoundary />,
  }
]);

export default router;
