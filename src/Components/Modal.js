import './Modal.css';

import {useState} from 'react'

const Modal = ({ show,handleClose, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  
// States for registration
const [name, setName] = useState('');
const [password, setPassword] = useState('');

// States for checking the errors
const [submitted, setSubmitted] = useState(false);
const [error, setError] = useState(false);

// Handling the name change
const handleName = (e) => {
  setName(e.target.value);
  setSubmitted(false);
};


// Handling the password change
const handlePassword = (e) => {
  setPassword(e.target.value);
  setSubmitted(false);
};

// Handling the form submission
const handleSubmit = (e) => {
  e.preventDefault();
  if (name === '' || password === '') {
  setError(true);
  } else {
  setSubmitted(true);
  setError(false);
  }
};

// Showing success message
const successMessage = () => {
  return (
  <div
    className="success"
    style={{
    display: submitted ? '' : 'none',
    }}>
    <h1>User {name} successfully registered!!</h1>
  </div>
  );
};

// Showing error message if error is true
const errorMessage = () => {
  return (
  <div
    className="error"
    style={{
    display: error ? '' : 'none',
    }}>
    <h1>Please enter all the fields</h1>
  </div>
  );
};

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
       <div className="form">

       <button className='button1' type="button" onClick={()=>handleClose}>
          X
        </button>
              {/* Calling to the methods */}

            <div className="messages">
                        {errorMessage()}
                        {successMessage()}
                    </div>
                    <div class="Modal-header">
                       
                        <div style={{"width":"145px","height":"36px"}}>
                            
                            <img style={{"height":"50px"}}src="https://www.f-cdn.com/assets/img/fl-logo-c555380d.svg"  alt="Freelancer Logo"></img>
                            
                        </div>
                    </div>

              <div >
                <h1 style={{"margin-top":"50px","margin-bottom":"30px"}}>Welcome back</h1>
                <a href="#"><img style={{"height":"60px"}} src='fb_image.jpg'></img></a>
              </div>             

              <div style={{"margin-top":"20px","margin-bottom":"20px"}}> Or</div>
                

                <form action="" id="formvalidate" novalidate="novalidate">

                <input onChange={handleName} className="input" placeholder=" Email or username"
                value={name} type="text" />

                <label className="label">Password</label>
                <input onChange={handlePassword} className="input" placeholder="Password"
                value={password} type="password" />
               
                <div style={{"margin-top":"20px","margin-bottom":"20px"}} className="clearfix supporter">
                    <div class="pull-left remember-me">
                        <input id="rememberMe" type="checkbox"/>
                        <label for="rememberMe">Remember Me</label>
                    </div>

                    <a className="forgot pull-right" href="#">Forgot Password?</a>

                </div>
                <button onClick={handleSubmit} type="submit" id="login">Login</button>

                <div>Do You have account? <a href=''>Sign Up</a></div>
                </form>

        </div>
      </section>
    </div>
  );
};

export default Modal;