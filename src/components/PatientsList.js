 import Patient from './components/Patient';
 import axios from 'axios';
import {useEffect, useState} from 'react';


const PatientList = () => {
    const [patients ,set_patients] = useState(null);

    const getData = async () => {
        const response = await axios.get(`https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/patients`);
        console.log(response.data);

        
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
        FirstName= {patient.FirstName}
        LastName={patient.LastName}
        Birthday={patient.dateofbirth}
        />
        


            )
        })
    }
    return(
 <>
 (patients ?getPatientsData() : 'loding ..')
 </>
    )


 }
  export default PatientList;