import { Link } from "react-router-dom";


function SensorSubmition(){
    return (
        <>
            <h>You have successfuly registered your new sensor module, (make sure you installed it correctelly in your environment.)</h>
            <br /> <br />
            <Link to="/"><button>Go Back</button></Link>
        </>
    )
}
export default SensorSubmition