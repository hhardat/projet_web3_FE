import React from "react";
import image from'../../img/logo192.png';

const ArticlePage = ({ match }) => {
    return(
        <div className='d-flex flex-row ' style={{height: '100vh'}}>
            <div className="p-2" style={{width:'70%'}}>
                <img src={image} alt="" class="img-thumbnail" />
            </div>
            <div className="d-flex flex-column p-3 bg-black" style={{width:'30%'}}>
            <div className="p-2">
                    <p class='text-light'>Article title</p>
                </div>
                <div className="p-2">
                    <p class='text-light'>Price</p>
                </div>
                <div className="p-2">
                    <p class='text-light'> Description</p>
                </div>
                <div className="p-2">
                    <p class='text-light'>Reviews</p>
                </div>
            </div>
        </div>
    )
}

export default ArticlePage;