import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Headernav({ setSelectedBrand }) {
  const handleBrandClick = (brand) => {
    setSelectedBrand(brand); 
  };

  return (
    <Navbar fixed="top" collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/dashboard">TV Company</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {['lg', 'sony', 'hisense', 'samsung', 'tcl', 'mi', 'acer', 'vu'].map((brand) => (
              <Nav.Link 
                as={Link} 
                to={`/tv${brand}`} 
                key={brand}
                onClick={() => handleBrandClick(brand)} 
              >
                {brand.charAt(0).toUpperCase() + brand.slice(1)} 
              </Nav.Link>
            ))}
          </Nav>
          <Nav>
            <div className='d-flex gap-2'>
            <Link to='/dashboard'><p>Back</p></Link> 
            <div className='logout'>

<button type="button" class="btn btn-outline-primary" ><Link to={'/'}>Logout</Link></button>

      </div>
      </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Headernav;
 