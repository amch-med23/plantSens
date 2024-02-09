import {Routes, Route} from 'react-router-dom'
import React from 'react';

import Home from './componenets/home'
import RegisterNewIotRouter from './componenets/register_new_iot_router'
import RegisterNewSensor from './componenets/register_new_sensor'
import RegisterNewWaterModule from './componenets/register_new_watermodule'
import ControlPanel from './componenets/control_panel'
import SensorSubmition from './componenets/target_sensor_submition'
import IotRouterSubmition from './componenets/target_iot_router_submition'
import WaterModuleSubmition from './componenets/target_water_module_submition'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='register_new_iot_router' element={<RegisterNewIotRouter />} />
        <Route path='register_new_sensor' element={<RegisterNewSensor />} />
        <Route path='register_new_watter_module' element={<RegisterNewWaterModule />} />
        <Route path='control_panel' element={<ControlPanel />} />
        <Route path='new_iot_router_submitted' element={<IotRouterSubmition />} />
        <Route path='new_sensor_submitted' element={<SensorSubmition />} />
        <Route path='new_water_module_submitted' element={<WaterModuleSubmition />} />
      </Routes>
      
    </>
  );
}

export default App
