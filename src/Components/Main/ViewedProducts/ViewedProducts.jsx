import './ViewedProducts.scss';
import ViewedItem from './ViewedItem/ViewedItem';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

export const getLocalData = () => {
    let viewedData = localStorage.getItem("viewed");
    if (viewedData == null){
        return []
    } else {
        return JSON.parse(viewedData)
    }
}

const ViewedProducts = () => {

    const {products} = useSelector((state) => state.viewed);

    useEffect(() => {
        localStorage.setItem("viewed", JSON.stringify(products));
        // getLocalData() call in viewedSlice.js
    }, [products])

    if(products.length === 0) {
        return;
    }

    return(
        <section className="viewed-products">
            <div className="container">
                <h2>Viewed Products</h2>
                <div className="viewed-div">
                    {
                        products.map(item => <ViewedItem key={item.id} {...item} />)
                    }
                </div>
            </div>
        </section>
    )
}

export default ViewedProducts;