import { Routes, Route } from "react-router-dom";

import Shop_Study_Metrials from "./Pages/Shop/Shop_Study_Meterials/Shop_Study_Metrials";
import Selected_Study_Metrials from "./Pages/Shop/Selected_Study_Metrials/Selected_Study_Metrials";
import Cart from "./Pages/Cart/Cart";
import MetrialDetail from "./Pages/Shop/Metrial_detail/MetrialDetail";

const AppRoutes = () => {
  return (
    <Routes>
      {/* <Route path="/" index element={<Shop_Study_Metrials/>} /> */}
      <Route path="/" element={<Selected_Study_Metrials />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/material/:id" element={<MetrialDetail />} />
    </Routes>
  );
};

export default AppRoutes;
