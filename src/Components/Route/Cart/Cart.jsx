import './Cart.scss';

const Cart = () => {

    return(
        <div className="cart">
            <div className="container">

                <div className="cart-title">
                    <h2>Cart</h2>
                    <button className="btn-delete-all">Remove all</button>
                </div>

                <div className="cart-div">

                    <div className="cart-info">
                        <img src="https://www.mvmt.com/dw/image/v2/BDKZ_PRD/on/demandware.static/-/Sites-mgi-master/default/dwc1aaec3a/images/products/28000116_fr.jpg?sw=512&sh=640&q=85" alt="product_photo"/>
                        <div>
                            <h3>Watch</h3>
                            <p>Model</p>
                        </div>
                    </div>

                    <div className="cart-quantity">
                        <button>-</button>
                        <span>1</span>
                        <button>+</button>
                    </div>
                    
                    <div className="cart-sum">
                        <span>$100</span>
                    </div>

                    <button className="btn-delete-cart-item">x</button>

                </div>

                <div className="cart-total">
                    <p>Total sum<span>$100</span></p>
                </div>


            </div>
        </div>
    )
}

export default Cart;