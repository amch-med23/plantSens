import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import React from 'react';

function RegisterNewIotRouter(){
    const navigate = useNavigate();

    //this function defines the post request to the end point.
    function handleSubmit(event){
        event.preventDefault(); //this prevents the page realoading, caused by form submition
        const apiEndPoint = 'http://wsl.localhost:5000/api/v1/iot_router' //the api endpoint
        const iotRouterId = document.getElementById("iot_router_id").value;
        console.log(iotRouterId);
        axios.post(apiEndPoint, {
            new_iot_router_id: iotRouterId,
        }).then(res => {
            console.log('call status code is :' + res['status']);
            // navigating to the success page after a successful response
            if (res['status'] == 200){
                navigate('/new_iot_router_submitted');
            }
            else{
                alert('Error in the system, try again');
            }
        })
        
    
    }
    return (
        <>
            <h>This is the page where you can register your IOT router, based on the router ID (you can find this under the device), make sure it's connected to the internet</h> <br /><br />
            <form onSubmit={handleSubmit}>
                <input type="text" required placeholder="Enter your IOT router id here" id="iot_router_id" />
                &nbsp;&nbsp;&nbsp;
                <button type='submit'>Register</button>
            </form>
        </>
    )
}

export default RegisterNewIotRouter
