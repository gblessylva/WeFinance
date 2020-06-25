import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Login from './Login.jsx';
import LoginSideBar from '../../common/LoginSidebar.jsx';
import '../../../styles/login.css';

class LoginLanding extends Component {
  render() {
    this.a = 'Hello';

    return (
      <Container>
                <div className='landing'>
                  <div className='login-wrapper'>
                  <Login
              // header='BuildForSDG'
              subHeader="SME Login Page"
            />
                  </div>

                  <LoginSideBar
                   heading="Let’s Help your Business"

            />
        </div>
      </Container>

    );
  }
}

export default LoginLanding;
