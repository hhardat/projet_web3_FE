import Image from 'next/image'

const  Product= ({product}) => {


    return (
        <div className='product'>
            <h3>{product.name}</h3>
            <p>{product.name} : {product.price} [{product.category}]</p>
            <img
            src={`http://localhost:3001/photos/${product.pathImage}`}
            />
            <h4>{product.stars} </h4>
            <h4>{product.price} $</h4>
        </div>
    )
}

export default Product