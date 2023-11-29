

//import {Link} from 'react-router-dom';

const Patient =(props) =>{
    return(
      <>
      
      <h1>{props.name}</h1>
    <img src= {props.url} alt="oops no image"></img>      
      </>        
    )
}
export default Patient;