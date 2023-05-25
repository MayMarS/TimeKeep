import './Feachures.scss';
import { useNavigate } from 'react-router-dom';

const FirstItems = (props) => {
    return(
        <div className="first-item">
            <img src={props.item.image} alt="icon"/>
            <h3>{props.item.title}</h3>
            <p>{props.item.text}</p>
        </div>
    )
}
const FinalItems = (props) => {
    return(
        <div className="final-item">
            <img src={props.item.image} alt="icon"/>
            <h4>{props.item.title}</h4>
        </div>
    )
}

const Feachures = (props) => {
    let firstItems = props.feachures.firstItems.map(item => <FirstItems item={item} />)
    let finalItems = props.feachures.finalItems.map(item => <FinalItems item={item} />)

    const navigate = useNavigate();
    const showAllProducts = () => {
        navigate('/Shop')
    }

    return (
        <section className="feachures">

            <div className="feachures-first-items">
                {firstItems}
            </div>
            <div className="watches-div">
                <div className="info">
                    <div className="left">
                        <img src={props.feachures.watchesInfo1.image} alt="product_photo"></img>
                    </div>
                    <div className="right text">
                        <h3>{props.feachures.watchesInfo1.title}</h3>
                        <p>{props.feachures.watchesInfo1.text}</p>
                    </div>
                </div>
                <div className="info">
                    <div className="left text">
                        <h3>{props.feachures.watchesInfo2.title}</h3>
                        <p>{props.feachures.watchesInfo2.text}</p>
                    </div>
                    <div className="right">
                        <img src={props.feachures.watchesInfo2.image} alt="product_photo"></img>
                    </div>
                </div>
                <div className="info">
                    <div className="left">
                        <img src={props.feachures.watchesInfo3.image} alt="product_photo"></img>
                    </div>
                    <div className="right text">
                        <h3>{props.feachures.watchesInfo3.title}</h3>
                        <p>{props.feachures.watchesInfo3.text}</p>
                    </div>
                </div>
            </div>
            <div className="jewelry-div">
                    <div className="jewelry-first-div">
                        <h2>Work of art</h2>
                        <p>When attention to details matter</p>
                        <button onClick={showAllProducts} className="btn-shop-now-grey">
                            Shop now
                        </button>
                    </div>
                    <div className="jewelry-second-div">
                        <img src={props.feachures.jewelryInfo.image} alt="product_photo"></img>
                        <div className="second-div-info">
                            <h3>{props.feachures.jewelryInfo.title}</h3>
                            <p>{props.feachures.jewelryInfo.text1}</p>
                            <p>{props.feachures.jewelryInfo.text2}</p>
                        </div>
                    </div>
                </div>
            <div className="features-final-items">
                {finalItems}
            </div>

        </section>
    )
}

export default Feachures;