import React, { useState, useEffect } from 'react';
import Sidenav from '../Sidenav';
import { useParams } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import { useCart } from '../../Cart/Cartcontext';
import Topbar from './Topbar';

function Headdetails() {
  const [productData, setProductData] = useState(null);
  const { id } = useParams();
  const { addToCart } = useCart(); 

  useEffect(() => {
    // Retrieve data from local storage
    const retrievedData = localStorage.getItem('product2Datas');
    if (retrievedData) {
      const product2Datas = JSON.parse(retrievedData);
      const foundProduct = product2Datas.find((e) => e.id === Number(id));
            setProductData(foundProduct);
    }
  }, [id]);

  if (!productData) {
    return <div>Product not found or loading...</div>; 
  }

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
              <p>{productData.Frequency}</p>
              <p>{productData.Model}</p>
              <p>{productData.Connectivity}</p>
              <p>{productData.Price}</p>
              <button 
                className='btn btn-outline-primary' 
                onClick={() => {
                  addToCart(productData);
                }}
              >
                Add to cart
              </button>
            </div>
            <div className='product'>
              <img src={productData.image} style={{ width: "300px" }} alt={productData.Model} />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Headdetails;