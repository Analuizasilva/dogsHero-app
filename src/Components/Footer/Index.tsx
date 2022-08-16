import { Container, Navbar } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container style={{ height: "10rem" }}>
          <Navbar.Brand href="/">Footer</Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <a href="#login">Ana Luiza</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default Footer;
