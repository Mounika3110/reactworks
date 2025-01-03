import React from 'react';
import { useCart } from '../../Cart/Cartcontext';
import { Link } from 'react-router-dom';

function Topbar() {
  const { cartItems } = useCart();

  return (
    <div className="topbar">
      <div className="cart-button-container">
        <Link to='/cartpage'>
          <button type="button" className="btn btn-outline-primary m-2 cart">
            Cart ({cartItems.length}) 
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Topbar;
