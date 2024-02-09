import { Link } from "react-router-dom";

function Home() {
    return (
      <>
        <h>This is the page where you register and manage your Hardware modules (you must have your IOT router connected to the internet)</h> <br />
        <h4>The required steps:</h4>
        <h>1 - Register your IOT router.</h> <br />
        <h>2 - register your sensors and the assocaited plants (the plant type of the soil the sensor is installed in).</h><br />
        <h>3 - register the wattering module by specifying the associated sensors.</h><br />
        <h>4 - proceed to the control panel.</h><br /><br />
        <Link to="/register_new_iot_router"><button label="goto_iot_router_reg">Register a new IOT router</button></Link><br /><br />
        <Link to="/register_new_sensor"> <button>Register a new sensor</button></Link> <br /> <br />
        <Link to="/register_new_watter_module"> <button>Register a new Wattering module</button></Link><br /><br />
        <Link to="/control_panel"> <button>Proceed to CP</button></Link>
    </>
    );
}

export default Home