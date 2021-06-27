import React from 'react';
import { Link } from 'react-router-dom'

const ProductCard = ({product}) => {
    return (
        <div className="col">
            <div className="card h-100">
                <img src={product.image} alt="..." className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <div className="card-text">
                        <p>{product.short}</p>
                        <p className="text-danger text-right h5">{product.price} SEK</p>
                    </div>
                    <div className="d-flex justify-content-between mt-5">
                        <button className="btn btn-info">Add to Cart</button>
                        <Link className="btn btn-info" to={`/products/${product._id}`}>read more</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
