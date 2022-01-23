import React from 'react'
import { useSelector } from 'react-redux';

function Product() {
    const products = useSelector((state) => state);
    const productList = products.allProducts.products;
    return (
        <div>
            <div className='row h-100'>
                <div className='card-group h-100'>
                    {
                        productList.map((product) => {
                            return <div className='col-md-3 my-2 h-100' key={product.id}>
                                <div className='card h-100'>
                                    <img src={product.image} className="card-img-top" alt={product.image}
                                        height={240}
                                    />
                                    <div className='card-body h-100'>
                                        <h4>{product.category}</h4>
                                        <p className="card-text">
                                            {product.title}
                                        </p>
                                        <h5>{product.price} $</h5>
                                    </div>
                                    <div className='card-footer'>
                                        <div className='d-flex justify-content-between'>
                                            <div>Rate : {product.rating.rate}</div>
                                            <div>Count : {product.rating.count}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Product
