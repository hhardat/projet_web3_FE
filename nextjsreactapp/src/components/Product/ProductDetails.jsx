import React from "react";
import Link from 'next/link';
import Back from './back.jpg';

const ProductDetails = ({ product }) => {
    console.log(Back)
    return(
        <div className='d-flex flex-row ' style={{height: '100vh'}}>
            <div className="p-2 ">
                <div className="align-items-center ">
                    <img 
                        src={`http://localhost:3001/photos/${product.pathImage}`} alt="" style={{width:'40em'}}
                    />
                </div>
            </div>
            <div className="d-flex flex-column p-3 bg-black align-items-center justify-content-center" style={{width:'100%'}}>
                <div className="p-2">
                    <h1 className='text-light'>{product.brand}</h1>
                </div>
                <br />
                <div className="p-2">
                    <h3 className='text-light'>{product.name}</h3>
                </div>
                <br />
                <div className="p-2">
                    <h4 className='text-light'>{product.price}€</h4>
                </div>
                <br />
                <div className="p-2">
                    <p className='text-light'>{product.category}</p>
                </div>
                <br />
                <div className="p-2">
                    <p className='text-light'>{product.stars} étoiles</p>
                </div>
                <div className="p-2 product">
                <Link href="/" >
                    <img src={Back.src} alt="" style={{height:'10vh'}} />
                </Link>

                </div>
            </div>
        </div>
    )
}

export default ProductDetails;