import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import React from "react";
import axios from 'axios';

function RegisterNewWaterModule() {
    const navigate = useNavigate();

    function handleSubmit(event){
        event.preventDefault(); // preventing the default behaviour of page reloading after form submition
        const apiEndPoint = 'http://wsl.localhost:5000/api/v1/water_module';
        const waterModuleId = document.getElementById('water_module_id').value;
        const selectedSensor = document.getElementById('sensor_selection').value;
        
        //debugging
        console.log(waterModuleId);
        console.log(selectedSensor);
        // sending to api endpoint
        axios.post(apiEndPoint, {
            water_module_id: waterModuleId,
            selected_sensor_id: selectedSensor,
        }).then(res => {
            console.log('call status code is ' + res['status']);
            // redirecting after successfull post
            if (res['status'] == 200){
                navigate('/new_water_module_submitted');
            }
            else{
                alert('Error in the system, try again');
            }
        })

    }
    return (
        <>
            <h>This is the page where you can register your modules (Wattering module), based on the module ID (you can find this on the device), make sure your modules are connected to the IOT router and the last is connected to the internet (Installation guidlines are available in the documentations)</h><br /><br />
            <h>You need to connect the wattering module pipes to the soil where the corresponding sensor is installed.</h><br /><br />
            <h>Each Wattering module should handle the soil of the plants the associated sensor handles.</h><br />
            <br />
            <form action="http://wsl.localhost:5000/api/v1/water_module" method="post" onSubmit={handleSubmit}>
                <input type="text" required placeholder="Enter your wattering module id here" id="water_module_id" />
                {/*<h>Select the sansor this Wattering module is associated to: (drop down)</h>*/}
                &nbsp; &nbsp;
                <h>select the associated sensor id:</h>
                &nbsp;
                <select id="sensor_selection" required>
                    <option value="none">None</option>
                    <option value="smodule-0001">smodule-0001</option>
                    <option value="smodule-0002">smodule-0002</option>
                </select>
                &nbsp;&nbsp;&nbsp;
                <button label="register_new_wattering_module" type="submit">Register a new wattering module</button>
            </form>
        </>
    );
}

export default RegisterNewWaterModule