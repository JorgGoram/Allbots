
import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './routes';

function App() {
  return (
    <div className="app-container bg-background text-foreground">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
