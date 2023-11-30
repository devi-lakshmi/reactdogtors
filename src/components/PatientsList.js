 import Patient from './Patient';
 import axios from 'axios';
import {useEffect, useState} from 'react';


const PatientsList = () => {
    const [patients ,set_patients] = useState(null);

    const getData = async () => {
        const response = await axios.get(`https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/patients`);
        //console.log(response.data);

        
        set_patients(response.data);
    }
    useEffect(() =>{
        getData();

    },[]);
    const getPatientsData = () => {
        return patients.map((patient ) => {
            return(
                <Patient 
                key ={patient.id}
               id ={patient.id}  
        firstName= {patient.firstName}
        lastName={patient.lastName}
        Birthday={patient.dateOfBirth}
        />
        


            )
        })
    }
    return(
 <>
 {patients ? getPatientsData() :'loding ..'}
 
   </>
    )


 }
  export default PatientsList;