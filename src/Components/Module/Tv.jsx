import React, { useState } from 'react';
import { Col, Row, Card } from 'react-bootstrap';
import { productDatas } from '../Data/Product1';
import Headnav from './Headnav';
import Sidenav from './Sidenav';
import { Link } from 'react-router-dom';

function Tv() {
  const [selectedBrand, setSelectedBrand] = useState(''); 
  const filteredProducts = selectedBrand
    ? productDatas.filter(product => product.brand.toLowerCase() === selectedBrand.toLowerCase())
    : productDatas;

  return (
    <Row>
      <Col sm={2}>
        <Sidenav />
      </Col>
      <Col sm={10}>
        <Headnav setSelectedBrand={setSelectedBrand} />
        <div className='tv'>
          {filteredProducts.map((e) => (
            <Col key={e.id}> 
              <Link to={`/tvdetails/${e.id}`} className="text-decoration-none">
                <Card className="card">
                  <Card.Body>
                    <img
                      src={e.image}
                      style={{ width: '200px', height: '150px' }}
                      className="text-decoration-none"
                      alt={e.brand}
                    />
                    <Card.Title>{e.brand}</Card.Title>
                    <Card.Text>
                      <strong>Display:</strong> {e.Display} <br />
                      <strong>Screen Size:</strong> {e.screensize} inches <br />
                      <strong>Dimensions:</strong> {e.Dimensions} <br />
                      <strong>Price:</strong> {e.Price}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </div>
      </Col>
    </Row>
  );
}

export default Tv;
