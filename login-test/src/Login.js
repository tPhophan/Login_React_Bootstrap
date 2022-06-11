import { Container, Form, Button } from "react-bootstrap";
import logoFb from "./pic/facebook-brands.svg";
import logoGg from "./pic/google-brands.svg";
import logoTw from "./pic/twitter-brands.svg";

import { useRef, useState, useEffect } from "react";

import "./App.css";

function App() {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user, pwd);
    setUser("");
    setPwd("");
    setSuccess(true);
  };

  return (
    <Container id="main-container" className="d-grid h-100">
      <Form
        id="sign-in-form"
        className="text-center w-100"
      >
        <h1 className="mb-5 fs-1 fw-bold">Login</h1>

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
            autoComplete="current-password"
            className="position-relative"
            onChange={(e) => setPwd(e.target.value)}
            value={pwd}
            required
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

        <Button id="btn-login" variant="primary" size="lg" onClick={handleSubmit}>
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
  );
}

export default App;
