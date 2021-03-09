import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function TopNav(props){
    return(
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Daron Schmit</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/Bio">Bio</Nav.Link>
          <Nav.Link href="/Projects">Projects</Nav.Link>
          <Nav.Link href="https://github.com/DaronSchmit">Github</Nav.Link>
        </Nav>
      </Navbar>
    );
}

export default TopNav;