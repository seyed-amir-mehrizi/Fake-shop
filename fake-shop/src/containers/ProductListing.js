import React from 'react'
import { useSelector } from 'react-redux'
import Product from './Product';

function ProductListing() {
    const products = useSelector((state)=>state);
    console.log("products : " , products);
    return (
        <div className="ui grid container">
            <Product />
        </div>
    ) 
}

export default ProductListing
