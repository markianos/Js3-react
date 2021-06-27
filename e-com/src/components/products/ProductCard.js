import React from 'react';
import { Link } from 'react-router-dom'

const ProductCard = ({product, details}) => {
    return (
        <div className="col">
            <div className="card h-100">
                {details && <h1 className="text-center">{product.name}</h1>}
                <img src={product.image} alt="..." className="card-img-top h-100 p-5" />
                <div className="card-body">
                    {!details && <h5 className="card-title">{product.name}</h5>}
                    <div className="card-text">
                       {
                       details 
                        ? <p>{product.desc}</p>
                        : <p>{product.short}</p> 
                       }
                       <p className="text-danger text-right h5">{product.price} SEK</p>
                    </div>
                    <div className="d-flex justify-content-between mt-5">
                        <button className="btn btn-info">Add to Cart</button>
                    {
                        !details && 
                        <Link className="btn btn-info" to={`/products/${product._id}`}>read more</Link>
                    }
                    </div>
                    {
                        details && 
                        <div>
                            <Link className="btn btn-dark mt-5" to="/products">Go back</Link>
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
