import Dogters  from './Dogters';

import{useParams} from 'react-router-dom';
import React, {useState,useEffect}from 'react';
import axios from "axios";

const OnDuty =() =>{
    
    const params =useParams();
    const id = params.id;
    console.log(id);
  const [dogtors ,set_dogtors]= useState([]);
  
  useEffect(() =>{
    const doSomeDataFecting = async () =>{
      const response = await axios.get(`https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/dogtors`);
    //console("i am fecth somw data" );
    set_dogtors(response.data);

  }
  doSomeDataFecting();
},[]);
  
return(
<div>
<ul>
          {dogtors.map(dogtor =>(
            <li key ={dogtor.id}>
              {dogtor.name}-{dogtor.specialty}
              <img src ={dogtors.imgUrl} alt ={dogtors.name}/>
           </li>
          ))}
        </ul>
    </div>
    )

}
export default OnDuty;