import {Container, Button, Row, Col, Navbar, Nav, Card} from 'react-bootstrap';

import './App.css';

function App() {
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
              <Nav.Link href='https://www.youtube.com' target='_blank'>
                <Button variant='danger'>Logout</Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
      <Container className='pd-20 mt-20'>
          <br></br>
          <h3 className='text-center'>This Website</h3>
          <br></br>
          <Row>

            <Col md={4}>
              <Card className='pd-20'>
                <Card.Body>
                  <Card.Img variant='top' src='https://cdn.pixabay.com/photo/2021/11/30/08/24/strawberries-6834750__480.jpg'></Card.Img>
                  <br></br>
                  <Card.Title>Title</Card.Title>
                  <Card.Text>text test</Card.Text>
                  <Card.Link href='https://google.com' target='_blank'>
                    <Button variant='warning'>Read more</Button>
                  </Card.Link>
                </Card.Body>
              </Card>
            </Col>

          </Row>
      </Container>
      <footer className='text-center bg-white pd-20'>
        <div className='text-center p-2' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
          Developed By
          <a className='text-reset fw-bold' href='https://github.com/tPhophan/' target='_blank' style={{marginLeft: 4}}>
            Tossaphon Phophan
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
