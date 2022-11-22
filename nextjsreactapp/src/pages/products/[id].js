import Product from "components/Product/Product";
import axios from 'axios'

export const getStaticProps = async ({ params }) => {

    const {id} = params;

    const product = await axios.get(`http://localhost:3001/products/${id}`);
    
    const image = await axios.get(`http://localhost:3001/photos/${product.data.pathImage}`);
    
    console.log(Object.keys(image))
    return {
        props : {
            product : product.data,
            image : image.data
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

  export default function ProductPage({ product, image }) {
  
    return (
        <div>
            <Product product={product} image={image} />
        </div>
    );
  }