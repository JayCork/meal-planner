import * as React from 'react';
import Storage from './routes/storage/Storage';
import Dashboard from './routes/dash/Dashboard';
import BottomNav from './components/BottomNavigation';
import AppShell from './routes/appShell/AppShell';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppShell />,
      error: <h1>ERROR</h1>,
      children: [
        {
          path: "/",
          element: <Dashboard />
        },
        {
          path: "/recipes",
          element: <div>Recipes</div>
        },
        {
          path: "storage",
          element: <Storage />,
        },
        {
          path: "/settings",
          element: <div>Settings</div>
        }
      ],
    },
  ]);
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  )
}

export default App
