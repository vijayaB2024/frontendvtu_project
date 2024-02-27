import React from 'react'
import {Navbar,Nav,NavDropdown,Container,Image} from 'react-bootstrap';
const Header = () => {

   return(
      <header>
       <Navbar className='navbar-style' expand="lg">
         <Container>
         <Navbar.Brand href="#">
         <Image className='logo-img-style' 
         src='images/logo.jpg' alt="VTU" roundedCircle/>
         <h6 className='logo-text-style'>Visvervaya Technological University,Belgavi</h6>
         </Navbar.Brand> 
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse id="basic-navbar-nav">
     <Nav className="ml-auto">
         <Nav.Link href="#">Home</Nav.Link>

         <Nav.Link href="#link">About us</Nav.Link>

     <NavDropdown title="Academic" id="basic-nav-dropdown">
        <NavDropdown.Item href="#">Admission</NavDropdown.Item>
        <NavDropdown.Item href="#">criculars & Notification</NavDropdown.Item>
        <NavDropdown.Item href="#">Certificate Issued</NavDropdown.Item>
        </NavDropdown>

    <NavDropdown title="Examination" id="basic-nav-dropdown">
        <NavDropdown.Item href="#">Examination Guidlines</NavDropdown.Item>
        <NavDropdown.Item href="#">Examination Applications</NavDropdown.Item>
        <NavDropdown.Item href="#">Results</NavDropdown.Item>
    </NavDropdown>

    <NavDropdown title="VTU Departments" id="basic-nav-dropdown">
        <NavDropdown.Item href="#">Civil Engg</NavDropdown.Item>
        <NavDropdown.Item href="#">Computer Science Engg</NavDropdown.Item>
        <NavDropdown.Item href="#">Electronics & Communication</NavDropdown.Item>
    </NavDropdown>

    
    <NavDropdown title="Staff login" id="basic-nav-dropdown">
        <NavDropdown.Item href="#">Login as Admin</NavDropdown.Item>
      
    </NavDropdown>
    </Nav>
         </Navbar.Collapse>
         </Container>
      </Navbar>
      </header>
   )
}
export default Header