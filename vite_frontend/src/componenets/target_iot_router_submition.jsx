import { Link } from 'react-router-dom';

function IotRouterSubmition() {
    return (
        <>
            <h>You have successfully registered your new IOT router. make sure your IOT router is connected to the Interner, Our system will get it's status and will notify you if it get's offline. (Tip: Internet of things is the future of home devices Managment)</h>
            <br /> <br />
            <Link to="/"><button>Go Back</button></Link>
        </>
    )
}
export default IotRouterSubmition