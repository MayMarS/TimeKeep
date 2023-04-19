import './Cart.scss';
import CartItem from './CartItem/CartItem';
import CartEmpty from './CartEmpty/CartEmpty';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { clearAll } from '../../../redux/slices/cartSlice';

const Cart = () => {

    const {products, totalPrice} = useSelector((state) => state.cart);
    const totalCount = products.reduce((sum, item) => sum + item.count, 0);
    const dispatch = useDispatch();

    const onClickClear = () => {
        dispatch(clearAll())
    }

    const navigate = useNavigate();
    const showAllProducts = () => {
        navigate('/Shop')
    }

    if(!totalCount) {
        return <CartEmpty/>
    }

    return(
        <div className="cart">
            <div className="container">
                <div className="cart-title">
                    <h2>Your Cart</h2>
                    <span onClick={onClickClear} className="btn-clear-all">Clear all</span>
                </div>
                <div className="cart-div">
                    {
                        products.map(item => <CartItem key={item.id} {...item} />)
                    }
                </div>
                <div className="cart-total">
                    <p>Total items: <span>{totalCount}</span></p>
                    <p>Total sum: <span>${totalPrice}</span></p>
                </div>
                <div className="cart-btns">
                    <button onClick={showAllProducts} className="btn-back">Come back</button>
                    <button className="btn-order">Make an order</button>
                </div>
            </div>
        </div>
    )
}

export default Cart;