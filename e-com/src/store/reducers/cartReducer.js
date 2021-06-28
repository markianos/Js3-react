import actiontypes from '../actiontypes';

const initState = {
    shoppingCart: [],
    totalCartQuantity: 0,
    totalCartAmount: 0
}


const cartReducer = (state = initState, action) => {
    switch(action.type) {
        case actiontypes().cart.add:
            let itemIndex = state.shoppingCart.findIndex(product => product._id === action.payload._id)
            itemIndex < 0
            ? state.shoppingCart = [...state.shoppingCart, {...action.payload, quantity: 1}] //om den inte finns lägger vi till en
            : state.shoppingCart[itemIndex].quantity += 1 // om den redan finns plussar vi på aktuella värdet med en

            return state

        default:
            return state
    }
}

export default cartReducer; {

}