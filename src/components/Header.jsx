import Container from "react-bootstrap/Container";
import { Image } from "react-bootstrap";
import logo from "../assets/logo.png";
const Header = () => {
  return (
    <Container>
      <Image src={logo} width="300px" />
    </Container>
  );
};

export default Header;
