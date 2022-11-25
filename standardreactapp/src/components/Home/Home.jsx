import ProductList from "../Product/ProductList";
//import { Routes } from 'react-router-dom';

const Home = ({ products }) => {
  return(
    <div>     
      <ProductList products={products}></ProductList>
    </div>
  )
}
  export default Home;
  