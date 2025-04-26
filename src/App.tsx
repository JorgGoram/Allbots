
import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './routes';
import Header from './components/layout/header';

function App() {
  return (
    <div className="app-container bg-background text-foreground">
      <Header />
      <main className="pt-16 md:pt-20"> {/* Add padding to account for fixed header */}
        <RouterProvider router={router} />
      </main>
    </div>
  );
}

export default App;
