import React, { useState, useEffect } from "react";
import Product from "components/Product/Product";
import axios from 'axios'
import ProductList from "components/Product/ProductList";

export const getStaticProps = async context => {
  const result = await axios.get("http://localhost:3001/products")
  return {
    props: {
      products : result.data
    },
  };
};

const IndexPage = ({products}) =>{
  return(
    <div>
      <ProductList products={products}/>
    </div>
  )
};

export default IndexPage;
