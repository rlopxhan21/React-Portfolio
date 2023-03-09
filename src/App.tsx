import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { theme } from './Theme/useTheme';
import { HomePage } from './Pages/HomePage';

import { ThemeProvider } from '@mui/material';

function App() {
  return <ThemeProvider theme={theme}>
    <Routes>
      <Route path='/' element={<HomePage />} />
    </Routes>

  </ThemeProvider>
}

export default App;
