import { Link } from 'react-router-dom';

function RegisterNewSensor() {
    return (
        <>
            <h>This is the page where you can register your modules (Sensors), based on the module ID (you can find this on the device), make sure your modules are connected to the IOT router and the last is connected to the internet (Installation guidlines are available in the documentations)</h><br /><br />
            <h>You need to place the Sensors in the plants shared soil (each sensor must be installed in the soil where only one type of plants is planted and growing, You will identify this in the plant selection)</h><br /><br />
            <h>Each sensor should correspond and handle only one type of plant.</h><br />
            <br />
            <form action="http://wsl.localhost:5000/api/v1/sensors" method="post">
                <input type="text" required placeholder="Enter your sensor module id here" name="sensor_module_id" />
                &nbsp;&nbsp;
                <h>select the associated plant:</h>
                &nbsp;
                {/*<h> select the plant name this sensor is monitoring: (drop down)</h>*/}
                <select name="plant_type" id="available_plants" required>
                    <option value="none">None</option>
                    <option value="plant_A">plant_A</option>
                    <option value="plant_B">plant_B</option>
                    <option value="plant_C">plant_C</option>
                    <option value="plant_D">plant_D</option>
                </select>
                &nbsp;&nbsp;&nbsp;
                {/*<input type="text" required placeholder="Enter the name of the plant this sensor is associated with" label="sensor_plant">*/}
                <button label="register_new_sensor_module">Register a new sensor</button>
            </form>

        </>
    );
}

export default RegisterNewSensor