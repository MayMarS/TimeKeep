import './Trending.scss';
import SelectFilters from './Select/Select';
// import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import json from '../../../list.json';

const Trending = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
    //     axios.get('https://my-json-server.typicode.com/MayMarS/my-json-server/products')
    //     .then(response => {
    //         setProducts(response.data)
    //     })

        let data  = JSON.parse(JSON.stringify(json));
        setProducts(data.trending);
    }, [])

    const navigate = useNavigate();
    const showProductInfo = (productId) => {
        navigate(`/product/${productId}`)
    }
    const showAllProducts = () => {
        navigate('/products')
    }

    return (
        <section className="trending-products">
            <div className="container">
                <h2 className="title">Trending now</h2>
                <h4>Choose your ideal style</h4>
                <div className="products-btns">
                    <div className="filters-btns">
                        <SelectFilters />
                        <button className="btn-filter">Color</button>
                        <button className="btn-filter">Gender</button>
                        <button className="btn-see-all" onClick={showAllProducts}>See all</button>
                    </div>
                    <div>
                        <button className="btn-sort">Sort by</button>
                    </div>
                </div>
                <div className="products-div">
                    {
                        products.map(product => {
                            return(
                                <div className="product">
                                    <img src={product.image} alt={`img_product_${product.id}`}
                                        onClick={() => {showProductInfo(product.id)}}>
                                    </img>
                                    <h2>{product.name}</h2>
                                    <h3>{product.collection}</h3>
                                    <p>${product.price}</p>
                                    <button className="btn-buy">
                                        Buy
                                    </button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Trending;
