import React from 'react';
import { useSelector } from 'react-redux';
import CartProduct from './CartProduct';



const ShoppingCart = () => {

const shoppingCart = useSelector(state => state.cartReducer.shoppingCart)
const totalCartAmount = useSelector(state => state.cartReducer.totalCartAmount);

    const empty = (
        <div className="p-2 d-flex justify-content-center align-items-center">No items selected</div>

    )

    return (
        <div className="p-3">
            {
            shoppingCart.map(product => (
                <CartProduct product={product} key={product._id} /> 
            ))
        }

        {!shoppingCart.length && empty}
            <div className="dropdown-divider"> </div>
                <div className="p-2 d-flex justify-content-between align-items-center">
                    <div>
                        <div>Total: <span className="text-danger h5">{totalCartAmount}  </span>
                    </div>
                    <small className="text-muted">inc. vat</small>
                    </div>
                    <button className="btn btn-info">Checkout</button>
                </div>
        </div>
    )
}



export default ShoppingCart



