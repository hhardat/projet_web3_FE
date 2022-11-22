import React from "react";

const ArticlePage = ({ match }) => {
    return(
        <div className='d-flex flex-row ' style={{height: '100vh'}}>
            <div className="p-2">
                <img src={match.image} alt="" style={{height:'100vh'}} />
            </div>
            <div className="d-flex flex-column p-3 bg-black align-items-center justify-content-center" style={{width:'100%'}}>
                <div className="p-2">
                    <h1 class='text-light'>{match.brand}</h1>
                </div>
                <br />
                <div className="p-2">
                    <h3 class='text-light'>{match.name}</h3>
                </div>
                <br />
                <div className="p-2">
                    <h4 class='text-light'>{match.price}€</h4>
                </div>
                <br />
                <div className="p-2">
                    <p class='text-light'>{match.category}</p>
                </div>
                <br />
                <div className="p-2">
                    <p class='text-light'>{match.stars} étoiles</p>
                </div>
            </div>
        </div>
    )
}

export default ArticlePage;