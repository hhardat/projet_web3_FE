import React from "react";
import { useParams } from 'react-router-dom';

const ArticlePage = ({ products }) => {
    const id = useParams().id;
    const product = products.find(p => p.id === Number(id));

    return(
        <div className='d-flex flex-row ' style={{height: '100vh'}}>
            <div className="p-2">
                {<img src={`http://localhost:3001/photos/${product.pathImage}`} alt="" style={{height:'100vh'}} />}
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
            </div>
        </div>
    )
}

export default ArticlePage;