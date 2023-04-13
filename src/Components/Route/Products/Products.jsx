import './Products.scss';
// import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import json from '../../../list.json';

const Products = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        // axios.get('https://my-json-server.typicode.com/MayMarS/my-json-server/products')
        // .then(response => {
        //     setProducts(response.data)
        // })

        let data  = JSON.parse(JSON.stringify(json));
        setProducts(data.products);
    }, [])

    const navigate = useNavigate();
    const showProductInfo = (productId) => {
        navigate(`/product/${productId}`)
    }

    return (
        <section className="products">
            <div className="container">
                <h2 className="title">Products</h2>
                <h4>Choose your ideal watch or jewelry</h4>
                <div className="products-btns">
                    <div className="filters-btns">
                        <button className="btn-filter">Category</button>
                        <button className="btn-filter">Color</button>
                        <button className="btn-filter">Gender</button>
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

export default Products;
