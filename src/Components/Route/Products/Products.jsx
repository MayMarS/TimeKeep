import './Products.scss';
// import json from '../../../list.json';
import axios from 'axios';
import qs from 'qs';
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setFilters, sortMenu } from '../../../redux/slices/filterSlice'; 
import FilterCategories from './FilterCategories/FilterCategories';
import Sort from './Sort/Sort';
import Pagination from './Pagination/Pagination';
import Product from './Product/Product';
import ViewedProducts from '../../Main/ViewedProducts/ViewedProducts';

const Products = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isUrlFilters = useRef(false);
    const isMountedAdress = useRef(false);

    const [products, setProducts] = useState([]);

    const categoryId = useSelector((state) => state.filter.categoryId);
    const sortType = useSelector((state) => state.filter.sort.sortProperty);
    const currentPage = useSelector((state) => state.filter.currentPage);

    const getAllProducts = () => {
        // let data  = JSON.parse(JSON.stringify(json));
        // setProducts(data.products);

        const category = categoryId > 0 ? `category=${categoryId}` : '';
        const sortBy = sortType.replace('-', '');
        const order = sortType.includes('-') ? 'asc' : 'desc';

        axios.get(`https://6433edd7582420e2316f4853.mockapi.io/api/TimeKeep/products?page=${
            currentPage}&limit=12&${category}&sortBy=${sortBy}&order=${order}`
        )
        .then(response => {
            setProducts(response.data)
        })

        window.scrollTo(0,0);
    }

    useEffect(() => {
        if (window.location.search){
            const params = qs.parse(window.location.search.substring(1))
            const sort = sortMenu.find((obj) => obj.sortProperty === params.sortType)
            dispatch(
                setFilters({
                    ...params,
                    sort
                })
            )
            isUrlFilters.current = true;
        }
    }, [dispatch])

    useEffect(() => {
        if(!isUrlFilters.current){
            getAllProducts();
        }
        isUrlFilters.current = false;
    }, [categoryId, sortType, currentPage])

    useEffect(() => {
        if(isMountedAdress.current){
            const queryString = qs.stringify({
                categoryId,
                sortType,
                currentPage
            })
            navigate(`?${queryString}`)
        }
        isMountedAdress.current = true;
    }, [categoryId, sortType, currentPage, navigate])

    return (
        <>
        <section className="products">
            <div className="container">
                <h2 className="title">Shop all products</h2>
                <h4>Choose your ideal watch or jewelry</h4>
                <div className="products-btns">
                    <FilterCategories />
                    <Sort />
                </div>
                <div className="products-div">
                    {
                        products.map((obj) => <Product key={obj.id} {...obj} />)
                    }
                </div>
                <Pagination />
            </div>
        </section>
        <ViewedProducts />
        </>
    )
}

export default Products;
