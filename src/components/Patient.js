

import {Link} from 'react-router-dom';

const Patient =(props) =>{
    return(
      <>
      
      <h1>{props.firstName}</h1>
      <h2>{props.lastName}</h2>
      <p>{props.id}</p>
      <p>{props.dateOfBirth}</p>
     <Link to ={`/patientlist/${props.id}` }>show details</Link>     
      </>        
    )
}
export default Patient;