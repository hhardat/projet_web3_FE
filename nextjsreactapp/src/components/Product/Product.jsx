import Image from 'next/image'

const  Product= ({product, image}) => {


    return (
        <div>
            <p>{product.name} : {product.price} [{product.category}]</p>
            <img
            src={image}
            />
        </div>
    )
}

export default Product