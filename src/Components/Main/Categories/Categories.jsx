import './Categories.scss';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Categories = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get('https://my-json-server.typicode.com/MayMarS/my-json-server/categories')
        .then(response => {
            setCategories(response.data)
        })
    }, [])

    const navigate = useNavigate();
    const chooseCategory = (categoryId) => {
        navigate(`/Category/${categoryId}`);
    }

    return (
        <section className="categories">
            <div className="container">
                <h2 className="title">Shop by category</h2>
                <h4>Feel the pulse of time</h4>
                <div className="categories-div">
                    {
                        categories.map(category => {
                            return(
                                <div className="category" onClick={() => chooseCategory(category.id)}>
                                    <img src={category.image} alt={`img_category_${category.id}`}></img>
                                    <div className="title-div">
                                        <h3>{category.title}</h3>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Categories;
