import './Watches.scss';
import { useState, useEffect } from 'react';
import { useSelector} from 'react-redux';
import axios from 'axios';
import Product from '../Products/Product/Product';
import WatchesFilters from './WatchesFilters/WatchesFilters';

const Watches = () => {

    const [products, setProducts] = useState([]);
    const genderId = useSelector((state) => state.filter.gender);

    useEffect(() => {
        // axios.get(`https://6433edd7582420e2316f4853.mockapi.io/api/TimeKeep/products?goods=${1}`)

        const gender = genderId > 0 ? `category=${genderId}` : `goods=${1}`;

        axios.get(`https://6433edd7582420e2316f4853.mockapi.io/api/TimeKeep/products?${gender}`)
        .then(response => {
            setProducts(response.data)
        })
    }, [genderId])

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
                    </div>
                    <div className="products-div">
                        {
                            products.map((obj) => <Product key={obj.id} {...obj} />)
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Watches;