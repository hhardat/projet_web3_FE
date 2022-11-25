const  Product= ({product}) => {


    return (
        <div>
            <p>{product.name} : {product.price} [{product.category}]</p>
            <img
            src={`http://localhost:3001/photos/${product.pathImage}`}
            />
        </div>
    )
}

export default Product