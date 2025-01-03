import React, { useState } from 'react';
import { Col, Row, Card } from 'react-bootstrap';
import { product2Datas } from '../Data/Product2'; 
import Sidenav from './Sidenav';
import Phonenav from './Phonenav';
import { Link } from 'react-router-dom';

function Headphones() {
  const [selectedBrand, setSelectedBrand] = useState('All'); 
  const filteredProducts = selectedBrand === 'All' 
    ? product2Datas 
    : product2Datas.filter((product) => product.brand === selectedBrand);

  return (
    <Row>
      <Col sm={2}>
        <Sidenav />
      </Col>
      <Col sm={10}>
        <Phonenav setSelectedBrand={setSelectedBrand} /> 
        <div className='tv'>
          {filteredProducts.map((h) => (
            <Col key={h.id}> 
              <Link to={`/headdetails/${h.id}`} className="text-decoration-none">
                <Card className="card">
                  <Card.Body>
                    <img src={h.image} alt={h.brand} style={{ width: '200px', height: '150px' }} />
                    <Card.Title>{h.brand}</Card.Title>
                    <Card.Text>
                      <strong>Model:</strong> {h.Model} <br />
                      <strong>Frequency:</strong> {h.Frequency} <br />
                      <strong>Connectivity:</strong> {h.Connectivity} <br />
                      <strong>Price:</strong> {h.Price}
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

export default Headphones;
