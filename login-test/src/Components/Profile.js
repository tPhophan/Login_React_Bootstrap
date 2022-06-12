import {Container, Button, Row, Navbar, Nav } from 'react-bootstrap';

import '../App.css';

import LoginForm from './Login'
import CardContent from './CardContent';

function Profile() {

  function Logout(){
    return < LoginForm />
  }

  return (
    <div>
      <Navbar className='justify-content-between' bg='light' expand='lg'>
        <Navbar.Brand href='/' style={{marginLeft: 10}}>
          MyProfile
        </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav'/>
          <Navbar.Collapse id='basic-navbar-nav'>
            <div className='me-auto'></div>
            <Nav>
              <Nav.Link href='/'>
                <Button variant='danger' onClick={Logout}>Logout</Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
      <Container className='pd-20 mt-20'>
          <br></br>
          <h3 className='text-center'>This Website</h3>
          <br></br>
          <Row>

            <CardContent />

          </Row>
      </Container>
      <footer className='text-center bg-white pd-20'>
        <div className='text-center p-2' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
          Developed By
          <a className='text-reset fw-bold' href='https://github.com/tPhophan/' target='_blank' rel="noreferrer" style={{marginLeft: 4}}>
            Tossaphon Phophan
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Profile;
