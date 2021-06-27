const actiontypes = () => {
    return {
        productCatalog: {
            set: 'PROCUCT_CATALOG_SET'
        },
        product: {
            set: 'PRODUCT_SET',
            clear: 'PRODUCT_CLEAR'
        }
    }
}

export default actiontypes;