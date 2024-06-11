import React from 'react';

const contact: React.FC = () => {
 const submit=()=>{
  alert("Your response has been submited successfully ! Please wait when admin will be check");

  }
  return (
    <div className='contactform'>
      <form className='contact'>
      <h1>Contact List</h1>
        <label>Name:</label>
        <input type="text" name="name"/>

        <label>Email:</label>
        <input type="text" name="email" />

        <label>Message:</label>
        <textarea name="message"  />

        <button type="submit" className='col-4 text-auto' onClick={submit}>Sumbit</button>
      </form>
      </div>
  );
};

export default contact;
