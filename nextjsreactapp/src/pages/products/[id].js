import Product from "components/Product/Product";
import axios from 'axios'

export const getStaticProps = async ({ params }) => {

    const {id} = params;

    const product = await axios.get(`http://localhost:3001/products/${id}`);
    return {
        props : {
            product : product.data,
        }
    };
}

export async function getStaticPaths() {
  const {data : products} = await axios.get(`http://localhost:3001/products/`);

  return {
  paths: products.map((p) => ({
    params: {
      id : p.id.toString()
    }
  })),
  fallback: false,
};
}

  export default function ProductPage({ product }) {
    return (
        <div>
            <Product product={product} />
        </div>
    );
  }