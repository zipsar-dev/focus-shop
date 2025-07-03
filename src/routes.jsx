import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Shop_Study_Metrials from './Pages/Shop/Shop_Study_Meterials/Shop_Study_Metrials';



const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Shop_Study_Metrials/>} />
      
    </Routes>
  );
};

export default AppRoutes;
