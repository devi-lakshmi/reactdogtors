
import {Link} from "react-router-dom";
 
const Navbar =() => {
    return(
        <div>
        <nav>
        <Link to ="/">Home</Link>
       
       <Link to ="/patientlist/:patientId ">patientDetails</Link>
        </nav>
        </div>
    );
}
export default Navbar;