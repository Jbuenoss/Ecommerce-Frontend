import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import './styleComponent.css';

import { Link } from 'react-router-dom';

function NavbarComponent() {

  return (
    <Navbar expand="sm" className="Nav-bg p-3">

      <Container>
        <Link className='navbar-brand fs-4 fw-bold' to='/' >ECOMMERCE</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav>
            <Link to='/products' className='nav-link'>All Products</Link>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Electronics</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Clothing</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Books</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">ComputersAndAccessories</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Hobbies</NavDropdown.Item>
            </NavDropdown>

            <Link className='nav-link' to='login'>Sign In</Link>
            <Link className='nav-link' to='register'>Sign Up</Link>

          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default NavbarComponent