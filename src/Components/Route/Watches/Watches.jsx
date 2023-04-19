import './Watches.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Product from '../Products/Product.jsx/Product';
import WatchesFilters from './WatchesFilters/WatchesFilters';

const Watches = () => {

    const [products, setProducts] = useState([]);

    // const goodsId = useSelector((state) => state.filter.watchesGoods);

    useEffect(() => {

        // const goods = goodsId === 1 ? `goods=${goodsId}` : '';
        axios.get(`https://6433edd7582420e2316f4853.mockapi.io/api/TimeKeep/products?goods=${1}`
        )
        .then(response => {
            setProducts(response.data)
        })
    })

    return(
        <section className="watches">
            <div className="watches-bg">
                <div className="watches-title">
                    <h3>Shop all watches</h3> 
                    <p>Trending in the world. Find your favourite style.</p>
                </div>
            </div>
            <div className="products">
                <div className="container">
                    <h2 className="title">Shop all watches</h2>
                    <h4>Choose your ideal watch</h4>
                    <div className="products-btns">
                        <WatchesFilters />
                        {/* <Sort /> */}
                    </div>
                    <div className="products-div">
                        {
                            products.map((obj) => <Product key={obj.id} {...obj} />)
                        }
                    </div>
                    {/* <Pagination /> */}
                </div>
            </div>
        </section>
    )
}

export default Watches;