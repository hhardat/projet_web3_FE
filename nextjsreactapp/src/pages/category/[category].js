import axios from 'axios'
import ProductList from "components/Product/ProductList";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRouter } from 'next/router'


export const getServerSideProps = async () => {
  const result = await axios.get("http://localhost:3001/products")
  return {
    props: {
      products : result.data
    },
  };
};

export default function indexPage({ products }) {
  const router = useRouter()
  const category = router.query.category
  products = products.filter(p => p.category===category)
  return (
        <div>
            <ProductList products={ products } />
        </div>
    );
}