import { useState, useEffect } from 'react';
import productService from '../../services/product';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const hook = () => {
     console.log('effect');
     productService
     .getProducts()
     .then(initialProducts => {
       setProducts(initialProducts);
     });
  }
  useEffect(hook, []);
  
  return(
    <div>
      <div className="products">
        {products.map((product)=>(
        <div className="product" >
          <h3>{product.name}</h3>
          <img src={product.imgUrl}/> 
          <h4>{product.price} $</h4>
          </div>
          ))}
      </div>
    </div>
  )
};
  

export default ProductList;