import { Container, Navbar } from "react-bootstrap";
import DogSvg from "../Svg/DogSvg";
import UserSvg from "../Svg/UserSvg";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <DogSvg color={"white"} /> Dog Hero
        </Navbar.Brand>

        <Navbar.Collapse
          className="justify-content-end"
          style={{ fontFamily: "Helvetica" }}
        >
          <Navbar.Brand href="/login">
            Login / Register <UserSvg color="white" />
          </Navbar.Brand>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;
