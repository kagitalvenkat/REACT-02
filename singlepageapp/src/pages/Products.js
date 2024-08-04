import React from 'react';
import { Link } from 'react-router-dom';

const Products = () => {       
  return (
   <div>
    <h3>Products Page</h3><hr/>
      <Link to="/products/computer">Computer</Link><br/>
      <Link to="/products/computer?pageno=1">page</Link>
   </div>
  );
}

export default Products;
