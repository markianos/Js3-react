import actiontypes from '../actiontypes';

//const initState = [] //när vi hämtat alla produkter byter vi ut mot vår array med produkter
const initState = {
    product: null,
}

const productReducer = (state = initState, action) => {
    switch(action.type) {
        case actiontypes().product.set:
            return {
                ...state,
                product: action.payload
            }
            

            // case actiontypes().product.clear:
            //     state = null
            //     return state

            case actiontypes().product.clear:
                return {
                    ...state,
                    product: null                    
                }

        default: return state
    }
}

export default productReducer;