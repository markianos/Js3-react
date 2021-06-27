import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductCatalog } from '../store/actions/productCatalogActions';


const Product = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductCatalog())
    }, [])

    return (
        <div>
            Products 
        </div>
    )
}

export default Product
