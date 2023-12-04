import   { useState} from "react";
const PatientSignUpForm= ()=>{
    const [patientData ,setPatientsData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    gender: '',
    dateOfBirth: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatientsData({
      ...patientData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Patient Data:', patientData);
    // Here you can perform additional actions like sending the data to an API
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input
          type="text"
          name="firstName"
          value={patientData.firstName}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Last Name:
        <input
          type="text"
          name="lastName"
          value={patientData.lastName}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={patientData.email}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Phone:
        <input
          type="text"
          name="phone"
          value={patientData.phone}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Gender:
        <select name="gender" value={patientData.gender} onChange={handleChange}>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </label>
      <br />
      <label>
        Date of Birth:
        <input
          type="date"
          name="dateOfBirth"
          value={patientData.dateOfBirth}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default PatientSignUpForm;
