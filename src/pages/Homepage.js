
import {Link ,Outlet} from 'react-router-dom';
import PractiseStatus from '../components/PractiseStatus';
const Homepage =() =>{
     return(
        <div>
            
         <h2>welcome to AMS GPs</h2>
        <nav>
        <Link to ='/OnDuty'><button>Who is onduty </button></Link>
        <Link to = '/patientlist'><button> Patients List </button></Link>
          <PractiseStatus />    
        </nav>
         <Outlet />
        </div>




     ) 


}
export default Homepage;