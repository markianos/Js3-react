import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/actions/cartActions';

const ProductCard = ({product, details}) => {

    const dispatch = useDispatch()


    return (
        <div className="col">
            <div className="card h-100">
                {details && <h1 className="text-center">{product.name}</h1>}
                <img src={product.image} alt="..." className="card-img-top h-75 p-5" />
                <div className="card-body">
                    {!details && <h5 className="card-title">{product.name}</h5>}
                    <div className="card-text">
                       {
                       details 
                        ? <p>{product.desc}</p>
                        : <p>{product.short}</p> 
                       }
                       <p className="text-danger h5 mt-3">{product.price} SEK</p>
                    </div>
                    <div className="m-auto text-center mt-5">
                        <button className="btn btn-danger me-3 my-2 w-75" onClick={() => {
                            dispatch(addToCart(product))
                        }}>Add to Cart</button>
                    {
                        !details && 
                        <Link className="btn btn-info me-3 w-75" to={`/products/${product._id}`}>read more</Link>
                    }
                    </div>
                    {
                        details && 
                        <div>
                            <Link className="product-detail-image btn btn-outline mt-5 " to="/products"> <i className="fa fa-arrow-circle-left me-3"></i> Go back</Link>
                        </div>
                    }
                </div>
            </div>
        </div>
    ) 
}

ProductCard.defaultProps = {
    details: false 
}

export default ProductCard
