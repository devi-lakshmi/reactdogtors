import {useParams} from 'react-router-dom';
import axios from 'axios';
import {useState, useEffect} from 'react';

const PatientsDetails = () => {
    const params = useParams();
    //console.log(params)
    const id= params.id;
    console.log(id)
    const [details, setDetails] = useState();

    const getDetails = async () => {
        const response = await axios.get(`https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/patients/${id}`);
        console.log(response.data);
        setDetails(response.data);
    }

    useEffect(() => {
        getDetails();
    },[id] );
 
 
 
return (
      
        details ? 
            <>
               <h2>Patient details for Id </h2>
                <h1>{details.firstName}</h1>
               
                <h1>{details.lastName}</h1>
               
                
                <p>{details.dateOfBirth}</p>
               
                <p>{details.gender}</p>
               <p>{details.email}</p>
               <p>{details.phonenumber}</p>
               
               <p>{details.prescriptions}</p>
                <ul>
              { details.prescriptions.map((prescription, index) => (
                <li key={index}>{prescription}</li>
              ))}
            </ul>
            </> 
        :
            'Loading...'
    
)}

                           

export default PatientsDetails;