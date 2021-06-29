const actiontypes = () => {
    return {
        productCatalog: {
            set: 'PROCUCT_CATALOG_SET'
        },
        product: {
            set: 'PRODUCT_SET',
            clear: 'PRODUCT_CLEAR'
        },
        cart:{
            add: 'ADD_TO_CART',
            sub: 'REMOVE_FROM_CART',
            delete: 'DELETE_FROM_CART',
            clear: 'CLEAR_CART'
        }
    }
}

export default actiontypes;