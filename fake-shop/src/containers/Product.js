import React from 'react';
import { useSelector } from 'react-redux'


function Product() {
    const products = useSelector((state) => state.allProducts.products);
    const { id, title } = products[0];

    return (
        <div className="four column wide">
            <div className="ui link cards">
                <div className="card">
                    <div className="image">

                    </div>
                    <div className="contant">
                        <div className="header">
                            {title}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
