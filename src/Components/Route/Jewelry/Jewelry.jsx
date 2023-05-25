import './Jewelry.scss';
import { useState, useEffect } from 'react';
import { useSelector} from 'react-redux';
import axios from 'axios';
import Product from '../Products/Product/Product';
import JewelryFilters from './JewelryFilters/JewelryFilters';

const Jewelry = () => {

    const [products, setProducts] = useState([]);
    const genderId = useSelector((state) => state.filter.gender);

    useEffect(() => {
        // axios.get(`https://6433edd7582420e2316f4853.mockapi.io/api/TimeKeep/products?goods=${2}`)

        const gender = genderId > 0 ? `category=${genderId+2}` : `goods=${2}`;

        axios.get(`https://6433edd7582420e2316f4853.mockapi.io/api/TimeKeep/products?${gender}`)
        .then(response => {
            setProducts(response.data)
        })
    }, [genderId])

    return(
        <section className="jewelry">
            <div className="jewelry-bg">
                <div className="jewelry-title">
                    <h3>Shop all jewelry</h3> 
                    <p>Trending in the world. Find your favourite style.</p>
                </div>
            </div>
            <div className="products">
                <div className="container">
                    <h2 className="title">Shop all jewelry</h2>
                    <h4>Choose your ideal item</h4>
                    <div className="products-btns">
                        <JewelryFilters />
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

export default Jewelry;