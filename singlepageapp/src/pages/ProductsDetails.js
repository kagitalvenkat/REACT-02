import React from 'react';
import { useLocation, useParams } from 'react-router-dom';


const ProductsDetails = () => {
    const params = useParams();
    const location = useLocation();
    console.log(params);
    
  return (
    <div>
      <h3>Product Details</h3><br/>
      <h3>Product Name: {params.category}<br/> </h3>
      Page No: {location.search.split('=')[1]}
    </div>
  );
}

export default ProductsDetails;
