import {Container, Form, Button} from 'react-bootstrap';
import logoFb from './pic/facebook-brands.svg'
import logoGg from './pic/google-brands.svg'
import logoTw from './pic/twitter-brands.svg'

import './App.css';

function App() {
  return (
    <Container id="main-container" className="d-grid h-100">
      <Form id="sign-in-form" className="text-center w-100">

        <h1 className="mb-5 fs-1 fw-bold">Login</h1>

        <Form.Group className="mb-1 text-left" controlId="sign-in-username">
          <Form.Control type="username" size="lg" placeholder="Your Username" autoComplete="username" className="position-relative"/>
        </Form.Group>

        <Form.Group className="mb-2" controlId="sign-in-password">
          <Form.Control type="password" size="lg" placeholder="Your Password" autoComplete="current-password" className="position-relative"/>
        </Form.Group>

        <Form.Group className="mb-4 d-flex justify-content-between" controlId="remember-me">
          <Form.Check label="Remember me"/>
          <Form.Group>
						<a href="/">Forgot password?</a>
				  </Form.Group>
        </Form.Group>

        <Button id="btn-login" variant="primary" size="lg">LOGIN</Button>
        
        <Form.Group>
						<span>Or Sign Up Using</span>
				</Form.Group>

        <Form.Group>
						<a href="/">
							<img 
                className="img-logo"
                src={logoFb}
                alt="Facebook"
              />
						</a>
            <a href="/">
							<img 
                className="img-logo"
                src={logoGg}
                alt="Facebook"
              />
						</a>
            <a href="/">
							<img 
                className="img-logo"
                src={logoTw}
                alt="Facebook"
              />
						</a>
					</Form.Group>

      </Form>
    </Container>
  );
}

export default App;
