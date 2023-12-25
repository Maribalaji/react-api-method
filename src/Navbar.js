import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



function NavbarHeader(){
    return(
        <div>
        <Navbar className="mb-5" bg="primary" data-bs-theme="dark">
         <Container>
          <Navbar.Brand href="#home">Shows</Navbar.Brand>
          <Nav className=" text-end px-5">
            <Nav.Link href="#home" className="px-5">Home</Nav.Link>
            <Nav.Link href="#features" className="px-5">Features</Nav.Link>
            <Nav.Link href="#pricing" className="px-5">Movies</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

        </div>
    )
}
export default NavbarHeader;