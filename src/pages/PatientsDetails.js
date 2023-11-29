import {useParams} from 'react-router-dom';
import axios from 'axios';
import {useState, useEffect} from 'react';

const PatientsDetails = () => {
    const params = useParams();
    //console.log(params)
    const id = params.id;
    console.log(id)

    const [details, setDetails] = useState()

    const getDetails = async () => {
        const response = await axios.get(`https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/patients/5856675843`);
        console.log(response.data);
        setDetails(response.data);
    }

    useEffect(() => {
        getDetails();
    }, [])

    return (
        details ? 
            <>
                <h1>{details.FirstName}</h1>
                <h2>FirstName</h2>
                <h1>{details.lasttName}</h1>
                <h2>LastName</h2>
                <h2>dateOfBirth</h2>
                <p>{details.born}</p>
                <h2>Gender</h2>
                <p>{details.gender}</p>
                
                <img src={details.imgUrl} alt={details.name} />
            </> :
            'Loading...'
    )
}

export default PatientsDetails;