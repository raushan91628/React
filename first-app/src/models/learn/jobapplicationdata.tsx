import React, { useEffect, useState } from 'react';

const RegistrationData: React.FC = () => {
  const [isEditFormVisible, setIsEditFormVisible] = useState<boolean>(false);
  const toggleEditForm = () => {
    setIsEditFormVisible(prevState => !prevState);
  }
  const [status, setStatus] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStatus(e.target.value);
    localStorage.setItem("status",e.target.value);
  };
  const today = new Date();
  const formattedDate = today.toDateString();

  return (
    <div className="interndata">
       <div className='datalistintern'>
        <strong>Date</strong>
        <strong><b>Name</b></strong>
        <strong><b>Email</b></strong>
        <strong><b>Action</b></strong>
        </div>
        <div className='datalistjobpage'> 
          <p>{formattedDate}</p>
        <strong> {localStorage.getItem('jfullname')}</strong>
        <strong> {localStorage.getItem('jemailid')}</strong>
        <strong><button onClick={toggleEditForm}>view</button></strong>
        </div>
        {isEditFormVisible && (
        <div className='viewalldata'>
          <button onClick={toggleEditForm}>X</button>
            <h1 className='text-center'>Candidate Detail</h1><hr></hr>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Fullname :{localStorage.getItem('jfullname')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Email Id :{localStorage.getItem('jemailid')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Phone : {localStorage.getItem('jphone')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>College : {localStorage.getItem('jcollege')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Cource : {localStorage.getItem('jcource')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Field : {localStorage.getItem('jfield')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Role : {localStorage.getItem('jrole')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Job Role : {localStorage.getItem('jerole')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>year : {localStorage.getItem('jyear')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>State : {localStorage.getItem('jstate')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>District : {localStorage.getItem('jdistrict')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Experience : {localStorage.getItem('jexperience')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Company : {localStorage.getItem('jcompany')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Location : {localStorage.getItem('jlocation')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Resume : {localStorage.getItem('jresume')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Letter : {localStorage.getItem('jletter')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Current Address : {localStorage.getItem('jcurrent')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Parmanent Address : {localStorage.getItem('jparmanent')}</strong>
          </div>
        </div>
        <div className='status'>
      <div className='row d-flex'>
        <h1>Status</h1>
        <hr />
        <p>Match to job description</p>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Inprocess'
            checked={status === 'Status:-Inprocess'}
            onChange={handleChange}
          /> Inprocess
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Selected'
            checked={status === 'Status:-Selected'}
            onChange={handleChange}
          /> Select
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Rejected'
            checked={status === 'Status:-Rejected'}
            onChange={handleChange}
          /> Reject
        </div>
      </div>
    </div>
        </div>
        
        )}
         <div className='datalistjobpage'> 
          <p>{formattedDate}</p>
        <strong> {localStorage.getItem('jfullname')}</strong>
        <strong> {localStorage.getItem('jemailid')}</strong>
        <strong><button onClick={toggleEditForm}>view</button></strong>
        </div>
        {isEditFormVisible && (
        <div className='viewalldata'>
          <button onClick={toggleEditForm}>X</button>
            <h1 className='text-center'>Candidate Detail</h1><hr></hr>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Fullname :{localStorage.getItem('jfullname')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Email Id :{localStorage.getItem('jemailid')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Phone : {localStorage.getItem('jphone')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>College : {localStorage.getItem('jcollege')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Cource : {localStorage.getItem('jcource')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Field : {localStorage.getItem('jfield')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Role : {localStorage.getItem('jrole')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Job Role : {localStorage.getItem('jerole')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>year : {localStorage.getItem('jyear')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>State : {localStorage.getItem('jstate')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>District : {localStorage.getItem('jdistrict')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Experience : {localStorage.getItem('jexperience')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Company : {localStorage.getItem('jcompany')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Location : {localStorage.getItem('jlocation')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Resume : {localStorage.getItem('jresume')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Letter : {localStorage.getItem('jletter')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Current Address : {localStorage.getItem('jcurrent')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Parmanent Address : {localStorage.getItem('jparmanent')}</strong>
          </div>
        </div>
        <div className='status'>
      <div className='row d-flex'>
        <h1>Status</h1>
        <hr />
        <p>Match to job description</p>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Inprocess'
            checked={status === 'Status:-Inprocess'}
            onChange={handleChange}
          /> Inprocess
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Selected'
            checked={status === 'Status:-Selected'}
            onChange={handleChange}
          /> Select
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Rejected'
            checked={status === 'Status:-Rejected'}
            onChange={handleChange}
          /> Reject
        </div>
      </div>
      
    </div>
        </div>
        )}
         <div className='datalistjobpage'> 
          <p>{formattedDate}</p>
        <strong> {localStorage.getItem('jfullname')}</strong>
        <strong> {localStorage.getItem('jemailid')}</strong>
        <strong><button onClick={toggleEditForm}>view</button></strong>
        </div>
        {isEditFormVisible && (
        <div className='viewalldata'>
          <button onClick={toggleEditForm}>X</button>
            <h1 className='text-center'>Candidate Detail</h1><hr></hr>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Fullname :{localStorage.getItem('jfullname')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Email Id :{localStorage.getItem('jemailid')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Phone : {localStorage.getItem('jphone')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>College : {localStorage.getItem('jcollege')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Cource : {localStorage.getItem('jcource')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Field : {localStorage.getItem('jfield')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Role : {localStorage.getItem('jrole')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Job Role : {localStorage.getItem('jerole')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>year : {localStorage.getItem('jyear')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>State : {localStorage.getItem('jstate')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>District : {localStorage.getItem('jdistrict')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Experience : {localStorage.getItem('jexperience')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Company : {localStorage.getItem('jcompany')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Location : {localStorage.getItem('jlocation')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Resume : {localStorage.getItem('jresume')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Letter : {localStorage.getItem('jletter')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Current Address : {localStorage.getItem('jcurrent')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Parmanent Address : {localStorage.getItem('jparmanent')}</strong>
          </div>
        </div>
        <div className='status'>
      <div className='row d-flex'>
        <h1>Status</h1>
        <hr />
        <p>Match to job description</p>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Inprocess'
            checked={status === 'Status:-Inprocess'}
            onChange={handleChange}
          /> Inprocess
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Selected'
            checked={status === 'Status:-Selected'}
            onChange={handleChange}
          /> Select
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Rejected'
            checked={status === 'Status:-Rejected'}
            onChange={handleChange}
          /> Reject
        </div>
      </div>
    </div>
        </div>
        
        )}
         <div className='datalistjobpage'> 
          <p>{formattedDate}</p>
        <strong> {localStorage.getItem('jfullname')}</strong>
        <strong> {localStorage.getItem('jemailid')}</strong>
        <strong><button onClick={toggleEditForm}>view</button></strong>
        </div>
        {isEditFormVisible && (
        <div className='viewalldata'>
          <button onClick={toggleEditForm}>X</button>
            <h1 className='text-center'>Candidate Detail</h1><hr></hr>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Fullname :{localStorage.getItem('jfullname')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Email Id :{localStorage.getItem('jemailid')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Phone : {localStorage.getItem('jphone')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>College : {localStorage.getItem('jcollege')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Cource : {localStorage.getItem('jcource')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Field : {localStorage.getItem('jfield')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Role : {localStorage.getItem('jrole')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Job Role : {localStorage.getItem('jerole')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>year : {localStorage.getItem('jyear')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>State : {localStorage.getItem('jstate')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>District : {localStorage.getItem('jdistrict')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Experience : {localStorage.getItem('jexperience')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Company : {localStorage.getItem('jcompany')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Location : {localStorage.getItem('jlocation')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Resume : {localStorage.getItem('jresume')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Letter : {localStorage.getItem('jletter')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Current Address : {localStorage.getItem('jcurrent')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Parmanent Address : {localStorage.getItem('jparmanent')}</strong>
          </div>
        </div>
        <div className='status'>
      <div className='row d-flex'>
        <h1>Status</h1>
        <hr />
        <p>Match to job description</p>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Inprocess'
            checked={status === 'Status:-Inprocess'}
            onChange={handleChange}
          /> Inprocess
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Selected'
            checked={status === 'Status:-Selected'}
            onChange={handleChange}
          /> Select
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Rejected'
            checked={status === 'Status:-Rejected'}
            onChange={handleChange}
          /> Reject
        </div>
      </div>
      
    </div>
        </div>
        )}
         <div className='datalistjobpage'> 
          <p>{formattedDate}</p>
        <strong> {localStorage.getItem('jfullname')}</strong>
        <strong> {localStorage.getItem('jemailid')}</strong>
        <strong><button onClick={toggleEditForm}>view</button></strong>
        </div>
        {isEditFormVisible && (
        <div className='viewalldata'>
          <button onClick={toggleEditForm}>X</button>
            <h1 className='text-center'>Candidate Detail</h1><hr></hr>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Fullname :{localStorage.getItem('jfullname')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Email Id :{localStorage.getItem('jemailid')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Phone : {localStorage.getItem('jphone')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>College : {localStorage.getItem('jcollege')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Cource : {localStorage.getItem('jcource')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Field : {localStorage.getItem('jfield')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Role : {localStorage.getItem('jrole')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Job Role : {localStorage.getItem('jerole')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>year : {localStorage.getItem('jyear')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>State : {localStorage.getItem('jstate')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>District : {localStorage.getItem('jdistrict')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Experience : {localStorage.getItem('jexperience')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Company : {localStorage.getItem('jcompany')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Location : {localStorage.getItem('jlocation')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Resume : {localStorage.getItem('jresume')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Letter : {localStorage.getItem('jletter')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Current Address : {localStorage.getItem('jcurrent')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Parmanent Address : {localStorage.getItem('jparmanent')}</strong>
          </div>
        </div>
        <div className='status'>
      <div className='row d-flex'>
        <h1>Status</h1>
        <hr />
        <p>Match to job description</p>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Inprocess'
            checked={status === 'Status:-Inprocess'}
            onChange={handleChange}
          /> Inprocess
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Selected'
            checked={status === 'Status:-Selected'}
            onChange={handleChange}
          /> Select
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Rejected'
            checked={status === 'Status:-Rejected'}
            onChange={handleChange}
          /> Reject
        </div>
      </div>
    </div>
        </div>
        
        )}
         <div className='datalistjobpage'> 
          <p>{formattedDate}</p>
        <strong> {localStorage.getItem('jfullname')}</strong>
        <strong> {localStorage.getItem('jemailid')}</strong>
        <strong><button onClick={toggleEditForm}>view</button></strong>
        </div>
        {isEditFormVisible && (
        <div className='viewalldata'>
          <button onClick={toggleEditForm}>X</button>
            <h1 className='text-center'>Candidate Detail</h1><hr></hr>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Fullname :{localStorage.getItem('jfullname')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Email Id :{localStorage.getItem('jemailid')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Phone : {localStorage.getItem('jphone')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>College : {localStorage.getItem('jcollege')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Cource : {localStorage.getItem('jcource')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Field : {localStorage.getItem('jfield')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Role : {localStorage.getItem('jrole')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Job Role : {localStorage.getItem('jerole')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>year : {localStorage.getItem('jyear')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>State : {localStorage.getItem('jstate')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>District : {localStorage.getItem('jdistrict')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Experience : {localStorage.getItem('jexperience')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Company : {localStorage.getItem('jcompany')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Location : {localStorage.getItem('jlocation')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Resume : {localStorage.getItem('jresume')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Letter : {localStorage.getItem('jletter')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Current Address : {localStorage.getItem('jcurrent')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Parmanent Address : {localStorage.getItem('jparmanent')}</strong>
          </div>
        </div>
        <div className='status'>
      <div className='row d-flex'>
        <h1>Status</h1>
        <hr />
        <p>Match to job description</p>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Inprocess'
            checked={status === 'Status:-Inprocess'}
            onChange={handleChange}
          /> Inprocess
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Selected'
            checked={status === 'Status:-Selected'}
            onChange={handleChange}
          /> Select
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Rejected'
            checked={status === 'Status:-Rejected'}
            onChange={handleChange}
          /> Reject
        </div>
      </div>
      
    </div>
        </div>
        )}
         <div className='datalistjobpage'> 
          <p>{formattedDate}</p>
        <strong> {localStorage.getItem('jfullname')}</strong>
        <strong> {localStorage.getItem('jemailid')}</strong>
        <strong><button onClick={toggleEditForm}>view</button></strong>
        </div>
        {isEditFormVisible && (
        <div className='viewalldata'>
          <button onClick={toggleEditForm}>X</button>
            <h1 className='text-center'>Candidate Detail</h1><hr></hr>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Fullname :{localStorage.getItem('jfullname')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Email Id :{localStorage.getItem('jemailid')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Phone : {localStorage.getItem('jphone')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>College : {localStorage.getItem('jcollege')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Cource : {localStorage.getItem('jcource')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Field : {localStorage.getItem('jfield')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Role : {localStorage.getItem('jrole')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Job Role : {localStorage.getItem('jerole')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>year : {localStorage.getItem('jyear')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>State : {localStorage.getItem('jstate')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>District : {localStorage.getItem('jdistrict')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Experience : {localStorage.getItem('jexperience')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Company : {localStorage.getItem('jcompany')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Location : {localStorage.getItem('jlocation')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Resume : {localStorage.getItem('jresume')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Letter : {localStorage.getItem('jletter')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Current Address : {localStorage.getItem('jcurrent')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Parmanent Address : {localStorage.getItem('jparmanent')}</strong>
          </div>
        </div>
        <div className='status'>
      <div className='row d-flex'>
        <h1>Status</h1>
        <hr />
        <p>Match to job description</p>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Inprocess'
            checked={status === 'Status:-Inprocess'}
            onChange={handleChange}
          /> Inprocess
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Selected'
            checked={status === 'Status:-Selected'}
            onChange={handleChange}
          /> Select
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Rejected'
            checked={status === 'Status:-Rejected'}
            onChange={handleChange}
          /> Reject
        </div>
      </div>
    </div>
        </div>
        
        )}
         <div className='datalistjobpage'> 
          <p>{formattedDate}</p>
        <strong> {localStorage.getItem('jfullname')}</strong>
        <strong> {localStorage.getItem('jemailid')}</strong>
        <strong><button onClick={toggleEditForm}>view</button></strong>
        </div>
        {isEditFormVisible && (
        <div className='viewalldata'>
          <button onClick={toggleEditForm}>X</button>
            <h1 className='text-center'>Candidate Detail</h1><hr></hr>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Fullname :{localStorage.getItem('jfullname')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Email Id :{localStorage.getItem('jemailid')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Phone : {localStorage.getItem('jphone')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>College : {localStorage.getItem('jcollege')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Cource : {localStorage.getItem('jcource')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Field : {localStorage.getItem('jfield')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Role : {localStorage.getItem('jrole')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Job Role : {localStorage.getItem('jerole')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>year : {localStorage.getItem('jyear')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>State : {localStorage.getItem('jstate')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>District : {localStorage.getItem('jdistrict')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Experience : {localStorage.getItem('jexperience')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Company : {localStorage.getItem('jcompany')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Location : {localStorage.getItem('jlocation')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Resume : {localStorage.getItem('jresume')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Letter : {localStorage.getItem('jletter')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Current Address : {localStorage.getItem('jcurrent')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Parmanent Address : {localStorage.getItem('jparmanent')}</strong>
          </div>
        </div>
        <div className='status'>
      <div className='row d-flex'>
        <h1>Status</h1>
        <hr />
        <p>Match to job description</p>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Inprocess'
            checked={status === 'Status:-Inprocess'}
            onChange={handleChange}
          /> Inprocess
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Selected'
            checked={status === 'Status:-Selected'}
            onChange={handleChange}
          /> Select
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Rejected'
            checked={status === 'Status:-Rejected'}
            onChange={handleChange}
          /> Reject
        </div>
      </div>
      
    </div>
        </div>
        )}
         <div className='datalistjobpage'> 
          <p>{formattedDate}</p>
        <strong> {localStorage.getItem('jfullname')}</strong>
        <strong> {localStorage.getItem('jemailid')}</strong>
        <strong><button onClick={toggleEditForm}>view</button></strong>
        </div>
        {isEditFormVisible && (
        <div className='viewalldata'>
          <button onClick={toggleEditForm}>X</button>
            <h1 className='text-center'>Candidate Detail</h1><hr></hr>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Fullname :{localStorage.getItem('jfullname')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Email Id :{localStorage.getItem('jemailid')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Phone : {localStorage.getItem('jphone')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>College : {localStorage.getItem('jcollege')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Cource : {localStorage.getItem('jcource')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Field : {localStorage.getItem('jfield')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Role : {localStorage.getItem('jrole')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Job Role : {localStorage.getItem('jerole')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>year : {localStorage.getItem('jyear')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>State : {localStorage.getItem('jstate')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>District : {localStorage.getItem('jdistrict')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Experience : {localStorage.getItem('jexperience')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Company : {localStorage.getItem('jcompany')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Location : {localStorage.getItem('jlocation')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Resume : {localStorage.getItem('jresume')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Letter : {localStorage.getItem('jletter')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Current Address : {localStorage.getItem('jcurrent')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Parmanent Address : {localStorage.getItem('jparmanent')}</strong>
          </div>
        </div>
        <div className='status'>
      <div className='row d-flex'>
        <h1>Status</h1>
        <hr />
        <p>Match to job description</p>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Inprocess'
            checked={status === 'Status:-Inprocess'}
            onChange={handleChange}
          /> Inprocess
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Selected'
            checked={status === 'Status:-Selected'}
            onChange={handleChange}
          /> Select
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Rejected'
            checked={status === 'Status:-Rejected'}
            onChange={handleChange}
          /> Reject
        </div>
      </div>
    </div>
        </div>
        
        )}
         <div className='datalistjobpage'> 
          <p>{formattedDate}</p>
        <strong> {localStorage.getItem('jfullname')}</strong>
        <strong> {localStorage.getItem('jemailid')}</strong>
        <strong><button onClick={toggleEditForm}>view</button></strong>
        </div>
        {isEditFormVisible && (
        <div className='viewalldata'>
          <button onClick={toggleEditForm}>X</button>
            <h1 className='text-center'>Candidate Detail</h1><hr></hr>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Fullname :{localStorage.getItem('jfullname')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Email Id :{localStorage.getItem('jemailid')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Phone : {localStorage.getItem('jphone')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>College : {localStorage.getItem('jcollege')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Cource : {localStorage.getItem('jcource')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Field : {localStorage.getItem('jfield')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Role : {localStorage.getItem('jrole')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Job Role : {localStorage.getItem('jerole')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>year : {localStorage.getItem('jyear')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>State : {localStorage.getItem('jstate')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>District : {localStorage.getItem('jdistrict')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Experience : {localStorage.getItem('jexperience')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Company : {localStorage.getItem('jcompany')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Location : {localStorage.getItem('jlocation')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Resume : {localStorage.getItem('jresume')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Letter : {localStorage.getItem('jletter')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Current Address : {localStorage.getItem('jcurrent')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Parmanent Address : {localStorage.getItem('jparmanent')}</strong>
          </div>
        </div>
        <div className='status'>
      <div className='row d-flex'>
        <h1>Status</h1>
        <hr />
        <p>Match to job description</p>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Inprocess'
            checked={status === 'Status:-Inprocess'}
            onChange={handleChange}
          /> Inprocess
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Selected'
            checked={status === 'Status:-Selected'}
            onChange={handleChange}
          /> Select
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Rejected'
            checked={status === 'Status:-Rejected'}
            onChange={handleChange}
          /> Reject
        </div>
      </div>
      
    </div>
        </div>
        )}
         <div className='datalistjobpage'> 
          <p>{formattedDate}</p>
        <strong> {localStorage.getItem('jfullname')}</strong>
        <strong> {localStorage.getItem('jemailid')}</strong>
        <strong><button onClick={toggleEditForm}>view</button></strong>
        </div>
        {isEditFormVisible && (
        <div className='viewalldata'>
          <button onClick={toggleEditForm}>X</button>
            <h1 className='text-center'>Candidate Detail</h1><hr></hr>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Fullname :{localStorage.getItem('jfullname')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Email Id :{localStorage.getItem('jemailid')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Phone : {localStorage.getItem('jphone')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>College : {localStorage.getItem('jcollege')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Cource : {localStorage.getItem('jcource')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Field : {localStorage.getItem('jfield')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Role : {localStorage.getItem('jrole')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Job Role : {localStorage.getItem('jerole')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>year : {localStorage.getItem('jyear')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>State : {localStorage.getItem('jstate')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>District : {localStorage.getItem('jdistrict')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Experience : {localStorage.getItem('jexperience')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Company : {localStorage.getItem('jcompany')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Location : {localStorage.getItem('jlocation')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Resume : {localStorage.getItem('jresume')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Letter : {localStorage.getItem('jletter')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Current Address : {localStorage.getItem('jcurrent')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Parmanent Address : {localStorage.getItem('jparmanent')}</strong>
          </div>
        </div>
        <div className='status'>
      <div className='row d-flex'>
        <h1>Status</h1>
        <hr />
        <p>Match to job description</p>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Inprocess'
            checked={status === 'Status:-Inprocess'}
            onChange={handleChange}
          /> Inprocess
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Selected'
            checked={status === 'Status:-Selected'}
            onChange={handleChange}
          /> Select
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Rejected'
            checked={status === 'Status:-Rejected'}
            onChange={handleChange}
          /> Reject
        </div>
      </div>
    </div>
        </div>
        
        )}
         <div className='datalistjobpage'> 
          <p>{formattedDate}</p>
        <strong> {localStorage.getItem('jfullname')}</strong>
        <strong> {localStorage.getItem('jemailid')}</strong>
        <strong><button onClick={toggleEditForm}>view</button></strong>
        </div>
        {isEditFormVisible && (
        <div className='viewalldata'>
          <button onClick={toggleEditForm}>X</button>
            <h1 className='text-center'>Candidate Detail</h1><hr></hr>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Fullname :{localStorage.getItem('jfullname')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Email Id :{localStorage.getItem('jemailid')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Phone : {localStorage.getItem('jphone')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>College : {localStorage.getItem('jcollege')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Cource : {localStorage.getItem('jcource')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Field : {localStorage.getItem('jfield')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Role : {localStorage.getItem('jrole')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Job Role : {localStorage.getItem('jerole')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>year : {localStorage.getItem('jyear')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>State : {localStorage.getItem('jstate')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>District : {localStorage.getItem('jdistrict')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Experience : {localStorage.getItem('jexperience')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Company : {localStorage.getItem('jcompany')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Location : {localStorage.getItem('jlocation')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Resume : {localStorage.getItem('jresume')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Letter : {localStorage.getItem('jletter')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Current Address : {localStorage.getItem('jcurrent')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Parmanent Address : {localStorage.getItem('jparmanent')}</strong>
          </div>
        </div>
        <div className='status'>
      <div className='row d-flex'>
        <h1>Status</h1>
        <hr />
        <p>Match to job description</p>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Inprocess'
            checked={status === 'Status:-Inprocess'}
            onChange={handleChange}
          /> Inprocess
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Selected'
            checked={status === 'Status:-Selected'}
            onChange={handleChange}
          /> Select
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Rejected'
            checked={status === 'Status:-Rejected'}
            onChange={handleChange}
          /> Reject
        </div>
      </div>
      
    </div>
        </div>
        )}
         <div className='datalistjobpage'> 
          <p>{formattedDate}</p>
        <strong> {localStorage.getItem('jfullname')}</strong>
        <strong> {localStorage.getItem('jemailid')}</strong>
        <strong><button onClick={toggleEditForm}>view</button></strong>
        </div>
        {isEditFormVisible && (
        <div className='viewalldata'>
          <button onClick={toggleEditForm}>X</button>
            <h1 className='text-center'>Candidate Detail</h1><hr></hr>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Fullname :{localStorage.getItem('jfullname')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Email Id :{localStorage.getItem('jemailid')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Phone : {localStorage.getItem('jphone')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>College : {localStorage.getItem('jcollege')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Cource : {localStorage.getItem('jcource')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Field : {localStorage.getItem('jfield')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Role : {localStorage.getItem('jrole')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Job Role : {localStorage.getItem('jerole')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>year : {localStorage.getItem('jyear')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>State : {localStorage.getItem('jstate')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>District : {localStorage.getItem('jdistrict')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Experience : {localStorage.getItem('jexperience')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Company : {localStorage.getItem('jcompany')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Location : {localStorage.getItem('jlocation')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Resume : {localStorage.getItem('jresume')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Letter : {localStorage.getItem('jletter')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Current Address : {localStorage.getItem('jcurrent')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Parmanent Address : {localStorage.getItem('jparmanent')}</strong>
          </div>
        </div>
        <div className='status'>
      <div className='row d-flex'>
        <h1>Status</h1>
        <hr />
        <p>Match to job description</p>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Inprocess'
            checked={status === 'Status:-Inprocess'}
            onChange={handleChange}
          /> Inprocess
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Selected'
            checked={status === 'Status:-Selected'}
            onChange={handleChange}
          /> Select
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Rejected'
            checked={status === 'Status:-Rejected'}
            onChange={handleChange}
          /> Reject
        </div>
      </div>
    </div>
        </div>
        
        )}
         <div className='datalistjobpage'> 
          <p>{formattedDate}</p>
        <strong> {localStorage.getItem('jfullname')}</strong>
        <strong> {localStorage.getItem('jemailid')}</strong>
        <strong><button onClick={toggleEditForm}>view</button></strong>
        </div>
        {isEditFormVisible && (
        <div className='viewalldata'>
          <button onClick={toggleEditForm}>X</button>
            <h1 className='text-center'>Candidate Detail</h1><hr></hr>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Fullname :{localStorage.getItem('jfullname')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Email Id :{localStorage.getItem('jemailid')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Phone : {localStorage.getItem('jphone')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>College : {localStorage.getItem('jcollege')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Cource : {localStorage.getItem('jcource')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Field : {localStorage.getItem('jfield')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Role : {localStorage.getItem('jrole')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Job Role : {localStorage.getItem('jerole')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>year : {localStorage.getItem('jyear')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>State : {localStorage.getItem('jstate')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>District : {localStorage.getItem('jdistrict')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Experience : {localStorage.getItem('jexperience')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Company : {localStorage.getItem('jcompany')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Location : {localStorage.getItem('jlocation')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Resume : {localStorage.getItem('jresume')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Letter : {localStorage.getItem('jletter')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Current Address : {localStorage.getItem('jcurrent')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Parmanent Address : {localStorage.getItem('jparmanent')}</strong>
          </div>
        </div>
        <div className='status'>
      <div className='row d-flex'>
        <h1>Status</h1>
        <hr />
        <p>Match to job description</p>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Inprocess'
            checked={status === 'Status:-Inprocess'}
            onChange={handleChange}
          /> Inprocess
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Selected'
            checked={status === 'Status:-Selected'}
            onChange={handleChange}
          /> Select
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Rejected'
            checked={status === 'Status:-Rejected'}
            onChange={handleChange}
          /> Reject
        </div>
      </div>
      
    </div>
        </div>
        )}
         <div className='datalistjobpage'> 
          <p>{formattedDate}</p>
        <strong> {localStorage.getItem('jfullname')}</strong>
        <strong> {localStorage.getItem('jemailid')}</strong>
        <strong><button onClick={toggleEditForm}>view</button></strong>
        </div>
        {isEditFormVisible && (
        <div className='viewalldata'>
          <button onClick={toggleEditForm}>X</button>
            <h1 className='text-center'>Candidate Detail</h1><hr></hr>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Fullname :{localStorage.getItem('jfullname')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Email Id :{localStorage.getItem('jemailid')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Phone : {localStorage.getItem('jphone')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>College : {localStorage.getItem('jcollege')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Cource : {localStorage.getItem('jcource')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Field : {localStorage.getItem('jfield')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Role : {localStorage.getItem('jrole')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Job Role : {localStorage.getItem('jerole')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>year : {localStorage.getItem('jyear')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>State : {localStorage.getItem('jstate')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>District : {localStorage.getItem('jdistrict')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Experience : {localStorage.getItem('jexperience')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Company : {localStorage.getItem('jcompany')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Location : {localStorage.getItem('jlocation')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Resume : {localStorage.getItem('jresume')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Letter : {localStorage.getItem('jletter')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Current Address : {localStorage.getItem('jcurrent')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Parmanent Address : {localStorage.getItem('jparmanent')}</strong>
          </div>
        </div>
        <div className='status'>
      <div className='row d-flex'>
        <h1>Status</h1>
        <hr />
        <p>Match to job description</p>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Inprocess'
            checked={status === 'Status:-Inprocess'}
            onChange={handleChange}
          /> Inprocess
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Selected'
            checked={status === 'Status:-Selected'}
            onChange={handleChange}
          /> Select
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Rejected'
            checked={status === 'Status:-Rejected'}
            onChange={handleChange}
          /> Reject
        </div>
      </div>
    </div>
        </div>
        
        )}
         <div className='datalistjobpage'> 
          <p>{formattedDate}</p>
        <strong> {localStorage.getItem('jfullname')}</strong>
        <strong> {localStorage.getItem('jemailid')}</strong>
        <strong><button onClick={toggleEditForm}>view</button></strong>
        </div>
        {isEditFormVisible && (
        <div className='viewalldata'>
          <button onClick={toggleEditForm}>X</button>
            <h1 className='text-center'>Candidate Detail</h1><hr></hr>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Fullname :{localStorage.getItem('jfullname')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Email Id :{localStorage.getItem('jemailid')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Phone : {localStorage.getItem('jphone')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>College : {localStorage.getItem('jcollege')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Cource : {localStorage.getItem('jcource')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Field : {localStorage.getItem('jfield')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Role : {localStorage.getItem('jrole')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Job Role : {localStorage.getItem('jerole')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>year : {localStorage.getItem('jyear')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>State : {localStorage.getItem('jstate')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>District : {localStorage.getItem('jdistrict')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Experience : {localStorage.getItem('jexperience')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Company : {localStorage.getItem('jcompany')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Location : {localStorage.getItem('jlocation')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Resume : {localStorage.getItem('jresume')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Letter : {localStorage.getItem('jletter')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Current Address : {localStorage.getItem('jcurrent')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Parmanent Address : {localStorage.getItem('jparmanent')}</strong>
          </div>
        </div>
        <div className='status'>
      <div className='row d-flex'>
        <h1>Status</h1>
        <hr />
        <p>Match to job description</p>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Inprocess'
            checked={status === 'Status:-Inprocess'}
            onChange={handleChange}
          /> Inprocess
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Selected'
            checked={status === 'Status:-Selected'}
            onChange={handleChange}
          /> Select
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Rejected'
            checked={status === 'Status:-Rejected'}
            onChange={handleChange}
          /> Reject
        </div>
      </div>
      
    </div>
        </div>
        )}
         <div className='datalistjobpage'> 
          <p>{formattedDate}</p>
        <strong> {localStorage.getItem('jfullname')}</strong>
        <strong> {localStorage.getItem('jemailid')}</strong>
        <strong><button onClick={toggleEditForm}>view</button></strong>
        </div>
        {isEditFormVisible && (
        <div className='viewalldata'>
          <button onClick={toggleEditForm}>X</button>
            <h1 className='text-center'>Candidate Detail</h1><hr></hr>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Fullname :{localStorage.getItem('jfullname')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Email Id :{localStorage.getItem('jemailid')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Phone : {localStorage.getItem('jphone')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>College : {localStorage.getItem('jcollege')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Cource : {localStorage.getItem('jcource')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Field : {localStorage.getItem('jfield')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Role : {localStorage.getItem('jrole')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Job Role : {localStorage.getItem('jerole')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>year : {localStorage.getItem('jyear')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>State : {localStorage.getItem('jstate')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>District : {localStorage.getItem('jdistrict')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Experience : {localStorage.getItem('jexperience')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Company : {localStorage.getItem('jcompany')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Location : {localStorage.getItem('jlocation')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Resume : {localStorage.getItem('jresume')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Letter : {localStorage.getItem('jletter')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Current Address : {localStorage.getItem('jcurrent')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Parmanent Address : {localStorage.getItem('jparmanent')}</strong>
          </div>
        </div>
        <div className='status'>
      <div className='row d-flex'>
        <h1>Status</h1>
        <hr />
        <p>Match to job description</p>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Inprocess'
            checked={status === 'Status:-Inprocess'}
            onChange={handleChange}
          /> Inprocess
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Selected'
            checked={status === 'Status:-Selected'}
            onChange={handleChange}
          /> Select
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Rejected'
            checked={status === 'Status:-Rejected'}
            onChange={handleChange}
          /> Reject
        </div>
      </div>
    </div>
        </div>
        
        )}
         <div className='datalistjobpage'> 
          <p>{formattedDate}</p>
        <strong> {localStorage.getItem('jfullname')}</strong>
        <strong> {localStorage.getItem('jemailid')}</strong>
        <strong><button onClick={toggleEditForm}>view</button></strong>
        </div>
        {isEditFormVisible && (
        <div className='viewalldata'>
          <button onClick={toggleEditForm}>X</button>
            <h1 className='text-center'>Candidate Detail</h1><hr></hr>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Fullname :{localStorage.getItem('jfullname')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Email Id :{localStorage.getItem('jemailid')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Phone : {localStorage.getItem('jphone')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>College : {localStorage.getItem('jcollege')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Cource : {localStorage.getItem('jcource')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Field : {localStorage.getItem('jfield')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Role : {localStorage.getItem('jrole')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Job Role : {localStorage.getItem('jerole')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>year : {localStorage.getItem('jyear')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>State : {localStorage.getItem('jstate')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>District : {localStorage.getItem('jdistrict')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Experience : {localStorage.getItem('jexperience')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Company : {localStorage.getItem('jcompany')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Location : {localStorage.getItem('jlocation')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Resume : {localStorage.getItem('jresume')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Letter : {localStorage.getItem('jletter')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Current Address : {localStorage.getItem('jcurrent')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Parmanent Address : {localStorage.getItem('jparmanent')}</strong>
          </div>
        </div>
        <div className='status'>
      <div className='row d-flex'>
        <h1>Status</h1>
        <hr />
        <p>Match to job description</p>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Inprocess'
            checked={status === 'Status:-Inprocess'}
            onChange={handleChange}
          /> Inprocess
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Selected'
            checked={status === 'Status:-Selected'}
            onChange={handleChange}
          /> Select
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Rejected'
            checked={status === 'Status:-Rejected'}
            onChange={handleChange}
          /> Reject
        </div>
      </div>
      
    </div>
        </div>
        )}
         <div className='datalistjobpage'> 
          <p>{formattedDate}</p>
        <strong> {localStorage.getItem('jfullname')}</strong>
        <strong> {localStorage.getItem('jemailid')}</strong>
        <strong><button onClick={toggleEditForm}>view</button></strong>
        </div>
        {isEditFormVisible && (
        <div className='viewalldata'>
          <button onClick={toggleEditForm}>X</button>
            <h1 className='text-center'>Candidate Detail</h1><hr></hr>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Fullname :{localStorage.getItem('jfullname')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Email Id :{localStorage.getItem('jemailid')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Phone : {localStorage.getItem('jphone')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>College : {localStorage.getItem('jcollege')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Cource : {localStorage.getItem('jcource')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Field : {localStorage.getItem('jfield')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Role : {localStorage.getItem('jrole')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Job Role : {localStorage.getItem('jerole')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>year : {localStorage.getItem('jyear')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>State : {localStorage.getItem('jstate')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>District : {localStorage.getItem('jdistrict')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Experience : {localStorage.getItem('jexperience')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Company : {localStorage.getItem('jcompany')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Location : {localStorage.getItem('jlocation')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Resume : {localStorage.getItem('jresume')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Letter : {localStorage.getItem('jletter')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Current Address : {localStorage.getItem('jcurrent')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Parmanent Address : {localStorage.getItem('jparmanent')}</strong>
          </div>
        </div>
        <div className='status'>
      <div className='row d-flex'>
        <h1>Status</h1>
        <hr />
        <p>Match to job description</p>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Inprocess'
            checked={status === 'Status:-Inprocess'}
            onChange={handleChange}
          /> Inprocess
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Selected'
            checked={status === 'Status:-Selected'}
            onChange={handleChange}
          /> Select
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Rejected'
            checked={status === 'Status:-Rejected'}
            onChange={handleChange}
          /> Reject
        </div>
      </div>
    </div>
        </div>
        
        )}
         <div className='datalistjobpage'> 
          <p>{formattedDate}</p>
        <strong> {localStorage.getItem('jfullname')}</strong>
        <strong> {localStorage.getItem('jemailid')}</strong>
        <strong><button onClick={toggleEditForm}>view</button></strong>
        </div>
        {isEditFormVisible && (
        <div className='viewalldata'>
          <button onClick={toggleEditForm}>X</button>
            <h1 className='text-center'>Candidate Detail</h1><hr></hr>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Fullname :{localStorage.getItem('jfullname')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Email Id :{localStorage.getItem('jemailid')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Phone : {localStorage.getItem('jphone')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>College : {localStorage.getItem('jcollege')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Cource : {localStorage.getItem('jcource')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Field : {localStorage.getItem('jfield')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Role : {localStorage.getItem('jrole')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Job Role : {localStorage.getItem('jerole')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>year : {localStorage.getItem('jyear')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>State : {localStorage.getItem('jstate')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>District : {localStorage.getItem('jdistrict')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Experience : {localStorage.getItem('jexperience')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Company : {localStorage.getItem('jcompany')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Location : {localStorage.getItem('jlocation')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Resume : {localStorage.getItem('jresume')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Letter : {localStorage.getItem('jletter')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Current Address : {localStorage.getItem('jcurrent')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Parmanent Address : {localStorage.getItem('jparmanent')}</strong>
          </div>
        </div>
        <div className='status'>
      <div className='row d-flex'>
        <h1>Status</h1>
        <hr />
        <p>Match to job description</p>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Inprocess'
            checked={status === 'Status:-Inprocess'}
            onChange={handleChange}
          /> Inprocess
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Selected'
            checked={status === 'Status:-Selected'}
            onChange={handleChange}
          /> Select
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Rejected'
            checked={status === 'Status:-Rejected'}
            onChange={handleChange}
          /> Reject
        </div>
      </div>
      
    </div>
        </div>
        )}
         <div className='datalistjobpage'> 
          <p>{formattedDate}</p>
        <strong> {localStorage.getItem('jfullname')}</strong>
        <strong> {localStorage.getItem('jemailid')}</strong>
        <strong><button onClick={toggleEditForm}>view</button></strong>
        </div>
        {isEditFormVisible && (
        <div className='viewalldata'>
          <button onClick={toggleEditForm}>X</button>
            <h1 className='text-center'>Candidate Detail</h1><hr></hr>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Fullname :{localStorage.getItem('jfullname')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Email Id :{localStorage.getItem('jemailid')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Phone : {localStorage.getItem('jphone')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>College : {localStorage.getItem('jcollege')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Cource : {localStorage.getItem('jcource')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Field : {localStorage.getItem('jfield')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Role : {localStorage.getItem('jrole')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Job Role : {localStorage.getItem('jerole')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>year : {localStorage.getItem('jyear')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>State : {localStorage.getItem('jstate')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>District : {localStorage.getItem('jdistrict')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Experience : {localStorage.getItem('jexperience')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Company : {localStorage.getItem('jcompany')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Location : {localStorage.getItem('jlocation')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Resume : {localStorage.getItem('jresume')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Letter : {localStorage.getItem('jletter')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Current Address : {localStorage.getItem('jcurrent')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Parmanent Address : {localStorage.getItem('jparmanent')}</strong>
          </div>
        </div>
        <div className='status'>
      <div className='row d-flex'>
        <h1>Status</h1>
        <hr />
        <p>Match to job description</p>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Inprocess'
            checked={status === 'Status:-Inprocess'}
            onChange={handleChange}
          /> Inprocess
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Selected'
            checked={status === 'Status:-Selected'}
            onChange={handleChange}
          /> Select
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Rejected'
            checked={status === 'Status:-Rejected'}
            onChange={handleChange}
          /> Reject
        </div>
      </div>
    </div>
        </div>
        
        )}
         <div className='datalistjobpage'> 
          <p>{formattedDate}</p>
        <strong> {localStorage.getItem('jfullname')}</strong>
        <strong> {localStorage.getItem('jemailid')}</strong>
        <strong><button onClick={toggleEditForm}>view</button></strong>
        </div>
        {isEditFormVisible && (
        <div className='viewalldata'>
          <button onClick={toggleEditForm}>X</button>
            <h1 className='text-center'>Candidate Detail</h1><hr></hr>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Fullname :{localStorage.getItem('jfullname')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Email Id :{localStorage.getItem('jemailid')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Phone : {localStorage.getItem('jphone')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>College : {localStorage.getItem('jcollege')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Cource : {localStorage.getItem('jcource')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Field : {localStorage.getItem('jfield')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Role : {localStorage.getItem('jrole')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Job Role : {localStorage.getItem('jerole')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>year : {localStorage.getItem('jyear')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>State : {localStorage.getItem('jstate')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>District : {localStorage.getItem('jdistrict')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Experience : {localStorage.getItem('jexperience')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Company : {localStorage.getItem('jcompany')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Location : {localStorage.getItem('jlocation')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Resume : {localStorage.getItem('jresume')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Letter : {localStorage.getItem('jletter')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Current Address : {localStorage.getItem('jcurrent')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Parmanent Address : {localStorage.getItem('jparmanent')}</strong>
          </div>
        </div>
        <div className='status'>
      <div className='row d-flex'>
        <h1>Status</h1>
        <hr />
        <p>Match to job description</p>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Inprocess'
            checked={status === 'Status:-Inprocess'}
            onChange={handleChange}
          /> Inprocess
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Selected'
            checked={status === 'Status:-Selected'}
            onChange={handleChange}
          /> Select
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Rejected'
            checked={status === 'Status:-Rejected'}
            onChange={handleChange}
          /> Reject
        </div>
      </div>
      
    </div>
        </div>
        )}
         <div className='datalistjobpage'> 
          <p>{formattedDate}</p>
        <strong> {localStorage.getItem('jfullname')}</strong>
        <strong> {localStorage.getItem('jemailid')}</strong>
        <strong><button onClick={toggleEditForm}>view</button></strong>
        </div>
        {isEditFormVisible && (
        <div className='viewalldata'>
          <button onClick={toggleEditForm}>X</button>
            <h1 className='text-center'>Candidate Detail</h1><hr></hr>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Fullname :{localStorage.getItem('jfullname')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Email Id :{localStorage.getItem('jemailid')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Phone : {localStorage.getItem('jphone')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>College : {localStorage.getItem('jcollege')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Cource : {localStorage.getItem('jcource')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Field : {localStorage.getItem('jfield')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Role : {localStorage.getItem('jrole')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Job Role : {localStorage.getItem('jerole')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>year : {localStorage.getItem('jyear')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>State : {localStorage.getItem('jstate')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>District : {localStorage.getItem('jdistrict')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Experience : {localStorage.getItem('jexperience')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Company : {localStorage.getItem('jcompany')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Location : {localStorage.getItem('jlocation')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Resume : {localStorage.getItem('jresume')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Letter : {localStorage.getItem('jletter')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Current Address : {localStorage.getItem('jcurrent')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Parmanent Address : {localStorage.getItem('jparmanent')}</strong>
          </div>
        </div>
        <div className='status'>
      <div className='row d-flex'>
        <h1>Status</h1>
        <hr />
        <p>Match to job description</p>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Inprocess'
            checked={status === 'Status:-Inprocess'}
            onChange={handleChange}
          /> Inprocess
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Selected'
            checked={status === 'Status:-Selected'}
            onChange={handleChange}
          /> Select
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Rejected'
            checked={status === 'Status:-Rejected'}
            onChange={handleChange}
          /> Reject
        </div>
      </div>
    </div>
        </div>
        
        )}
         <div className='datalistjobpage'> 
          <p>{formattedDate}</p>
        <strong> {localStorage.getItem('jfullname')}</strong>
        <strong> {localStorage.getItem('jemailid')}</strong>
        <strong><button onClick={toggleEditForm}>view</button></strong>
        </div>
        {isEditFormVisible && (
        <div className='viewalldata'>
          <button onClick={toggleEditForm}>X</button>
            <h1 className='text-center'>Candidate Detail</h1><hr></hr>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Fullname :{localStorage.getItem('jfullname')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Email Id :{localStorage.getItem('jemailid')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Phone : {localStorage.getItem('jphone')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>College : {localStorage.getItem('jcollege')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Cource : {localStorage.getItem('jcource')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Field : {localStorage.getItem('jfield')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Role : {localStorage.getItem('jrole')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Job Role : {localStorage.getItem('jerole')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>year : {localStorage.getItem('jyear')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>State : {localStorage.getItem('jstate')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>District : {localStorage.getItem('jdistrict')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Experience : {localStorage.getItem('jexperience')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Company : {localStorage.getItem('jcompany')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Location : {localStorage.getItem('jlocation')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Resume : {localStorage.getItem('jresume')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Letter : {localStorage.getItem('jletter')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Current Address : {localStorage.getItem('jcurrent')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Parmanent Address : {localStorage.getItem('jparmanent')}</strong>
          </div>
        </div>
        <div className='status'>
      <div className='row d-flex'>
        <h1>Status</h1>
        <hr />
        <p>Match to job description</p>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Inprocess'
            checked={status === 'Status:-Inprocess'}
            onChange={handleChange}
          /> Inprocess
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Selected'
            checked={status === 'Status:-Selected'}
            onChange={handleChange}
          /> Select
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Rejected'
            checked={status === 'Status:-Rejected'}
            onChange={handleChange}
          /> Reject
        </div>
      </div>
      
    </div>
        </div>
        )}
         <div className='datalistjobpage'> 
          <p>{formattedDate}</p>
        <strong> {localStorage.getItem('jfullname')}</strong>
        <strong> {localStorage.getItem('jemailid')}</strong>
        <strong><button onClick={toggleEditForm}>view</button></strong>
        </div>
        {isEditFormVisible && (
        <div className='viewalldata'>
          <button onClick={toggleEditForm}>X</button>
            <h1 className='text-center'>Candidate Detail</h1><hr></hr>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Fullname :{localStorage.getItem('jfullname')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Email Id :{localStorage.getItem('jemailid')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Phone : {localStorage.getItem('jphone')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>College : {localStorage.getItem('jcollege')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Cource : {localStorage.getItem('jcource')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Field : {localStorage.getItem('jfield')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Role : {localStorage.getItem('jrole')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Job Role : {localStorage.getItem('jerole')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>year : {localStorage.getItem('jyear')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>State : {localStorage.getItem('jstate')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>District : {localStorage.getItem('jdistrict')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Experience : {localStorage.getItem('jexperience')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Company : {localStorage.getItem('jcompany')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Location : {localStorage.getItem('jlocation')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Resume : {localStorage.getItem('jresume')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Letter : {localStorage.getItem('jletter')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Current Address : {localStorage.getItem('jcurrent')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Parmanent Address : {localStorage.getItem('jparmanent')}</strong>
          </div>
        </div>
        <div className='status'>
      <div className='row d-flex'>
        <h1>Status</h1>
        <hr />
        <p>Match to job description</p>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Inprocess'
            checked={status === 'Status:-Inprocess'}
            onChange={handleChange}
          /> Inprocess
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Selected'
            checked={status === 'Status:-Selected'}
            onChange={handleChange}
          /> Select
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Rejected'
            checked={status === 'Status:-Rejected'}
            onChange={handleChange}
          /> Reject
        </div>
      </div>
    </div>
        </div>
        
        )}
         <div className='datalistjobpage'> 
          <p>{formattedDate}</p>
        <strong> {localStorage.getItem('jfullname')}</strong>
        <strong> {localStorage.getItem('jemailid')}</strong>
        <strong><button onClick={toggleEditForm}>view</button></strong>
        </div>
        {isEditFormVisible && (
        <div className='viewalldata'>
          <button onClick={toggleEditForm}>X</button>
            <h1 className='text-center'>Candidate Detail</h1><hr></hr>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Fullname :{localStorage.getItem('jfullname')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Email Id :{localStorage.getItem('jemailid')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Phone : {localStorage.getItem('jphone')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>College : {localStorage.getItem('jcollege')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Cource : {localStorage.getItem('jcource')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Field : {localStorage.getItem('jfield')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Role : {localStorage.getItem('jrole')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Job Role : {localStorage.getItem('jerole')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>year : {localStorage.getItem('jyear')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>State : {localStorage.getItem('jstate')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>District : {localStorage.getItem('jdistrict')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Experience : {localStorage.getItem('jexperience')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Company : {localStorage.getItem('jcompany')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Location : {localStorage.getItem('jlocation')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Resume : {localStorage.getItem('jresume')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Letter : {localStorage.getItem('jletter')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Current Address : {localStorage.getItem('jcurrent')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Parmanent Address : {localStorage.getItem('jparmanent')}</strong>
          </div>
        </div>
        <div className='status'>
      <div className='row d-flex'>
        <h1>Status</h1>
        <hr />
        <p>Match to job description</p>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Inprocess'
            checked={status === 'Status:-Inprocess'}
            onChange={handleChange}
          /> Inprocess
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Selected'
            checked={status === 'Status:-Selected'}
            onChange={handleChange}
          /> Select
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Rejected'
            checked={status === 'Status:-Rejected'}
            onChange={handleChange}
          /> Reject
        </div>
      </div>
      
    </div>
        </div>
        )}
         <div className='datalistjobpage'> 
          <p>{formattedDate}</p>
        <strong> {localStorage.getItem('jfullname')}</strong>
        <strong> {localStorage.getItem('jemailid')}</strong>
        <strong><button onClick={toggleEditForm}>view</button></strong>
        </div>
        {isEditFormVisible && (
        <div className='viewalldata'>
          <button onClick={toggleEditForm}>X</button>
            <h1 className='text-center'>Candidate Detail</h1><hr></hr>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Fullname :{localStorage.getItem('jfullname')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Email Id :{localStorage.getItem('jemailid')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Phone : {localStorage.getItem('jphone')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>College : {localStorage.getItem('jcollege')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Cource : {localStorage.getItem('jcource')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Field : {localStorage.getItem('jfield')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Role : {localStorage.getItem('jrole')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Job Role : {localStorage.getItem('jerole')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>year : {localStorage.getItem('jyear')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>State : {localStorage.getItem('jstate')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>District : {localStorage.getItem('jdistrict')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Experience : {localStorage.getItem('jexperience')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Company : {localStorage.getItem('jcompany')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Location : {localStorage.getItem('jlocation')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Resume : {localStorage.getItem('jresume')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Letter : {localStorage.getItem('jletter')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Current Address : {localStorage.getItem('jcurrent')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Parmanent Address : {localStorage.getItem('jparmanent')}</strong>
          </div>
        </div>
        <div className='status'>
      <div className='row d-flex'>
        <h1>Status</h1>
        <hr />
        <p>Match to job description</p>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Inprocess'
            checked={status === 'Status:-Inprocess'}
            onChange={handleChange}
          /> Inprocess
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Selected'
            checked={status === 'Status:-Selected'}
            onChange={handleChange}
          /> Select
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Rejected'
            checked={status === 'Status:-Rejected'}
            onChange={handleChange}
          /> Reject
        </div>
      </div>
    </div>
        </div>
        
        )}
         <div className='datalistjobpage'> 
          <p>{formattedDate}</p>
        <strong> {localStorage.getItem('jfullname')}</strong>
        <strong> {localStorage.getItem('jemailid')}</strong>
        <strong><button onClick={toggleEditForm}>view</button></strong>
        </div>
        {isEditFormVisible && (
        <div className='viewalldata'>
          <button onClick={toggleEditForm}>X</button>
            <h1 className='text-center'>Candidate Detail</h1><hr></hr>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Fullname :{localStorage.getItem('jfullname')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Email Id :{localStorage.getItem('jemailid')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Phone : {localStorage.getItem('jphone')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>College : {localStorage.getItem('jcollege')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Cource : {localStorage.getItem('jcource')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Field : {localStorage.getItem('jfield')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Role : {localStorage.getItem('jrole')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Job Role : {localStorage.getItem('jerole')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>year : {localStorage.getItem('jyear')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>State : {localStorage.getItem('jstate')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>District : {localStorage.getItem('jdistrict')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Experience : {localStorage.getItem('jexperience')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Company : {localStorage.getItem('jcompany')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Location : {localStorage.getItem('jlocation')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Resume : {localStorage.getItem('jresume')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Letter : {localStorage.getItem('jletter')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Current Address : {localStorage.getItem('jcurrent')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Parmanent Address : {localStorage.getItem('jparmanent')}</strong>
          </div>
        </div>
        <div className='status'>
      <div className='row d-flex'>
        <h1>Status</h1>
        <hr />
        <p>Match to job description</p>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Inprocess'
            checked={status === 'Status:-Inprocess'}
            onChange={handleChange}
          /> Inprocess
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Selected'
            checked={status === 'Status:-Selected'}
            onChange={handleChange}
          /> Select
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Rejected'
            checked={status === 'Status:-Rejected'}
            onChange={handleChange}
          /> Reject
        </div>
      </div>
      
    </div>
        </div>
        )}
         <div className='datalistjobpage'> 
          <p>{formattedDate}</p>
        <strong> {localStorage.getItem('jfullname')}</strong>
        <strong> {localStorage.getItem('jemailid')}</strong>
        <strong><button onClick={toggleEditForm}>view</button></strong>
        </div>
        {isEditFormVisible && (
        <div className='viewalldata'>
          <button onClick={toggleEditForm}>X</button>
            <h1 className='text-center'>Candidate Detail</h1><hr></hr>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Fullname :{localStorage.getItem('jfullname')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Email Id :{localStorage.getItem('jemailid')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Phone : {localStorage.getItem('jphone')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>College : {localStorage.getItem('jcollege')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Cource : {localStorage.getItem('jcource')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Field : {localStorage.getItem('jfield')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Role : {localStorage.getItem('jrole')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Job Role : {localStorage.getItem('jerole')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>year : {localStorage.getItem('jyear')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>State : {localStorage.getItem('jstate')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>District : {localStorage.getItem('jdistrict')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Experience : {localStorage.getItem('jexperience')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Company : {localStorage.getItem('jcompany')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Location : {localStorage.getItem('jlocation')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Resume : {localStorage.getItem('jresume')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Letter : {localStorage.getItem('jletter')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Current Address : {localStorage.getItem('jcurrent')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Parmanent Address : {localStorage.getItem('jparmanent')}</strong>
          </div>
        </div>
        <div className='status'>
      <div className='row d-flex'>
        <h1>Status</h1>
        <hr />
        <p>Match to job description</p>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Inprocess'
            checked={status === 'Status:-Inprocess'}
            onChange={handleChange}
          /> Inprocess
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Selected'
            checked={status === 'Status:-Selected'}
            onChange={handleChange}
          /> Select
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Rejected'
            checked={status === 'Status:-Rejected'}
            onChange={handleChange}
          /> Reject
        </div>
      </div>
    </div>
        </div>
        
        )}
         <div className='datalistjobpage'> 
          <p>{formattedDate}</p>
        <strong> {localStorage.getItem('jfullname')}</strong>
        <strong> {localStorage.getItem('jemailid')}</strong>
        <strong><button onClick={toggleEditForm}>view</button></strong>
        </div>
        {isEditFormVisible && (
        <div className='viewalldata'>
          <button onClick={toggleEditForm}>X</button>
            <h1 className='text-center'>Candidate Detail</h1><hr></hr>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Fullname :{localStorage.getItem('jfullname')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Email Id :{localStorage.getItem('jemailid')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Phone : {localStorage.getItem('jphone')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>College : {localStorage.getItem('jcollege')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Cource : {localStorage.getItem('jcource')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Field : {localStorage.getItem('jfield')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Role : {localStorage.getItem('jrole')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Job Role : {localStorage.getItem('jerole')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>year : {localStorage.getItem('jyear')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>State : {localStorage.getItem('jstate')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>District : {localStorage.getItem('jdistrict')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Experience : {localStorage.getItem('jexperience')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Company : {localStorage.getItem('jcompany')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Location : {localStorage.getItem('jlocation')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Resume : {localStorage.getItem('jresume')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Letter : {localStorage.getItem('jletter')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Current Address : {localStorage.getItem('jcurrent')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Parmanent Address : {localStorage.getItem('jparmanent')}</strong>
          </div>
        </div>
        <div className='status'>
      <div className='row d-flex'>
        <h1>Status</h1>
        <hr />
        <p>Match to job description</p>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Inprocess'
            checked={status === 'Status:-Inprocess'}
            onChange={handleChange}
          /> Inprocess
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Selected'
            checked={status === 'Status:-Selected'}
            onChange={handleChange}
          /> Select
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Rejected'
            checked={status === 'Status:-Rejected'}
            onChange={handleChange}
          /> Reject
        </div>
      </div>
      
    </div>
        </div>
        )}
         <div className='datalistjobpage'> 
          <p>{formattedDate}</p>
        <strong> {localStorage.getItem('jfullname')}</strong>
        <strong> {localStorage.getItem('jemailid')}</strong>
        <strong><button onClick={toggleEditForm}>view</button></strong>
        </div>
        {isEditFormVisible && (
        <div className='viewalldata'>
          <button onClick={toggleEditForm}>X</button>
            <h1 className='text-center'>Candidate Detail</h1><hr></hr>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Fullname :{localStorage.getItem('jfullname')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Email Id :{localStorage.getItem('jemailid')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Phone : {localStorage.getItem('jphone')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>College : {localStorage.getItem('jcollege')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Cource : {localStorage.getItem('jcource')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Field : {localStorage.getItem('jfield')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Role : {localStorage.getItem('jrole')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Job Role : {localStorage.getItem('jerole')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>year : {localStorage.getItem('jyear')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>State : {localStorage.getItem('jstate')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>District : {localStorage.getItem('jdistrict')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Experience : {localStorage.getItem('jexperience')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Company : {localStorage.getItem('jcompany')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Location : {localStorage.getItem('jlocation')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Resume : {localStorage.getItem('jresume')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Letter : {localStorage.getItem('jletter')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Current Address : {localStorage.getItem('jcurrent')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Parmanent Address : {localStorage.getItem('jparmanent')}</strong>
          </div>
        </div>
        <div className='status'>
      <div className='row d-flex'>
        <h1>Status</h1>
        <hr />
        <p>Match to job description</p>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Inprocess'
            checked={status === 'Status:-Inprocess'}
            onChange={handleChange}
          /> Inprocess
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Selected'
            checked={status === 'Status:-Selected'}
            onChange={handleChange}
          /> Select
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Rejected'
            checked={status === 'Status:-Rejected'}
            onChange={handleChange}
          /> Reject
        </div>
      </div>
    </div>
        </div>
        
        )}
         <div className='datalistjobpage'> 
          <p>{formattedDate}</p>
        <strong> {localStorage.getItem('jfullname')}</strong>
        <strong> {localStorage.getItem('jemailid')}</strong>
        <strong><button onClick={toggleEditForm}>view</button></strong>
        </div>
        {isEditFormVisible && (
        <div className='viewalldata'>
          <button onClick={toggleEditForm}>X</button>
            <h1 className='text-center'>Candidate Detail</h1><hr></hr>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Fullname :{localStorage.getItem('jfullname')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Email Id :{localStorage.getItem('jemailid')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Phone : {localStorage.getItem('jphone')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>College : {localStorage.getItem('jcollege')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Cource : {localStorage.getItem('jcource')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Field : {localStorage.getItem('jfield')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Role : {localStorage.getItem('jrole')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Job Role : {localStorage.getItem('jerole')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>year : {localStorage.getItem('jyear')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>State : {localStorage.getItem('jstate')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>District : {localStorage.getItem('jdistrict')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Experience : {localStorage.getItem('jexperience')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Company : {localStorage.getItem('jcompany')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Location : {localStorage.getItem('jlocation')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Resume : {localStorage.getItem('jresume')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Letter : {localStorage.getItem('jletter')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Current Address : {localStorage.getItem('jcurrent')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Parmanent Address : {localStorage.getItem('jparmanent')}</strong>
          </div>
        </div>
        <div className='status'>
      <div className='row d-flex'>
        <h1>Status</h1>
        <hr />
        <p>Match to job description</p>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Inprocess'
            checked={status === 'Status:-Inprocess'}
            onChange={handleChange}
          /> Inprocess
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Selected'
            checked={status === 'Status:-Selected'}
            onChange={handleChange}
          /> Select
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Rejected'
            checked={status === 'Status:-Rejected'}
            onChange={handleChange}
          /> Reject
        </div>
      </div>
      
    </div>
        </div>
        )}
         <div className='datalistjobpage'> 
          <p>{formattedDate}</p>
        <strong> {localStorage.getItem('jfullname')}</strong>
        <strong> {localStorage.getItem('jemailid')}</strong>
        <strong><button onClick={toggleEditForm}>view</button></strong>
        </div>
        {isEditFormVisible && (
        <div className='viewalldata'>
          <button onClick={toggleEditForm}>X</button>
            <h1 className='text-center'>Candidate Detail</h1><hr></hr>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Fullname :{localStorage.getItem('jfullname')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Email Id :{localStorage.getItem('jemailid')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Phone : {localStorage.getItem('jphone')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>College : {localStorage.getItem('jcollege')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Cource : {localStorage.getItem('jcource')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Field : {localStorage.getItem('jfield')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Role : {localStorage.getItem('jrole')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Job Role : {localStorage.getItem('jerole')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>year : {localStorage.getItem('jyear')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>State : {localStorage.getItem('jstate')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>District : {localStorage.getItem('jdistrict')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Experience : {localStorage.getItem('jexperience')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Company : {localStorage.getItem('jcompany')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Location : {localStorage.getItem('jlocation')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Resume : {localStorage.getItem('jresume')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Letter : {localStorage.getItem('jletter')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Current Address : {localStorage.getItem('jcurrent')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Parmanent Address : {localStorage.getItem('jparmanent')}</strong>
          </div>
        </div>
        <div className='status'>
      <div className='row d-flex'>
        <h1>Status</h1>
        <hr />
        <p>Match to job description</p>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Inprocess'
            checked={status === 'Status:-Inprocess'}
            onChange={handleChange}
          /> Inprocess
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Selected'
            checked={status === 'Status:-Selected'}
            onChange={handleChange}
          /> Select
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Rejected'
            checked={status === 'Status:-Rejected'}
            onChange={handleChange}
          /> Reject
        </div>
      </div>
    </div>
        </div>
        
        )}
         <div className='datalistjobpage'> 
          <p>{formattedDate}</p>
        <strong> {localStorage.getItem('jfullname')}</strong>
        <strong> {localStorage.getItem('jemailid')}</strong>
        <strong><button onClick={toggleEditForm}>view</button></strong>
        </div>
        {isEditFormVisible && (
        <div className='viewalldata'>
          <button onClick={toggleEditForm}>X</button>
            <h1 className='text-center'>Candidate Detail</h1><hr></hr>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Fullname :{localStorage.getItem('jfullname')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Email Id :{localStorage.getItem('jemailid')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Phone : {localStorage.getItem('jphone')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>College : {localStorage.getItem('jcollege')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Cource : {localStorage.getItem('jcource')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Field : {localStorage.getItem('jfield')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Role : {localStorage.getItem('jrole')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Job Role : {localStorage.getItem('jerole')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>year : {localStorage.getItem('jyear')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>State : {localStorage.getItem('jstate')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>District : {localStorage.getItem('jdistrict')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Experience : {localStorage.getItem('jexperience')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Company : {localStorage.getItem('jcompany')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Location : {localStorage.getItem('jlocation')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Resume : {localStorage.getItem('jresume')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Letter : {localStorage.getItem('jletter')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Current Address : {localStorage.getItem('jcurrent')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Parmanent Address : {localStorage.getItem('jparmanent')}</strong>
          </div>
        </div>
        <div className='status'>
      <div className='row d-flex'>
        <h1>Status</h1>
        <hr />
        <p>Match to job description</p>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Inprocess'
            checked={status === 'Status:-Inprocess'}
            onChange={handleChange}
          /> Inprocess
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Selected'
            checked={status === 'Status:-Selected'}
            onChange={handleChange}
          /> Select
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Rejected'
            checked={status === 'Status:-Rejected'}
            onChange={handleChange}
          /> Reject
        </div>
      </div>
      
    </div>
        </div>
        )}
         <div className='datalistjobpage'> 
          <p>{formattedDate}</p>
        <strong> {localStorage.getItem('jfullname')}</strong>
        <strong> {localStorage.getItem('jemailid')}</strong>
        <strong><button onClick={toggleEditForm}>view</button></strong>
        </div>
        {isEditFormVisible && (
        <div className='viewalldata'>
          <button onClick={toggleEditForm}>X</button>
            <h1 className='text-center'>Candidate Detail</h1><hr></hr>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Fullname :{localStorage.getItem('jfullname')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Email Id :{localStorage.getItem('jemailid')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Phone : {localStorage.getItem('jphone')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>College : {localStorage.getItem('jcollege')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Cource : {localStorage.getItem('jcource')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Field : {localStorage.getItem('jfield')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Role : {localStorage.getItem('jrole')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Job Role : {localStorage.getItem('jerole')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>year : {localStorage.getItem('jyear')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>State : {localStorage.getItem('jstate')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>District : {localStorage.getItem('jdistrict')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Experience : {localStorage.getItem('jexperience')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Company : {localStorage.getItem('jcompany')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Location : {localStorage.getItem('jlocation')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Resume : {localStorage.getItem('jresume')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Letter : {localStorage.getItem('jletter')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Current Address : {localStorage.getItem('jcurrent')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Parmanent Address : {localStorage.getItem('jparmanent')}</strong>
          </div>
        </div>
        <div className='status'>
      <div className='row d-flex'>
        <h1>Status</h1>
        <hr />
        <p>Match to job description</p>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Inprocess'
            checked={status === 'Status:-Inprocess'}
            onChange={handleChange}
          /> Inprocess
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Selected'
            checked={status === 'Status:-Selected'}
            onChange={handleChange}
          /> Select
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Rejected'
            checked={status === 'Status:-Rejected'}
            onChange={handleChange}
          /> Reject
        </div>
      </div>
    </div>
        </div>
        
        )}
         <div className='datalistjobpage'> 
          <p>{formattedDate}</p>
        <strong> {localStorage.getItem('jfullname')}</strong>
        <strong> {localStorage.getItem('jemailid')}</strong>
        <strong><button onClick={toggleEditForm}>view</button></strong>
        </div>
        {isEditFormVisible && (
        <div className='viewalldata'>
          <button onClick={toggleEditForm}>X</button>
            <h1 className='text-center'>Candidate Detail</h1><hr></hr>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Fullname :{localStorage.getItem('jfullname')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Email Id :{localStorage.getItem('jemailid')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Phone : {localStorage.getItem('jphone')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>College : {localStorage.getItem('jcollege')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Cource : {localStorage.getItem('jcource')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Field : {localStorage.getItem('jfield')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Role : {localStorage.getItem('jrole')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Job Role : {localStorage.getItem('jerole')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>year : {localStorage.getItem('jyear')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>State : {localStorage.getItem('jstate')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>District : {localStorage.getItem('jdistrict')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Experience : {localStorage.getItem('jexperience')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Company : {localStorage.getItem('jcompany')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Location : {localStorage.getItem('jlocation')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Resume : {localStorage.getItem('jresume')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Letter : {localStorage.getItem('jletter')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Current Address : {localStorage.getItem('jcurrent')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Parmanent Address : {localStorage.getItem('jparmanent')}</strong>
          </div>
        </div>
        <div className='status'>
      <div className='row d-flex'>
        <h1>Status</h1>
        <hr />
        <p>Match to job description</p>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Inprocess'
            checked={status === 'Status:-Inprocess'}
            onChange={handleChange}
          /> Inprocess
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Selected'
            checked={status === 'Status:-Selected'}
            onChange={handleChange}
          /> Select
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Rejected'
            checked={status === 'Status:-Rejected'}
            onChange={handleChange}
          /> Reject
        </div>
      </div>
      
    </div>
        </div>
        )}
         <div className='datalistjobpage'> 
          <p>{formattedDate}</p>
        <strong> {localStorage.getItem('jfullname')}</strong>
        <strong> {localStorage.getItem('jemailid')}</strong>
        <strong><button onClick={toggleEditForm}>view</button></strong>
        </div>
        {isEditFormVisible && (
        <div className='viewalldata'>
          <button onClick={toggleEditForm}>X</button>
            <h1 className='text-center'>Candidate Detail</h1><hr></hr>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Fullname :{localStorage.getItem('jfullname')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Email Id :{localStorage.getItem('jemailid')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Phone : {localStorage.getItem('jphone')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>College : {localStorage.getItem('jcollege')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Cource : {localStorage.getItem('jcource')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Field : {localStorage.getItem('jfield')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Role : {localStorage.getItem('jrole')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Job Role : {localStorage.getItem('jerole')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>year : {localStorage.getItem('jyear')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>State : {localStorage.getItem('jstate')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>District : {localStorage.getItem('jdistrict')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Experience : {localStorage.getItem('jexperience')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Company : {localStorage.getItem('jcompany')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Location : {localStorage.getItem('jlocation')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Resume : {localStorage.getItem('jresume')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Letter : {localStorage.getItem('jletter')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Current Address : {localStorage.getItem('jcurrent')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Parmanent Address : {localStorage.getItem('jparmanent')}</strong>
          </div>
        </div>
        <div className='status'>
      <div className='row d-flex'>
        <h1>Status</h1>
        <hr />
        <p>Match to job description</p>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Inprocess'
            checked={status === 'Status:-Inprocess'}
            onChange={handleChange}
          /> Inprocess
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Selected'
            checked={status === 'Status:-Selected'}
            onChange={handleChange}
          /> Select
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Rejected'
            checked={status === 'Status:-Rejected'}
            onChange={handleChange}
          /> Reject
        </div>
      </div>
    </div>
        </div>
        
        )}
         <div className='datalistjobpage'> 
          <p>{formattedDate}</p>
        <strong> {localStorage.getItem('jfullname')}</strong>
        <strong> {localStorage.getItem('jemailid')}</strong>
        <strong><button onClick={toggleEditForm}>view</button></strong>
        </div>
        {isEditFormVisible && (
        <div className='viewalldata'>
          <button onClick={toggleEditForm}>X</button>
            <h1 className='text-center'>Candidate Detail</h1><hr></hr>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Fullname :{localStorage.getItem('jfullname')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Email Id :{localStorage.getItem('jemailid')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Phone : {localStorage.getItem('jphone')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>College : {localStorage.getItem('jcollege')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Cource : {localStorage.getItem('jcource')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Field : {localStorage.getItem('jfield')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Role : {localStorage.getItem('jrole')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Job Role : {localStorage.getItem('jerole')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>year : {localStorage.getItem('jyear')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>State : {localStorage.getItem('jstate')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>District : {localStorage.getItem('jdistrict')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Experience : {localStorage.getItem('jexperience')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Company : {localStorage.getItem('jcompany')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Location : {localStorage.getItem('jlocation')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Resume : {localStorage.getItem('jresume')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Letter : {localStorage.getItem('jletter')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Current Address : {localStorage.getItem('jcurrent')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Parmanent Address : {localStorage.getItem('jparmanent')}</strong>
          </div>
        </div>
        <div className='status'>
      <div className='row d-flex'>
        <h1>Status</h1>
        <hr />
        <p>Match to job description</p>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Inprocess'
            checked={status === 'Status:-Inprocess'}
            onChange={handleChange}
          /> Inprocess
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Selected'
            checked={status === 'Status:-Selected'}
            onChange={handleChange}
          /> Select
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Rejected'
            checked={status === 'Status:-Rejected'}
            onChange={handleChange}
          /> Reject
        </div>
      </div>
      
    </div>
        </div>
        )}
         <div className='datalistjobpage'> 
          <p>{formattedDate}</p>
        <strong> {localStorage.getItem('jfullname')}</strong>
        <strong> {localStorage.getItem('jemailid')}</strong>
        <strong><button onClick={toggleEditForm}>view</button></strong>
        </div>
        {isEditFormVisible && (
        <div className='viewalldata'>
          <button onClick={toggleEditForm}>X</button>
            <h1 className='text-center'>Candidate Detail</h1><hr></hr>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Fullname :{localStorage.getItem('jfullname')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Email Id :{localStorage.getItem('jemailid')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Phone : {localStorage.getItem('jphone')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>College : {localStorage.getItem('jcollege')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Cource : {localStorage.getItem('jcource')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Field : {localStorage.getItem('jfield')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Role : {localStorage.getItem('jrole')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Job Role : {localStorage.getItem('jerole')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>year : {localStorage.getItem('jyear')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>State : {localStorage.getItem('jstate')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>District : {localStorage.getItem('jdistrict')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Experience : {localStorage.getItem('jexperience')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Company : {localStorage.getItem('jcompany')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Location : {localStorage.getItem('jlocation')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Resume : {localStorage.getItem('jresume')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Letter : {localStorage.getItem('jletter')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Current Address : {localStorage.getItem('jcurrent')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Parmanent Address : {localStorage.getItem('jparmanent')}</strong>
          </div>
        </div>
        <div className='status'>
      <div className='row d-flex'>
        <h1>Status</h1>
        <hr />
        <p>Match to job description</p>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Inprocess'
            checked={status === 'Status:-Inprocess'}
            onChange={handleChange}
          /> Inprocess
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Selected'
            checked={status === 'Status:-Selected'}
            onChange={handleChange}
          /> Select
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Rejected'
            checked={status === 'Status:-Rejected'}
            onChange={handleChange}
          /> Reject
        </div>
      </div>
    </div>
        </div>
        
        )}
         <div className='datalistjobpage'> 
          <p>{formattedDate}</p>
        <strong> {localStorage.getItem('jfullname')}</strong>
        <strong> {localStorage.getItem('jemailid')}</strong>
        <strong><button onClick={toggleEditForm}>view</button></strong>
        </div>
        {isEditFormVisible && (
        <div className='viewalldata'>
          <button onClick={toggleEditForm}>X</button>
            <h1 className='text-center'>Candidate Detail</h1><hr></hr>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Fullname :{localStorage.getItem('jfullname')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Email Id :{localStorage.getItem('jemailid')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Phone : {localStorage.getItem('jphone')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>College : {localStorage.getItem('jcollege')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Cource : {localStorage.getItem('jcource')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Field : {localStorage.getItem('jfield')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Role : {localStorage.getItem('jrole')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Job Role : {localStorage.getItem('jerole')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>year : {localStorage.getItem('jyear')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>State : {localStorage.getItem('jstate')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>District : {localStorage.getItem('jdistrict')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Experience : {localStorage.getItem('jexperience')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Company : {localStorage.getItem('jcompany')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Location : {localStorage.getItem('jlocation')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Resume : {localStorage.getItem('jresume')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Letter : {localStorage.getItem('jletter')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Current Address : {localStorage.getItem('jcurrent')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Parmanent Address : {localStorage.getItem('jparmanent')}</strong>
          </div>
        </div>
        <div className='status'>
      <div className='row d-flex'>
        <h1>Status</h1>
        <hr />
        <p>Match to job description</p>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Inprocess'
            checked={status === 'Status:-Inprocess'}
            onChange={handleChange}
          /> Inprocess
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Selected'
            checked={status === 'Status:-Selected'}
            onChange={handleChange}
          /> Select
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Rejected'
            checked={status === 'Status:-Rejected'}
            onChange={handleChange}
          /> Reject
        </div>
      </div>
      
    </div>
        </div>
        )}
         <div className='datalistjobpage'> 
          <p>{formattedDate}</p>
        <strong> {localStorage.getItem('jfullname')}</strong>
        <strong> {localStorage.getItem('jemailid')}</strong>
        <strong><button onClick={toggleEditForm}>view</button></strong>
        </div>
        {isEditFormVisible && (
        <div className='viewalldata'>
          <button onClick={toggleEditForm}>X</button>
            <h1 className='text-center'>Candidate Detail</h1><hr></hr>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Fullname :{localStorage.getItem('jfullname')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Email Id :{localStorage.getItem('jemailid')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Phone : {localStorage.getItem('jphone')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>College : {localStorage.getItem('jcollege')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Cource : {localStorage.getItem('jcource')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Field : {localStorage.getItem('jfield')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Role : {localStorage.getItem('jrole')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Job Role : {localStorage.getItem('jerole')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>year : {localStorage.getItem('jyear')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>State : {localStorage.getItem('jstate')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>District : {localStorage.getItem('jdistrict')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Experience : {localStorage.getItem('jexperience')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Company : {localStorage.getItem('jcompany')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Location : {localStorage.getItem('jlocation')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Resume : {localStorage.getItem('jresume')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Letter : {localStorage.getItem('jletter')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Current Address : {localStorage.getItem('jcurrent')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Parmanent Address : {localStorage.getItem('jparmanent')}</strong>
          </div>
        </div>
        <div className='status'>
      <div className='row d-flex'>
        <h1>Status</h1>
        <hr />
        <p>Match to job description</p>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Inprocess'
            checked={status === 'Status:-Inprocess'}
            onChange={handleChange}
          /> Inprocess
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Selected'
            checked={status === 'Status:-Selected'}
            onChange={handleChange}
          /> Select
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Rejected'
            checked={status === 'Status:-Rejected'}
            onChange={handleChange}
          /> Reject
        </div>
      </div>
    </div>
        </div>
        
        )}
         <div className='datalistjobpage'> 
          <p>{formattedDate}</p>
        <strong> {localStorage.getItem('jfullname')}</strong>
        <strong> {localStorage.getItem('jemailid')}</strong>
        <strong><button onClick={toggleEditForm}>view</button></strong>
        </div>
        {isEditFormVisible && (
        <div className='viewalldata'>
          <button onClick={toggleEditForm}>X</button>
            <h1 className='text-center'>Candidate Detail</h1><hr></hr>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Fullname :{localStorage.getItem('jfullname')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Email Id :{localStorage.getItem('jemailid')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Phone : {localStorage.getItem('jphone')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>College : {localStorage.getItem('jcollege')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Cource : {localStorage.getItem('jcource')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Field : {localStorage.getItem('jfield')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Role : {localStorage.getItem('jrole')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Job Role : {localStorage.getItem('jerole')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>year : {localStorage.getItem('jyear')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>State : {localStorage.getItem('jstate')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>District : {localStorage.getItem('jdistrict')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Experience : {localStorage.getItem('jexperience')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Company : {localStorage.getItem('jcompany')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Location : {localStorage.getItem('jlocation')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Resume : {localStorage.getItem('jresume')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Letter : {localStorage.getItem('jletter')}</strong>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-lg-6 col-sm-12'>
            <strong>Current Address : {localStorage.getItem('jcurrent')} </strong>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <strong>Parmanent Address : {localStorage.getItem('jparmanent')}</strong>
          </div>
        </div>
        <div className='status'>
      <div className='row d-flex'>
        <h1>Status</h1>
        <hr />
        <p>Match to job description</p>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Inprocess'
            checked={status === 'Status:-Inprocess'}
            onChange={handleChange}
          /> Inprocess
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Selected'
            checked={status === 'Status:-Selected'}
            onChange={handleChange}
          /> Select
        </div>
        <div className='col-lg-4 col-sm-12'>
          <input
            type='radio'
            name='status'
            value='Status:-Rejected'
            checked={status === 'Status:-Rejected'}
            onChange={handleChange}
          /> Reject
        </div>
      </div>
      
    </div>
        </div>
        )}
        
    </div>
    
  );
};

export default RegistrationData;
