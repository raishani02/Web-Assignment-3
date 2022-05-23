import React from "react";
import './Navbar.css';
import Modal from "./Modal";
import {
  BrowserRouter as Router,
  Route,
  Routes,
 
} from "react-router-dom";


class Navbar extends React.Component
{
  constructor() {
    super();
    this.state = {
      show: false
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render()
  {
    return(

      <div className="">

      <Router>

      <div>
        <nav class="navbar navbar-expand navbar-light bg-light">
          <div class="container-fluid sigh">
            
            <div style={{"width":"145px","height":"36px"}}>
                <a class="navbar-brand" href="https://www.freelancer.com" >
                <img  src="https://www.f-cdn.com/assets/img/fl-logo-c555380d.svg" alt="Freelancer Logo"></img>
                </a>
            </div>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav  ">

                <li class="nav-item d-none d-lg-inline ">
                  <a class="nav-link active " href="#">How It Works</a>
                </li>
                <li class="nav-item d-none d-lg-inline">
                  <a class="nav-link active" href="#">Browse Jobs</a>
                </li>

              </ul>
              <ul class="navbar-nav ms-auto ">
                <li class="nav-item me-2">
                  <a onClick={this.showModal}  class="nav-link active" aria-current="page" href="/Login">
                    Log In
                  </a>
                  
                </li>
                <li class="nav-item me-5">
                {/* <Link onClick={this.handleModelOpen}  className="nav-link active" to="/Signup">Sign Up</Link> */}
                <a class="nav-link active" aria-current="page" href="/Signup">
                    Signup
                  </a>
                  
                </li>     
              </ul> 
              {/* <Modal show={this.state.show} handleClose={this.hideModal}>
                </Modal>
              <button type="button" onClick={this.showModal}>
                Open
              </button> */}
            </div>
      </div>
    </nav>
  {/* <LoginModal/> */}
    <Routes>

    <Route exact path="/Login" element={ 
        <Modal show={this.state.show} handleClose={()=>this.hideModal}>
            </Modal>}
      />
              
    </Routes>

    </div>
</Router>
<div className="row" style={{"backgroundColor":"blue"}}>

<div className="col-lg-6 mx-auto" style={{"fontSize":"2rem"}}>
Top Jobs
</div>


</div>

</div>





    )
}
}

export default Navbar;