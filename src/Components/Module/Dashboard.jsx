import React from 'react';
import { Carousel, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { productDatas } from '../Data/Product1';
import { product2Datas } from '../Data/Product2';
import { product3Datas } from '../Data/Product3';
import Header from '../Header';

function Dashboard() {
  const display = productDatas.slice(0, 3);
  const hphone = product2Datas.slice(0, 4);
  const hphones = product2Datas.slice(7, 11);
  const hphoness = product2Datas.slice(1, 5);
  const speaker = product3Datas.slice(0, 3);

  return (
    <div className="background">
      <Header />
      <Row>
        <Col sm={12}>
          <div className="dash">
            {
              display.map((e) => {
                return (
                  <Link to={`/tvdetails/${e.id}`} className="text-decoration-none" key={e.id}>
                    <div className="xyz">
                      <img src={e.image} alt={`${e.brand} TV`} style={{ width: '250px' }} /><br />
                      <strong>Brand:</strong>{e.brand}<br />
                      <strong>Display:</strong> {e.Display} <br />
                      <strong>Screen Size:</strong> {e.screensize} inches <br />
                      <strong>Dimensions:</strong> {e.Dimensions}
                    </div>
                  </Link>
                );
              })
            }
          </div>
          <Col className="text-center mt-1">
            <Link to="/tv" className="small">View More</Link>
          </Col>
          <Row>
            <Col sm={4}>
              <h4>Min. 25% off</h4>
              <div className="head">
                {
                  hphone.map((h) => {
                    return (
                      <Link to={`/headdetails/${h.id}`} className="text-decoration-none" key={h.id}>
                        <div className="qwe">
                          <img src={h.image} alt={`${h.brand} headphone`} style={{ width: '150px' }} /><br />
                          <strong>Brand:</strong>{h.brand}<br />
                          <strong>Price:</strong> {h.Price}<br />
                        </div>
                      </Link>
                    );
                  })
                }
              </div>
            </Col>
            <Col sm={4}>
              <h4>Min. 20% off</h4>
              <div className="head">
                {
                  hphones.map((h) => {
                    return (
                      <Link to={`/headdetails/${h.id}`} className="text-decoration-none" key={h.id}>
                        <div className="qwe">
                          <img src={h.image} alt={`${h.brand} headphone`} style={{ width: '150px' }} /><br />
                          <strong>Brand:</strong>{h.brand}<br />
                          <strong>Price:</strong> {h.Price}<br />
                        </div>
                      </Link>
                    );
                  })
                }
              </div>
            </Col>
            <Col sm={4}>
              <h4>Min. 10% off</h4>
              <div className="head">
                {
                  hphoness.map((h) => {
                    return (
                      <Link to={`/headdetails/${h.id}`} className="text-decoration-none" key={h.id}>
                        <div className="qwe">
                          <img src={h.image} alt={`${h.brand} headphone`} style={{ width: '150px' }} /><br />
                          <strong>Brand:</strong>{h.brand}<br />
                          <strong>Price:</strong> {h.Price}<br />
                        </div>
                      </Link>
                    );
                  })
                }
              </div>
            </Col>
          </Row>
          <Link to="/headphone">View More</Link>
        </Col>
      </Row>
      <Row>
        <Col sm={7}>
          <div className="speaker">
            {
              speaker.map((s) => {
                return (
                  <Link to={`/speakdetails/${s.id}`} className="text-decoration-none" key={s.id}>
                    <div className="plm">
                      <img src={s.image} alt={`${s.Brand} speaker`} style={{ width: '150px' }} /><br />
                      <strong>Brand:</strong>{s.Brand}<br />
                      <strong>Model:</strong> {s.Model} inches <br />
                      <strong>Price:</strong> {s.Price}<br />
                    </div>
                  </Link>
                );
              })
            }
          </div>
          <Link to="/speakers">View More</Link>
        </Col>
        <Col sm={5}>
          <Carousel data-bs-theme="dark" controls={true} interval={3000}>
            <Carousel.Item>
              <img
                className="d-block w-100" style={{ height: 300 }}
                src="https://img.freepik.com/free-vector/special-discount-background_23-2147820058.jpg?t=st=1734186919~exp=1734190519~hmac=b806d23ac61e2f4d84f72c432d69911eb91b6cc11c29b23e4c24aff9f0ea8b23&w=740"
                alt="Special discount promotion"
              />
              <Carousel.Caption>
                <h5>First slide label</h5>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100" style={{ height: 300 }}
                src="https://img.freepik.com/free-vector/black-friday-background_23-2147947294.jpg?t=st=1734186961~exp=1734190561~hmac=ad3449baba1ba61946724c4f3a5377c06c366a451bcd2576125472e23ba6bddc&w=740"
                alt="Black Friday sale"
              />
              <Carousel.Caption>
                <h5>Second slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100" style={{ height: 300 }}
                src="https://img.freepik.com/free-vector/opening-soon-background-flat-style_23-2148248445.jpg?ga=GA1.1.2133182942.1731137627&semt=ais_hybrid"
                alt="Opening soon announcement"
              />
              <Carousel.Caption>
                <h5>Third slide label</h5>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </div>
  );
}

export default Dashboard;
