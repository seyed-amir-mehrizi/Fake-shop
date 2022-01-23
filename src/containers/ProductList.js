import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setProduct } from '../redux/actions/productActions';
import Product from './Product'

function ProductList() {
    const dispatch = useDispatch()
    const fetchProduct = async () => {
        try {
            const result = await axios.get('https://fakestoreapi.com/products');
            dispatch(setProduct(result.data))

        } catch (error) {
            console.error(error)
        }
    }
    useEffect(() => {
        fetchProduct();
    }, []);


    return (
        <div className='mt-2'>
            <Product />
        </div>
    )
}

export default ProductList
