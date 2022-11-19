import Link from 'next/link';
import axios from 'axios'
import ProductList from "components/Product/ProductList";

export const getStaticProps = async () => {
  const result = await axios.get("http://localhost:3000/products")
  return {
    props: {
      products : result.data
    },
  };
};

export default function ProductPage({ products }) {
    return (
        <div>
            <Link href="/">Home</Link>
            <h1>Products</h1>

            <ProductList products={ products } />
        </div>
    );
}