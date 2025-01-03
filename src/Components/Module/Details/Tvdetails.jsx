import React, { useState } from 'react';
import Sidenav from '../Sidenav';
import { productDatas } from '../../Data/Product1';
import { useParams } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import { useCart } from '../../Cart/Cartcontext';
import { Link } from 'react-router-dom';
import Topbar from './Topbar'

function Tvdetails() {
  const [cart, setCart] = useState(0);
  const { id } = useParams();
  const productData = productDatas.find((e) => e.id=== Number(id));

  const { addToCart } = useCart(); 

  return (
    <div>
                <Topbar />
      <Row>
        <Col sm={2}>
          <Sidenav />
        </Col>
        <Col sm={10}>
          <div className='container d-flex justify-content-around align-items-center py-4'>
            <div className='data'>
              <p>{productData.id}</p>
              <p>{productData.brand}</p>
              <p>{productData.Display}</p>
              <p>{productData.screensize}</p>
              <p>{productData.Dimensions}</p>
              <Link to="/cartpage">
              <button 
                className='btn btn-outline-primary' 
                onClick={() => {
                  addToCart(productData); 
                  setCart(cart + 1); 
                }}
              >
                Add to cart
              </button>
              </Link>
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

export default Tvdetails;
