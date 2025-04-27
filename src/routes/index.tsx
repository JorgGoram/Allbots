
import { createBrowserRouter, Outlet } from 'react-router-dom';
import LandingPage from '../landing/components/LandingPage';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/auth/Login';
import Signup from '../pages/auth/Signup';
import Onboarding from '../pages/onboarding/Onboarding';
import ErrorBoundary from '../components/error/ErrorBoundary';
import NotFound from '../pages/NotFound';
import Header from '../components/layout/header';

const Layout = () => {
  return (
    <>
      <Header />
      <main className="pt-16 md:pt-20">
        <Outlet />
      </main>
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorBoundary />,
    children: [
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
{
      path: '/',
      element: <LandingPage />,
    },
    {
      path: '/dashboard/*',
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
    },
    {
      path: '*',
      element: <NotFound />,
    }
  ]},
]);

export default router;
