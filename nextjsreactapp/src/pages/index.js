import axios from 'axios'
import ProductList from "components/Product/ProductList";
import 'bootstrap/dist/css/bootstrap.min.css';


export const getServerSideProps = async () => {
  const result = await axios.get("http://localhost:3001/products")
  return {
    props: {
      products : result.data
    },
  };
};

export default function indexPage({ products }) {
    return (
        <div>
            <ProductList products={ products } />
        </div>
    );
}
