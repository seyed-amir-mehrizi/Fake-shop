import React from 'react'
import { useSelector } from 'react-redux';

function Product() {
    const products = useSelector((state) => state);

    return (
        <div>
            <div className='row'>
                <div className='col-md-6'>
                    <div className='card'>
                        <img src="..." className="card-img-top" alt="..." />
                        <div className='card-body'>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
