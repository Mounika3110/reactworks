import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Phonenav({ setSelectedBrand }) {
  return (
    <Navbar fixed="top" collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/dashboard">HeadPhones</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => setSelectedBrand('boAT')}>boAT</Nav.Link>
            <Nav.Link onClick={() => setSelectedBrand('OnePlus')}>OnePlus</Nav.Link>
            <Nav.Link onClick={() => setSelectedBrand('JBL')}>JBL</Nav.Link>
            <Nav.Link onClick={() => setSelectedBrand('Boult')}>Boult</Nav.Link>
            <Nav.Link onClick={() => setSelectedBrand('Sony')}>Sony</Nav.Link>
            <Nav.Link onClick={() => setSelectedBrand('realme')}>realme</Nav.Link>
            <Nav.Link onClick={() => setSelectedBrand('ZEBRONICS')}>ZEBRONICS</Nav.Link>
            <Nav.Link onClick={() => setSelectedBrand('Samsung')}>Samsung</Nav.Link>
            <Nav.Link onClick={() => setSelectedBrand('Noise')}>Noise</Nav.Link>
            <Nav.Link onClick={() => setSelectedBrand('pTron')}>pTron</Nav.Link>
          </Nav>
          <Nav>
            <Link to='/dashboard'>
              <p>Back</p>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Phonenav;
