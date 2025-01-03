import React, { useState } from 'react';
import { Col, Row, Card } from 'react-bootstrap';
import { product3Datas } from '../Data/Product3';  
import Sidenav from './Sidenav';
import Speakersnav from './Speakersnav';
import { Link } from 'react-router-dom';

function Speakers() {
  const [selectedBrand, setSelectedBrand] = useState('All');
  const filteredProducts = selectedBrand === 'All'
    ? product3Datas
    : product3Datas.filter((product) => product.brand === selectedBrand);

  return (
    <Row>
      <Col sm={2}>
        <Sidenav />
      </Col>
      <Col sm={10}>
        <Speakersnav setSelectedBrand={setSelectedBrand} /> 
        <div className="speaker">
          {filteredProducts.map((s) => (
            <Col key={s.id}> 
              <Link to={`/speakdetails/${s.id}`} className="text-decoration-none">
                <Card className="card">
                  <Card.Body>
                    <img src={s.image} alt={s.brand} style={{ width: '200px', height: '150px' }} />
                    <Card.Title>{s.brand}</Card.Title>
                    <Card.Text>
                      <strong>Battery:</strong> {s.battery} <br />
                      <strong>Brand:</strong> {s.brand} <br />
                      <strong>Weight:</strong> {s.weight} <br />
                      <strong>Model:</strong> {s.Model} <br />
                      <strong>Price:</strong> {s.Price}
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

export default Speakers;
