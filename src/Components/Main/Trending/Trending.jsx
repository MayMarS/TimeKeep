import './Trending.scss';
// import json from '../../../list.json';
import axios from 'axios';
import { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import "swiper/css";
import "swiper/css/navigation";
import Product from '../../Route/Products/Product.jsx/Product';

const Trending = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        // let data  = JSON.parse(JSON.stringify(json));
        // setProducts(data.trending);

        axios.get('https://6433edd7582420e2316f4853.mockapi.io/api/TimeKeep/trending')
        .then(response => {
            setProducts(response.data)
        })
    }, [products])

    const navigate = useNavigate();
    const showAllProducts = () => {
        navigate('/Shop')
    }

    return (
        <section className="trending-products">
            <div className="container">
                <h2 className="title">Trending now</h2>
                <h4>Choose your ideal style</h4>
                <div className="products-btns">
                    <button onClick={showAllProducts} className="btn-shop-all">
                        Shop All Products
                    </button>
                </div>
                <div className="products-div">
                        <Swiper navigation={true} modules={[Navigation]} speed={1000} slidesPerView={4} spaceBetween={30} 
                        className="mySwiper">
                            {
                                products.map(obj => {
                                    return(
                                        <SwiperSlide>
                                            <Product key={obj.id} {...obj} />
                                        </SwiperSlide>
                                    )
                                })
                            }
                        </Swiper>
                </div>
            </div>
        </section>
    )
}

export default Trending;