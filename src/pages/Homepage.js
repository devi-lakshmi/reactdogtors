
import {Link ,Outlet} from 'react-router-dom';
const Homepage =() =>{
     return(
        <div>
            
         <h2>welcome to AMS GPs</h2>
        <nav>
        <Link to ='/OnDuty'>Who is onduty </Link>
        <Link to = '/patientlist'>Patients List</Link>
              
        </nav>
         <Outlet />
        </div>




     ) 


}
export default Homepage;