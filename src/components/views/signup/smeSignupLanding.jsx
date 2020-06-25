import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Signup from './smeSignup.jsx';
import LoginSideBar from '../../common/LoginSidebar.jsx';
import '../../../styles/login.css';

class SmeSignupLanding extends Component {
  render() {
    this.a = 'Hello';

    return (
      <Container>
        <div className='landing'>
          <Signup
          subHeader="SME Signup"/>
          <LoginSideBar
          heading="Let’s Help your Business"
          />
        </div>
      </Container>
    );
  }
}

export default SmeSignupLanding;
