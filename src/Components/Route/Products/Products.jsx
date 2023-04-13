import './Products.scss';
// import json from '../../../list.json';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import FilterCategories from '../../Main/Trending/FilterCategories/FilterCategories';
import Sort from '../../Main/Trending/Sort/Sort';
import Pagination from './Pagination/Pagination';

const Products = () => {

    const [products, setProducts] = useState([]);

    const [categoryId, setCategoryId] = useState(0);
    const [sortType, setSortType] = useState( {name: "Popular", sortProperty: "rating"} );
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        // axios.get('https://my-json-server.typicode.com/MayMarS/my-json-server/products')
        // .then(response => {
        //     setProducts(response.data)
        // })

        // let data  = JSON.parse(JSON.stringify(json));
        // setProducts(data.products);


        const category = categoryId > 0 ? `category=${categoryId}` : '';
        const sortBy = sortType.sortProperty.replace('-', '');
        const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';

        axios.get(`https://6433edd7582420e2316f4853.mockapi.io/api/TimeKeep/products?page=${
            currentPage}&limit=12&${category}&sortBy=${sortBy}&order=${order}`
        )
        .then(response => {
            setProducts(response.data)
        })

        window.scrollTo(0,0);
    }, [categoryId, sortType, currentPage])

    const navigate = useNavigate();
    const showProductInfo = (productId) => {
        navigate(`/product/${productId}`)
    }

    return (
        <section className="products">
            <div className="container">
                <h2 className="title">Shop all products</h2>
                <h4>Choose your ideal watch or jewelry</h4>
                <div className="products-btns">
                    <FilterCategories value={categoryId} onClickCategory={(i) => setCategoryId(i)} />
                    <Sort value={sortType} onClickSort={(i) => setSortType(i)} />
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
                <Pagination onChangePage={(number) => setCurrentPage(number)}/>
            </div>
        </section>
    )
}

export default Products;
