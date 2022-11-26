import Link from "next/link";

import Product from "components/Product/Product";

const ProductList = ({products}) => {
    if(!products) return null

    return (
        <div>
          <div className="products">
          {products.map((product) => (
            <div key={product.id}>
              <Link href={`/products/${product.id}`}>
                  <Product product={product}/>              
              </Link>
            </div>
          ))}
          </div>
        </div>
    )
}

export default ProductList;