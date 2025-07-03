import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Shop_Study_Metrials from './Pages/Shop/Shop_Study_Meterials/Shop_Study_Metrials';
import Cart from './Pages/Cart/Cart';



const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" index element={<Shop_Study_Metrials/>} />
        {/* <Route path='/cart' element={<Cart/>}/> */}
    </Routes>
  );
};

export default AppRoutes;
