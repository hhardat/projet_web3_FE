const Product = ({product}) => {
    return (
        <li key={product.id}>
            {product.name}
        </li>
    )
}

export default Product