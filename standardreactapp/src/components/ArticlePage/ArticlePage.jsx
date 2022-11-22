import React from "react";

const ArticlePage = ({ match }) => {
    return(
        <div className='d-flex flex-row ' style={{height: '100vh'}}>
            <div className="p-2" style={{width:'70%'}}>
                <img src={match.image} alt="" class="img-thumbnail" />
            </div>
            <div className="d-flex flex-column p-3 bg-black" style={{width:'30%'}}>
            <div className="p-2">
                    <p class='text-light'>{match.brand}</p>
                </div>
                <div className="p-2">
                    <p class='text-light'>{match.name}</p>
                </div>
                <div className="p-2">
                    <p class='text-light'>{match.price}</p>
                </div>
                <div className="p-2">
                    <p class='text-light'>{match.category}</p>
                </div>
                <div className="p-2">
                    <p class='text-light'>{match.stars}</p>
                </div>
            </div>
        </div>
    )
}

export default ArticlePage;