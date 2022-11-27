import Link from 'next/link';
import axios from 'axios'
import ProductList from "components/Product/ProductList";

export const getServerSideProps = async () => {
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