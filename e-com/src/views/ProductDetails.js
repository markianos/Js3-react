import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/products/ProductCard';
import { clearProduct, getProductById } from '../store/actions/productCatalogActions';

const ProductDetails = () => {

    const id = useParams().id
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductById(id))

        return () => {
            dispatch(clearProduct())
        }
    }, [dispatch, id])

    const product = useSelector(state => state.product.product)

    return (
        <div className="product-detail-image">
            { product && <ProductCard product={product} details={true} /> } 
            {/* lektion 8 del1 2:27 */}
        </div>
    )
}

export default ProductDetails
 