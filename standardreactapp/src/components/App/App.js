import {React, useState, useEffect} from 'react';
import NavBar from '../NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from '../Home/Home';
import './App.css'
import ArticlePage from '../ArticlePage/ArticlePage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import productService from '../../services/product';
import ProductList from '../Product/ProductList';

const App = () => {

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
    <Router>
      <div>
        <NavBar categories={[...new Set(products.map(product => product.category))]}/>
      </div>
      <Routes>
        <Route path="/product/:id" element={<ArticlePage products={products}/>} /> 
        <Route path="/" element={<Home products={products}/>} />
        <Route path="/filtered/:category" element={<ProductList products={products}/>} />
      </Routes>
    </Router>
  )
} 

export default App;
