import './ChosenCategory.scss';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { setFilters, sortMenu } from '../../../../redux/slices/filterSlice';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import Product from '../../../Route/Products/Product/Product';
import Sort from '../../../Route/Products/Sort/Sort';

const ChosenCategory = () => {

    const [products, setProducts] = useState([]);
    let {categoryId} = useParams();

    const sortType = useSelector((state) => state.filter.sort.sortProperty);
    const sortBy = sortType.replace('-', '');
    const order = sortType.includes('-') ? 'asc' : 'desc';

    useEffect(() => {
        axios.get(`https://6433edd7582420e2316f4853.mockapi.io/api/TimeKeep/products?category=${categoryId}&sortBy=${sortBy}&order=${order}`)
        .then(response => {
            setProducts(response.data)
        })
    }, [categoryId, sortBy, order])

    const dispatch = useDispatch();
    useEffect(() => {
        const sort = sortMenu.find((obj) => obj.sortProperty === sortType)
        dispatch(
            setFilters({sort})
        )
    }, [dispatch, sortType])

    return(
        <section className="products">
            <div className="container">
                <h2 className="title">Shop by Category</h2>
                <h4>Feel the pulse of time</h4>
                <div className="products-btns">
                    <Sort />
                </div>
                <div className="products-div">
                    {
                        products.map((obj) => <Product key={obj.id} {...obj} />)
                    }
                </div>
            </div>
        </section>
    )
}

export default ChosenCategory;