import ProductList from 'components/Product/ProductList';
import axios from 'axios';

export const getStaticProps = async ({params}) => {
  const {slug} = params

  const category = await axios.get(`http://localhost:3001/categories?slug=${slug}`);

  const products = await axios.get(`http://localhost:3001/products?category=${category.data[0].uriName}`);

  return {
    props: {
      category : category.data[0],
      products : products.data 
    }
  }
}


export async function getStaticPaths(){
  const {data : categories} = await axios.get(`http://localhost:3001/categories`);

  return {
    paths: categories.map((c) => ({
      params: {
        slug: c.slug
      }
    })), 
    fallback: false,
  }
}

export default function CategoryPage({category, products}){
  return (
    <div>
      <h1>{category.name}</h1>
      <ProductList products={products}/>
    </div>
  )
}
