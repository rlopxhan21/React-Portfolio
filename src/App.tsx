import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { theme } from './Theme/useTheme';
import { DashboardPage } from './Pages/DashboardPage';

import { ThemeProvider } from '@mui/material';

const App: React.FC = () => {

  return <ThemeProvider theme={theme}>
    <Routes>
      <Route path='/' element={<DashboardPage />} />
    </Routes>
  </ThemeProvider>
}

export default App;
