import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; //this is a package to hangel http requests 
import React from 'react';

function RegisterNewSensor() {
    const navigate = useNavigate();
    
    function handleSubmit(event){
        {/*the api end point is:  http://wsl.localhost:5000/api/v1/sensors*/}
        event.preventDefault(); //this is to prevent the default form behaiviour which is page reloading.
        const apiEndPoint = 'http://wsl.localhost:5000/api/v1/sensors';
        const plantType = document.getElementById('plant_type').value;
        const sensorId = document.getElementById('sensor_module_id').value;

        console.log(plantType);
        console.log(sensorId);
        axios.post(apiEndPoint, {
            new_sensor_id: sensorId,
            plany_type: plantType,
        }).then(res => {
            console.log('call status code is ' + res['status']);
            if (res['status'] == 200){
                navigate('/new_sensor_submitted'); //navigating to the success page
            }
            else{
                alert('Error in the system, try again');
            }
        })

    }
    return (
        <>
            <h>This is the page where you can register your modules (Sensors), based on the module ID (you can find this on the device), make sure your modules are connected to the IOT router and the last is connected to the internet (Installation guidlines are available in the documentations)</h><br /><br />
            <h>You need to place the Sensors in the plants shared soil (each sensor must be installed in the soil where only one type of plants is planted and growing, You will identify this in the plant selection)</h><br /><br />
            <h>Each sensor should correspond and handle only one type of plant.</h><br />
            <br />
            <form onSubmit={handleSubmit}>
                <input type="text" required placeholder="Enter your sensor module id here" id="sensor_module_id" />
                &nbsp;&nbsp;
                <h>select the associated plant:</h>
                &nbsp;
                {/*<h> select the plant name this sensor is monitoring: (drop down)</h>*/}
                <select id="plant_type" required>
                    <option value="none">None</option>
                    <option value="plant_A">plant_A</option>
                    <option value="plant_B">plant_B</option>
                    <option value="plant_C">plant_C</option>
                    <option value="plant_D">plant_D</option>
                </select>
                &nbsp;&nbsp;&nbsp;
                {/*<input type="text" required placeholder="Enter the name of the plant this sensor is associated with" label="sensor_plant">*/}
                <button type='submit'>Register a new sensor</button>
            </form>

        </>
    );
}

export default RegisterNewSensor