 import Patient from './Patient';
 import axios from 'axios';
import {useEffect, useState} from 'react';
//import { Link } from 'react-router-dom';
 
function compare_name( patient_a, patient_b){
    return patient_a.lastName.localeCompare(patient_b.lastName);
}

const PatientsList = () => {;
    const [patients ,set_patients] = useState([]);

    const getData = async () => {
        const response = await axios.get(`https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/patients`);
        console.log(response.data);

        
        set_patients(response.data);
    }
    useEffect(() =>{
        getData();

    },[]);
    const getPatientsData = () => {
 const patient_sorted =[...patients].sort(compare_name);
        return patient_sorted.map((patient ) => {
            return(
                <Patient 
                key ={patient.id}
               id ={patient.id}  
        firstName= {patient.firstName}
        lastName={patient.lastName}
        dateOfBirth={patient.dateOfBirth}
        />
        


            )
        }
        )
        
        
    }
    //const patient_sorted =[...patients].sort(compare_name);
    return(
 <>
 <h2>List of patients</h2>
 {patients ? getPatientsData() :'loding ..'}

   
   </>
    )


 }
  export default PatientsList;