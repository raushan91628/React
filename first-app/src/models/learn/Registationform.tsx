import React, { useState, useEffect } from 'react';
import './App.css';
import RegistrationData from './Home'; 

interface FormState {
  name: string;
  email: string;
  message: string;
}

export const App: React.FC = () => {
  const [formState, setFormState] = useState<FormState>({
    name: '',
    email: '',
    message: ''
  });
  
  const [savedDataList, setSavedDataList] = useState<FormState[]>([]);

  useEffect(() => {
    // Load saved form data from local storage when the component mounts
    const data = localStorage.getItem('contactFormDataList');
    if (data) {
      setSavedDataList(JSON.parse(data));
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  // submit the form
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted', formState);

    // Save form data to local storage
    const updatedDataList = [...savedDataList, formState];
    localStorage.setItem('contactFormDataList', JSON.stringify(updatedDataList));
    setSavedDataList(updatedDataList); // Update state with new form data
    setFormState({ name: '', email: '', message: '' }); // Clear form fields
  };

  // delete the data 
  const handleDelete = (index: number) => {
    const updatedDataList = savedDataList.filter((_, i) => i !== index);
    localStorage.setItem('contactFormDataList', JSON.stringify(updatedDataList));
    setSavedDataList(updatedDataList); // Update state with new data list
  };

  // edit the data
  const handleEdit = (index: number) => {
    const dataToEdit = savedDataList[index];
    setFormState(dataToEdit); // Load saved data into form state for editing
    handleDelete(index); // Delete the entry to edit it on submit
  };
  // nav bar section
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    }
    // const [linkStyle, setLinkStyle] = useState<React.CSSProperties>({});
    // const applyStyle = () => {
    //   setLinkStyle({
    //     display:'block',
    //   });
    // };
     
  

  return (
    <div className="registration">



    {/* form section */}
      <form onSubmit={handleSubmit}>
        <div className="form">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formState.name}
            onChange={handleChange}
          />
        </div>
        <div className="form">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
          />
        </div>
        <div className="form">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formState.message}
            onChange={handleChange}
          />
        </div>
        {/* button section */}
        <button type="submit" className="submit">Submit</button>
      </form>
      {/* <RegistrationData /> */}
      {/*  Display data section */}
      {savedDataList.map((data, index) => (
        <div key={index} className="displaydata">
          <table>
            <tr>
          <th>Name:</th> <td>{data.name}</td>
          </tr>
          <tr>
          <th>Email:</th> <td>{data.email}</td>
          </tr>
          <tr>
          <th>Message:</th> <td>{data.message}</td>
          </tr>
          <tr>
              <th> Action:</th>
              <td>
          <button onClick={() => handleEdit(index)}>Edit</button>
          <button onClick={() => handleDelete(index)}>Delete</button>
          </td>
          </tr>
          </table>
        </div>
      ))}
    </div>
  );
};

export default App;