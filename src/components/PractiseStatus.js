import React from 'react'

export default function PractiseStatus() {
  const practicePhoneNumber = "00-000-000";
  const currentTime = new Date().getHours();

  const isPracticeOpen = () =>{
    return currentTime >=8 && currentTime<17;
  };
   return (
    <div>
      <p> Practice Phone Number:{practicePhoneNumber}</p>
      <p>Practice status : {isPracticeOpen() ?"open " :"closed"}</p>
    </div>
  );
};

