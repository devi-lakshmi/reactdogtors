import Dogters  from './Dogters';

//import{useParams} from 'react-router-dom';
import React, {useState,useEffect}from 'react';
import axios from "axios";

const OnDuty =() =>{
    
    //const params =useParams();
    //const id = params.id;
    //console.log(id);
  const [dogtors ,set_dogtors]= useState([]);
  
  useEffect(() =>{
    const doSomeDataFecting = async () =>{
      const response = await axios.get(`https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/dogtors`);
    //console("i am fecth somw data" );
    set_dogtors(response.data);

  }
  doSomeDataFecting();
},[]);
  
const getCharactersComponents = () =>{

return dogtors.map(( dogtor) => {
  return(
    <Dogters key ={dogtor.id}  
            
          dogtor={dogtor.dogtor}
            
            imageUrl={dogtor.imageUrl}
            
            onDuty={dogtor.onDuty}
            id ={dogtor.id}

    
    />

  )
})
}


 
  
return(
<>
          <h4> Who's on Duty:  </h4>
            <div>
              {dogtors ? getCharactersComponents() : 'loding..'} 
      
            </div>
         </>   
    )

}
export default OnDuty;