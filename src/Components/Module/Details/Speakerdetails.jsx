import React, { useState } from 'react';
import Sidenav from '../Sidenav';
import { product3Datas } from '../../Data/Product3';
import { useParams } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import { useCart } from '../../Cart/Cartcontext';
import Topbar from './Topbar'

function Speakerdetails() {
  const [cart, setCart] = useState(0);
  const { id } = useParams();
  const productData = product3Datas.find((e) => e.id === Number(id));

  const { addToCart } = useCart(); 

  return (
    <div>
      <Topbar/>
      <Row>
        <Col sm={2}>
          <Sidenav />
        </Col>
        <Col sm={10}>
          <div className='container d-flex justify-content-around align-items-center py-4'>
            <div className='data'>
              <p>{productData.id}</p>
              <p>{productData.brand}</p>
              <p>{productData.size}</p>
              <p>{productData.Model}</p>
              <p>{productData.weight}</p>
              <p>{productData.Price}</p>
              <button 
                className='btn btn-outline-primary' 
                onClick={() => {
                  addToCart(productData); 
                  setCart(cart + 1); 
                }}
              >
                Add to cart
              </button>
            </div>
            <div className='product'>
              <img src={productData.image} style={{ width: "300px" }} alt="" />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Speakerdetails;
