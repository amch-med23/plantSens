import { Link } from "react-router-dom";

function RegisterNewWaterModule() {
    return (
        <>
            <h>This is the page where you can register your modules (Wattering module), based on the module ID (you can find this on the device), make sure your modules are connected to the IOT router and the last is connected to the internet (Installation guidlines are available in the documentations)</h><br /><br />
            <h>You need to connect the wattering module pipes to the soil where the corresponding sensor is installed.</h><br /><br />
            <h>Each Wattering module should handle the soil of the plants the associated sensor handles.</h><br />
            <br />
            <form action="http://wsl.localhost:5000/api/v1/watters" method="post">
                <input type="text" required placeholder="Enter your wattering module id here" name="wattering_module_id" />
                {/*<h>Select the sansor this Wattering module is associated to: (drop down)</h>*/}
                &nbsp; &nbsp;
                <h>select the associated sensor id:</h>
                &nbsp;
                <select name="sensor_selection" id="available_sensors" required>
                    <option value="none">None</option>
                    <option value="smodule-0001">smodule-0001</option>
                    <option value="smodule-0002">smodule-0002</option>
                </select>
                &nbsp;&nbsp;&nbsp;
                <button label="register_new_wattering_module">Register a new wattering module</button>
            </form>
        </>
    );
}

export default RegisterNewWaterModule