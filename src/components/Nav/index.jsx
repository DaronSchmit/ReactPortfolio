import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function TopNav(props){
    return(
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand>Daron Schmit</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/ReactPortfolio/#">Home</Nav.Link>
          <Nav.Link href="/ReactPortfolio/#/Projects">Projects</Nav.Link>
          <Nav.Link href="https://github.com/DaronSchmit">Github</Nav.Link>
          <Nav.Link href="https://linkedin.com/in/Daron-Schmit">LinkedIn</Nav.Link>
        </Nav>
      </Navbar>
    );
}

export default TopNav;