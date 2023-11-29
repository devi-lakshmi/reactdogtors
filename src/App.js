
import './App.css';
import OnDuty from './components/OnDuty';
import Homepage from './pages/Homepage';
import Title from './components/Title';
import { Routes,Route } from 'react-router-dom';
import OnDuty from './componrts/OnDuty';
import  PatientsList './PatientList';
const App= () => {
  
return (
    <div className="App">
      
    <Title />
      <Routes>
       <Route path ="/" element={<Homepage/>} />
       <Route path ="/dogters" element={<OnDuty />} />
       <Route path ='/patents/' element={<patientsList/>} />
      
      </Routes> 
     
      <OnDuty />
    <PatientsList />
    </div>
  );
}

export default App;
