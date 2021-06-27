import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductCatalog } from '../store/actions/productCatalogActions';


const Products = () => {

    const dispatch = useDispatch();
    const productCatalog = useSelector(state => state.productCatalog);

    useEffect(() => {
        dispatch(getProductCatalog())
    }, [dispatch])

    return (
        <div>
            {
            productCatalog && productCatalog.map(product => (
                <p>{product.name}</p>
                ))
            } 
        </div>
    )
}

export default Products
