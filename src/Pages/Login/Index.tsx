import { Button, Col, Container, Form, Navbar, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import Head from "../../Components/Head/Index";
// import styles from "./Login.module.css";

const Login = () => {
  const location = useLocation();
  return (
    <>
      <Head
        title={`Dogs | ${
          location.pathname.slice(1).charAt(0).toUpperCase() +
          location.pathname.slice(2)
        }`}
        description="This site list all cutest dogs of the internet"
      />
      <Container
        style={{
          marginLeft: "0px",
          marginRight: "0px",
          paddingLeft: "0px",
          paddingRight: "0px",
        }}
      >
        <Row>
          <Col>
            <img
              style={{ width: "100%", height: "100%" }}
              src="https://dogs.origamid.dev/static/media/login.824d7d85.jpg"
            />
          </Col>
          <Col style={{ textAlign: "start", margin: "2rem" }}>
            <h2>Login</h2>
            <Form style={{ marginBottom: "5rem" }}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Navbar.Text>
                  <a href="/recoverPassword">Lost Password?</a>
                </Navbar.Text>
              </Form.Group>

              <Button variant="primary" type="submit">
                Login
              </Button>
            </Form>
            <h2>Register</h2>
            <p>
              Don't have an account yet? Register <a href="/register">here.</a>
            </p>{" "}
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Login;
