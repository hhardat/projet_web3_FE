import React from 'react';
import {Link, useParams} from 'react-router-dom';

const ProductList = ({ products }) => {

  const category = useParams().category;
  if(category){
    products = products.filter(p => p.category === category);
  }
  return(
    <div>
      <div className="products">
        {products.map((product)=>(
        <Link to={`/product/${product.id}`}>
          <div className="product">
          <h3>{product.name}</h3>
          <img src={`http://localhost:3001/photos/${product.pathImage}`} alt={product.name}/> 
          
          <h4>{product.stars} </h4>
          
          <h4>{product.price} $</h4>
          </div>
        </Link>
          ))}
      </div>
    </div>
  )
};
  

export default ProductList;