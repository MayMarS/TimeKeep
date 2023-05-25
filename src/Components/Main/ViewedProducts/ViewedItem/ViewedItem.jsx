import './ViewedItem.scss';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addProduct } from '../../../../redux/slices/cartSlice';

const ViewedItem = ({id, name, price, image, collection}) => {

    const cartItem = useSelector((state) => state.cart.products.find((obj) => obj.id === id));
    const addedCount = cartItem ? cartItem.count : 0;

    const dispatch = useDispatch();
    const onClickAdd = () => {
        const product = {
            id,
            name,
            image,
            price,
            collection
        }
        dispatch(addProduct(product))
    }

    const navigate = useNavigate();
    const showProductInfo = (productId) => {
        navigate(`/Shop/Product/${productId}`)
    }

    return(
        <div className="viewed-item">
            <img src={image} alt={`img_product_${id}`}
                onClick={() => {showProductInfo(id)}}>
            </img>
            <h3 onClick={() => {showProductInfo(id)}}>{name}</h3>
            <h4>{collection}</h4>
            <p>${price}</p>
            <button onClick={onClickAdd} className={addedCount > 0 ? "btn-buy buy-count" : "btn-buy"}>Buy
                {addedCount > 0 && <span className="count">{addedCount}</span>}
            </button>
        </div>
    )
}

export default ViewedItem;