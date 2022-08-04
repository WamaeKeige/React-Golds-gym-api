import React from 'react';
import {Route, Routes} from 'react-router-dom';
import { Box } from '@mui/material';
import ExerciseDetail from './pages/ExcerciseDetail';
import Navbar from './components/Navbar';
import Home  from './pages/Home';
import Footer from './components/Footer';

 const App = () => {
  return (
    <Box width="400px">
      <Navbar />    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<ExerciseDetail />} />
      </Routes>
      <Footer />
    </Box>
  )
}
export default App;