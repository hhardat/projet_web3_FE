import Product from "components/Product/Product";
import axios from 'axios'

export const getStaticProps = async ({ params }) => {

    const id = params;

    const product = await axios.get(`http://localhost:3000/products/${id}`);

    return {
        props : {
            product,
        }
    };
}

export async function getStaticPaths() {
    const { data: products } = await axios.get("http://localhost:3000/products");
  
    return {
      paths: products.map((product) => ({
        params : {
            id: product.id,
        },
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