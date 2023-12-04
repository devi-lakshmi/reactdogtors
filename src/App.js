
import './App.css';
import OnDuty from './components/OnDuty';
import Homepage from './pages/Homepage';
import Title from './components/Title';
import { Routes,Route } from 'react-router-dom';
import PatientsList from './components/PatientsList';
import Navbar from './pages/Navbar';
import PatientsDetails from './pages/PatientsDetails';




const App= () => {
  
return (
    <div className="App">
      
    <Title />
    <Navbar />
      <Routes>
       <Route path ="/" element={<Homepage/>} >
       <Route path ="onDuty" element={<OnDuty/>} />
       <Route path ='patientlist' element={<PatientsList/>} />
      </Route>
      <Route path = '/patientlist/:id' element={<PatientsDetails/>} />
           
    </Routes> 
     
     
 
    </div>
  );
}

export default App;
