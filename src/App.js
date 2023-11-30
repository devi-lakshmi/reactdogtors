
import './App.css';
import OnDuty from './components/OnDuty';
import Homepage from './pages/Homepage';
import Title from './components/Title';
import { Routes,Route } from 'react-router-dom';
import PatientsList from './components/PatientsList';
import Navbar from './pages/Navbar';

const App= () => {
  
return (
    <div className="App">
      
    <Title />
    <Navbar />
      <Routes>
       <Route path ="/" element={<Homepage/>} >
       <Route path ="/onduty" element={<OnDuty />} />
       <Route path ='/patientslist' element={<PatientsList/>} />
      </Route>
      </Routes> 
     
     
 
    </div>
  );
}

export default App;
