import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { removeSelectProduct, selectProduct } from '../redux/actions/productActions';

function ProductDetail() {
    const product = useSelector((state) => state.product);
    const param = useParams();
    const dispatch = useDispatch();
    const fetchProduct = async () => {
        try {
            const product = await axios.get(`https://fakestoreapi.com/products/${param.id}`);
            dispatch(selectProduct(product.data))
        } catch (err) {
            console.error("error : ", err);
        }
    }
    useEffect(() => {
        if (param && param.id !== '')
            fetchProduct();

        return () => {
            dispatch(removeSelectProduct())
        }
    }, [param.id])
    return (
        <div className='mt-2'>

            <div className="card mb-3" >
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={product.image} className="card-img-top" alt={product.image} height={320} />

                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">  {product.title}</h5>
                            <p className="card-text">
                                {product.description}
                            </p>
                            <p className="card-text"><small className="text-muted">
                                {product.price}
                            </small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail
