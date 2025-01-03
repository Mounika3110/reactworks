import React from 'react';
import { Link } from 'react-router-dom';

function Sidenav() {
  return (
    <div className='side'>
      <ul>
        <li><Link to={'/tv'}>TV</Link></li>
        <li><Link to={'/headphone'}>Headphones</Link></li>
        <li><Link to={'/speakers'}>Speakers</Link></li>
      </ul>
    </div>
    
  );
  
}
export default Sidenav;
