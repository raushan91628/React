import React from 'react';

const About: React.FC = () => {
  return (
    <div className='hrdashbord'>
      <div className='row d-flex'>
      <div className='divcol1 col-lg-4 col-md-12 col-sm-12'>
      <h1>Freshers</h1>
      <strong className='applicationcount'>1</strong>
      </div>
      <div className='divcol1 col-lg-4 col-md-12 col-sm-12'>
      <h1>Experience</h1>
      <strong className='applicationcount'>1</strong>
      </div>
      <div className='divcol1 col-lg-4 col-md-12 col-sm-12'>
      <h1>Total</h1>
      <strong className='applicationcount'>2</strong>
      </div>
      </div>
    </div>
  );
};

export default About;
