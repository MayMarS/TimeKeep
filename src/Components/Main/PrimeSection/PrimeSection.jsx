import './PrimeSection.scss';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import "swiper/css";
import "swiper/css/navigation";

const Slider = () => {

    const [sliders, setSliders] = useState([]);
    useEffect(() => {
        axios.get('https://my-json-server.typicode.com/MayMarS/my-json-server/sliders')
        .then(response => {
            setSliders(response.data)
        })
    }, [])

    const navigate = useNavigate();
    const showAllProducts = () => {
        navigate('/Shop')
    }

    return (
      <>
        <Swiper navigation={true} modules={[Navigation]} speed={1000} className="mySwiper">
            {
                sliders.map(slider => {
                    return(
                        <SwiperSlide>
                            <img src={slider.image} alt={`img_slider_${slider.id}`}/>
                            <div className="prime-div" onClick={showAllProducts}>
                                <h3>{slider.title}</h3> 
                                <p>{slider.text}</p>
                            </div>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
      </>
    );
}

const PrimeSection = () => {
    return (
        <section className="prime-section">
            < Slider />
        </section>
    )
}

export default PrimeSection;