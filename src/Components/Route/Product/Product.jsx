import './Product.scss';
// import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import json from '../../../list.json';

const Product = (props) => {

    const [product, setProduct] = useState(false);
    let {productId} = useParams();
    let data  = JSON.parse(JSON.stringify(json));

    useEffect(() => {
        // axios.get(`https://my-json-server.typicode.com/MayMarS/my-json-server/products/${productId}`)
        // .then(response => {
        //     setProduct(response.data)
        // })

        data.products.map(element => {
            if (Number(element.id) === Number(productId)){
                setProduct(element);
            }
        })

        window.scrollTo(0,0);
    }, [])

    const [isProductInCart, setIsProductInCart] = useState(false);
    const addProductToCart = () => {
        alert(`${product.name} was added to cart`);
        setIsProductInCart(true);
    }

    const [clicked, setClicked] = useState(false);
    const toggle = index => {
        if(clicked === index) {
            //if clicked item is already active, then close it
            return setClicked(null);
        }
        setClicked(index);
    }

    return (
        <div className="product-div">
            <div className="container">
                <div className="product-card">

                    <div className="product-images">
                        <img src={product.image1} alt={`img_product_${product.id}`}/>
                        <img src={product.image2} alt={`img_product_${product.id}`}/>
                        <img src={product.image3} alt={`img_product_${product.id}`}/>
                        <img src={product.image4} alt={`img_product_${product.id}`}/>
                    </div>

                    <div className="product-info">
                        <h2>{product.name}</h2>
                        <h4>{product.collection}</h4>
                        <p className="price">${product.price}</p>

                        {
                            isProductInCart ?
                            <button className="btn-buy" onClick={addProductToCart}>Already in cart</button> :
                            <button className="btn-buy" onClick={addProductToCart}>Buy</button>
                        }

                        <div className="accordion-info">

                            <div className="info">
                                <div className="show-info" onClick={() => toggle(product.index)} key={product.index}>
                                    <h4>Description</h4>
                                    <span className={clicked === product.index ? "btn-arrows btn-up" : "btn-arrows btn-down"}></span>
                                </div>
                                {clicked === product.index ? (
                                    <div className="show-text">
                                        <p>{product.description}</p>
                                    </div>
                                    ) : null
                                }
                            </div>

                            <div className="info">
                                <div className="show-info" onClick={() => toggle(product.id)} key={product.id}>
                                    <h4>Specification</h4>
                                    <span className={clicked === product.id ? "btn-arrows btn-up" : "btn-arrows btn-down"}></span>
                                </div>
                                {clicked === product.id ? (
                                    <div className="show-text">
                                        {
                                            product.specification.map(item => {
                                                for (const key in item){
                                                    return(
                                                        <div className="specification">
                                                            <p>{key}</p>
                                                            <span>{item[key]}</span>
                                                        </div>
                                                    )
                                                }
                                            })
                                        }
                                    </div>
                                    ) : null
                                }
                            </div>

                            <div className="info">
                                <div className="show-info" onClick={() => toggle(product.name)} key={product.name}>
                                    <h4>Shipping & Returns</h4>
                                    <span className={clicked === product.name ? "btn-arrows btn-up" : "btn-arrows btn-down"}></span>
                                </div>
                                {clicked === product.name ? (
                                    <div className="show-text">
                                        {
                                            product.shipping.map(item => {
                                                return(
                                                    <p>{item}</p>
                                                )
                                            })
                                        }
                                    </div>
                                    ) : null
                                }
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            <div className="feachures-items">
                {
                    props.product.feachuresItems.map(item => {
                        return(
                            <div className="items">
                                <img src={item.image} alt="icon"/>
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                            </div>
                        )
                    })
                }
            </div>

            <div className="container">
                <div className="other-info-div">
                    <div className="other-info left-div">
                        <img src={props.product.otherInfoImg1.image1} alt="product_photo"></img>
                        <img src={props.product.otherInfoImg1.image2} alt="product_photo"></img>
                        <div className="info">
                            <h2>Automatic</h2>
                            {
                                props.product.otherInfo1.map(item => {
                                    return(
                                        <p>{item}</p>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="other-info right-div">
                        <div className="info">
                            <h2>Classic</h2>
                            {
                                props.product.otherInfo2.map(item => {
                                    return(
                                        <p>{item}</p>
                                    )
                                })
                            }
                        </div>
                        <img src={props.product.otherInfoImg2.image3} alt="product_photo"></img>
                        <img src={props.product.otherInfoImg2.image4} alt="product_photo"></img>
                    </div>
                </div>
            </div>
            
            <div className="other-title">
                <h2>What's up, Spring</h2>
                <h4>A perfect opportunity to add a refreshing new wardrobe staple into your mix</h4>
                <button className="btn-shop-now-blue">Shop now</button>
            </div>

        </div>
    );
}

export default Product;