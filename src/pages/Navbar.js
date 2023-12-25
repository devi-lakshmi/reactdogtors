
import {NavLink} from "react-router-dom";
 
const Navbar =() => {
    return(
        <div>
        <nav>
        <NavLink to ="/">Home</NavLink>
       <NavLink  to ="/patientSignUpForm" >Patient sign up</NavLink>
        </nav>
        </div>
    );
}
export default Navbar;