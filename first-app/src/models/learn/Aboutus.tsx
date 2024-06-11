import React from 'react';

const Aboutus: React.FC = () => {
  return (
    <div className='Aboutus'>
        <div className='datalistlogin'>
        <strong><b>Name</b></strong>
        <strong><b>Email</b></strong>
        <strong><b>password</b></strong>
        </div>
        <div className='datalistloginpage'>
        <strong>{localStorage.getItem('name')}</strong>
        <strong>{localStorage.getItem('email')}</strong>
        
        <strong>{localStorage.getItem('password')}</strong>
        </div>
      
     
    </div>
  );
};

export default Aboutus;
