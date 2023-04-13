import './Trending.scss';
// import SelectFilters from './Select/Select';
// import json from '../../../list.json';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import FilterCategories from './FilterCategories/FilterCategories';
import Sort from './Sort/Sort';
import Pagination from './Pagination/Pagination';

const Trending = () => {

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
        // setProducts(data.trending);


        const category = categoryId > 0 ? `category=${categoryId}` : '';
        const sortBy = sortType.sortProperty.replace('-', '');
        const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';

        axios.get(`https://6433edd7582420e2316f4853.mockapi.io/api/TimeKeep/trending?page=${
            currentPage}&limit=8&${category}&sortBy=${sortBy}&order=${order}`
        )
        .then(response => {
            setProducts(response.data)
        })

    }, [categoryId, sortType, currentPage])

    const navigate = useNavigate();
    const showProductInfo = (productId) => {
        navigate(`/product/${productId}`)
    }
    const showAllProducts = () => {
        navigate('/shop')
    }

    return (
        <section className="trending-products">
            <div className="container">
                <h2 className="title">Trending now</h2>
                <h4>Choose your ideal style</h4>
                <div className="products-btns">
                    <FilterCategories value={categoryId} onClickCategory={(i) => setCategoryId(i)} />
                    <a className="see-all-link" onClick={showAllProducts}>Shop All Products</a>
                    <Sort value={sortType} onClickSort={(i) => setSortType(i)} />

                    {/* <div className="filters-div">
                        <SelectFilters />
                    </div> */}
                </div>
                <div className="products-div">
                    {
                        products.map(product => {
                            return(
                                <div className="product" key={product.id}>
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

export default Trending;
