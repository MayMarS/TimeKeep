import './CartEmpty.scss';
import emptyCart from '../../../../assets/img/empty-cart.svg';
import { useNavigate } from 'react-router-dom';

const CartEmpty = () => {

    const navigate = useNavigate();
    const showAllProducts = () => {
        navigate('/Shop')
    }

    return(
        <>
            <div className="cart-empty">
                <img src={emptyCart} alt="empty_cart_icon"></img>
                <h2>Your cart is empty</h2>
                <button onClick={showAllProducts} className="to-shop">Go to Shop</button>
            </div>
        </>
    )
}

export default CartEmpty;