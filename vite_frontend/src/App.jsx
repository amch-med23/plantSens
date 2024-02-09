import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Routes, Route} from 'react-router-dom'

import Home from '/pages/home'
import RegisterNewIotRouter from '/pages/register_new_iot_router'
import RegisterNewSensor from '/pages/register_new_sensor'
import RegisterNewWaterModule from '/pages/register_new_watermodule'
import ControlPanel from '/pages/control_panel'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='register_new_iot_router' element={<RegisterNewIotRouter />} />
        <Route path='register_new_sensor' element={<RegisterNewSensor />} />
        <Route path='register_new_watter_module' element={<RegisterNewWaterModule />} />
        <Route path='control_panel' element={<ControlPanel />} />
      </Routes>
      
    </>
  );
}

export default App
