import actiontypes from '../actiontypes';

const initState = [] //när vi hämtat alla produkter byter vi ut mot vår array med produkter

const productCatalogReducer = (state = initState, action) => {
    switch(action.type) {
        case actiontypes().productCatalog.set:
            state = action.payload
            return state 

        default: return state
    }

}

export default productCatalogReducer;