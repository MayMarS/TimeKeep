import './Categories.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Categories = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get('https://my-json-server.typicode.com/MayMarS/my-json-server/categories')
        .then(response => {
            setCategories(response.data)
        })
    }, [])

    return (
        <section className="categories">
            <div className="container">
                <h2 className="title">Shop by category</h2>
                <h4>Feel the pulse of time</h4>
                <div className="categories-div">
                    {
                        categories.map(category => {
                            return(
                                <div className="category">
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
