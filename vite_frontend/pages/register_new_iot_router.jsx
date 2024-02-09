import { Link } from 'react-router-dom';

function RegisterNewIotRouter()
{
    return (
        <>
            <h>This is the page where you can register your IOT router, based on the router ID (you can find this under the device), make sure it's connected to the internet</h> <br /><br />
            <form action="http://wsl.localhost:5000/api/v1/iot_router" method="post">
                <input type="text" required placeholder="Enter your IOT router id here" name="iot_router_id" />
                &nbsp;&nbsp;&nbsp;
                <button label="register_iot_router">Register</button>
            </form>
        </>
    )
}

export default RegisterNewIotRouter
