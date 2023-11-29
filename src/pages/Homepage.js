
import {Link} from 'react-router-dom';
const Homepage =() =>{
     return(
        <div>
            
            <h1> Home</h1>
        <h2>welcome to AMS GPs</h2>
        <Link to ='/on duty'><button>Who is onduty</button></Link>
        <Link to = '/patient list'><button>Patients List</button></Link>
        </div>
        


     ) 


}
export default Homepage;