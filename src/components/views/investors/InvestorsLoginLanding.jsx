import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Login from './Login.jsx';
import LoginSideBar from '../../common/InvestorsLoginSidebar.jsx';
import '../../../styles/login.css';

class LoginLanding extends Component {
  render() {
    this.a = 'Hello';

    return (
      <Container>
                <div className='landing'>
          <Login
              subHeader="Investors Login"
            />
          <LoginSideBar
                heading="Support a Business to"
            />
        </div>
      </Container>
    );
  }
}

export default LoginLanding;
