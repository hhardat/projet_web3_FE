const Product = ({product}) => {
    return (
        <p>{product.name} : {product.price} [{product.category}]</p>
    )
}

export default Product