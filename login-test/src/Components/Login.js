import { Container, Form, Button, Alert } from "react-bootstrap";
import logoFb from "../pic/facebook-brands.svg";
import logoGg from "../pic/google-brands.svg";
import logoTw from "../pic/twitter-brands.svg";
import Profile from './Profile';

import { useRef, useState, useEffect } from "react";

import "../App.css";

function LoginForm() {
  const adminUser = {
    user: "test",
    pwd: "1234",
  };

  const userRef = useRef();
  
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {userRef.current.focus();}, []);
  
  useEffect(() => {}, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    Login();
  };

  const Login = () => {
    const alertLogin = document.querySelector('#alert-login');
    alertLogin.hidden = true;
    if (user === adminUser.user && pwd === adminUser.pwd) {
      setUser("");
      setPwd("");
      setSuccess(true);
    }else{
      setPwd("");
      setSuccess(false);
      alertLogin.hidden = false;
    }
  };

  return (
    <>
      {success ? (
        <Profile />
      ) : (
        <Container id="main-container" className="d-grid h-100">
          <Form id="sign-in-form" className="text-center w-100">
            <h1 className="mb-5 fs-1 fw-bold">Login</h1>
            <Alert id='alert-login' key="danger" variant="danger" hidden>
              Login Failed!
            </Alert>
            <Form.Group className="mb-1 text-left" controlId="sign-in-username">
              <Form.Control
                type="username"
                size="lg"
                placeholder="Your Username"
                ref={userRef}
                autoComplete="username"
                className="position-relative"
                onChange={(e) => setUser(e.target.value)}
                value={user}
                required
              />
            </Form.Group>

            <Form.Group className="mb-2" controlId="sign-in-password">
              <Form.Control
                type="password"
                size="lg"
                placeholder="Your Password"
                ref={userRef}
                autoComplete="current-password"
                className="position-relative"
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
              />
            </Form.Group>

            <Form.Group
              className="mb-4 d-flex justify-content-between"
              controlId="remember-me"
            >
              <Form.Check label="Remember me" />
              <Form.Group>
                <a href="/">Forgot password?</a>
              </Form.Group>
            </Form.Group>

            <Button
              id="btn-login"
              variant="primary"
              size="lg"
              onClick={handleSubmit}
              type="submit"
            >
              LOGIN
            </Button>
          </Form>
          <Form.Group>
            <span>Or Sign Up Using</span>
          </Form.Group>

          <Form.Group>
            <a href="/">
              <img className="img-logo" src={logoFb} alt="Facebook" />
            </a>
            <a href="/">
              <img className="img-logo" src={logoGg} alt="Facebook" />
            </a>
            <a href="/">
              <img className="img-logo" src={logoTw} alt="Facebook" />
            </a>
          </Form.Group>
        </Container>
      )}
    </>
  );
}

export default LoginForm;
