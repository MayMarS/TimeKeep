import './CartItem.scss';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {plusProduct, minusProduct, removeProduct } from '../../../../redux/slices/cartSlice';

const CartItem = ({id, name, price, image, collection, count}) => {

    const dispatch = useDispatch();

    const onClickPlus = () => {
        dispatch(plusProduct(id))
    }
    const onClickMinus = () => {
        dispatch(minusProduct(id))
    }
    const onClickRemove = () => {
        dispatch(removeProduct(id))
    }

    const navigate = useNavigate();
    const showProductInfo = (productId) => {
        navigate(`/Shop/Product/${productId}`)
    }

    return(
        <>
            {count > 0 &&
                <div className="cart-item">
                    <div className="item-info" onClick={() => {showProductInfo(id)}}>
                        <img src={image} alt={`img_product_${id}`}/>
                        <div className="info">
                            <h3>{name}</h3>
                            <p>{collection}</p>
                        </div>
                    </div>
                    <div className="item-wrap">
                        <div className="item-quantity">
                            <button onClick={onClickMinus} className="btn-quantity btn-minus">-</button>
                            <span className="count">{count}</span>
                            <button onClick={onClickPlus} className="btn-quantity btn-plus">+</button>
                        </div>
                        <div className="item-sum">
                            <span>${price*count}</span>
                        </div>
                        <button onClick={onClickRemove} className="btn-remove-item"></button>
                    </div>
                </div>
            }
        </>
    )
}

export default CartItem;