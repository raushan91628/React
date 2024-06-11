import React, {useState} from 'react';
import'./App.css';
import { Link } from 'react-router-dom'


const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleloginadmin = () => {
    setIsEditFormVisible(prevState => !prevState);
  }
  const [isEditFormVisible, setIsEditFormVisible] = useState<boolean>(false);
  
  const toggleMenu = () => {
    setIsOpen(isOpen=>!isOpen);
  }
  const logout=()=>{
    localStorage.removeItem("signUp")
    window.location.reload()
}
// const deleteAccount=()=>{ 
//     localStorage.clear()
//     window.location.reload()
// }
const [isnavbarFormVisible, setisnavbarFormVisible] = useState(false);
  const [adminusername, setUsername] = useState('');
  const [adminpassword, setPassword] = useState('');
  const [error, setError] = useState('');

  const showdata = () => {
    if (adminusername === '8877742073' && adminpassword === 'kss@123') {
      setisnavbarFormVisible(true);
      setError('');
      alert("Login Successfully");
    } else {
      setError('Incorrect Username or Password');
    }
  };
  const showdatauser=()=>
    {
      setisnavbarFormVisible(prevState => !prevState);
    }
  return (
    <div className="navabrmaindiv">
    <nav className="navbar">
      <Link className='menu' to="">Contact Form</Link>
      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>
      <div className={`menu ${isOpen ? 'open' : ''}`}>
          {/* <Link className='menu' to="/home">Home</Link>
        
          <Link className='menu' to="/about">About</Link>
          <Link className='menu' to="/contact">Contact</Link> */}
          <button className='logout' onClick={toggleloginadmin}>Login</button>
          <button onClick={logout} className="logout">LogOut</button>
            {/* <button onClick={deleteAccount} className="delete">Delete</button> */}
       </div>
    </nav>
    <div className="columnavbaritem">
     
    <Link className='link' to="/home">Home</Link>
        <Link className='link' to="/about">About</Link>
        <Link className='link' to="/contact">Contact</Link>
        <Link className='link' to="/arives">Feedback</Link>
        {isnavbarFormVisible && (
          <div className='hrlogin-navbar'>
            <strong>Inter Application</strong>
            <Link className='link' to="/home">Home</Link>
            <Link className='link' to="/about">About</Link>
        <Link className='link' to="/Dashbord">Dashbord</Link>
        <Link className='link' to="/Registationform">Create Jobs</Link>
        <Link className='link' to="/aboutus">Login Data</Link>
        <Link className='link' to="/a">Job Application</Link>
        <Link className='link' to="/RegistationDatads">Internship Application</Link>
        <button onClick={showdatauser}>LogOut</button>
        </div>
        )}

    
    </div>
    {isEditFormVisible && (
   <div className='admimform'>
    <button className='col-1' onClick={toggleloginadmin}>X</button>
   <h1 className='text-center'>Admin Login</h1>
   <strong>Username</strong>
   <input
     type='text'
     value={adminusername}
     onChange={(e) => setUsername(e.target.value)}
   />
   <strong>Password</strong>
   <input
     type='password'
     value={adminpassword}
     onChange={(e) => setPassword(e.target.value)}
   />
   <button onClick={showdata}>Submit</button>
   {error && <p style={{ color: 'red' }}>{error}</p>}
 </div>
    )}
    

    </div>
  );
};

export default Navbar;
