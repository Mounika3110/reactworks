import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Speakersnav({ setSelectedBrand }) {
  return (
    <Navbar fixed="top" collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/dashboard">Speakers Brand</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => setSelectedBrand('boAT')}>boAT</Nav.Link>
            <Nav.Link onClick={() => setSelectedBrand('Bose')}>Bose</Nav.Link>
            <Nav.Link onClick={() => setSelectedBrand('JBL')}>JBL</Nav.Link>
            <Nav.Link onClick={() => setSelectedBrand('Marshall')}>Marshall</Nav.Link>
            <Nav.Link onClick={() => setSelectedBrand('Sony')}>Sony</Nav.Link>
            <Nav.Link onClick={() => setSelectedBrand('Tribit')}>Tribit</Nav.Link>
            <Nav.Link onClick={() => setSelectedBrand('ZEBRONICS')}>ZEBRONICS</Nav.Link>
            <Nav.Link onClick={() => setSelectedBrand('PHILIPS')}>PHILIPS</Nav.Link>
            <Nav.Link onClick={() => setSelectedBrand('MiVi')}>MiVi</Nav.Link>
            <Nav.Link onClick={() => setSelectedBrand('Amazon')}>Amazon</Nav.Link>
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

export default Speakersnav;
