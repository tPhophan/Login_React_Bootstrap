import {Container, Button, Row, Col, Navbar, Nav, Card, Jumbotron} from 'react-bootstrap';

import './App.css';

function App() {
  return (
    <div>
      <Navbar className="justify-content-between" bg="light" expand="lg">
        <Navbar.Brand href="/">
          MyProfile
        </Navbar.Brand>
        <div className="d-flex">
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="https://www.youtube.com" target="_blank">
                Youtube
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
      <Container className="pd-20 mt-20">
          <br></br>
          <h3 className="text-center">This Website</h3>
          <br></br>
          <Row>
            <Col md={4}>
              <Card className="pd-20">
                <Card.Body>
                  <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2021/11/30/08/24/strawberries-6834750__480.jpg"></Card.Img>
                  <br></br>
                  <Card.Title>Title</Card.Title>
                  <Card.Text>text test</Card.Text>
                  <Card.Link href="https://google.com" target="_blank">
                    <Button variant="warning">Read more</Button>
                  </Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="pd-20">
                <Card.Body>
                  <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2021/11/30/08/24/strawberries-6834750__480.jpg"></Card.Img>
                  <br></br>
                  <Card.Title>Title</Card.Title>
                  <Card.Text>text test</Card.Text>
                  <Card.Link href="https://google.com" target="_blank">
                    <Button variant="warning">Read more</Button>
                  </Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="pd-20">
                <Card.Body>
                  <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2021/11/30/08/24/strawberries-6834750__480.jpg"></Card.Img>
                  <br></br>
                  <Card.Title>Title</Card.Title>
                  <Card.Text>text test</Card.Text>
                  <Card.Link href="https://google.com" target="_blank">
                    <Button variant="warning">Read more</Button>
                  </Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="pd-20">
                <Card.Body>
                  <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2021/11/30/08/24/strawberries-6834750__480.jpg"></Card.Img>
                  <br></br>
                  <Card.Title>Title</Card.Title>
                  <Card.Text>text test</Card.Text>
                  <Card.Link href="https://google.com" target="_blank">
                    <Button variant="warning">Read more</Button>
                  </Card.Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
      </Container>
      <footer className="text-center bg-white pd-20">
        Developed By 
        <a href="http://github.com/tPhophan" target="_blank">
          Tossaphon Phophan
        </a>
      </footer>
    </div>
  );
}

export default App;
