import './Feachures.scss';

const Items = (props) => {
    return(
        <div className="item">
            <img src={props.item.image} alt="icon"/>
            <h3>{props.item.title}</h3>
            <p>{props.item.text}</p>
        </div>
    )
}
const Final = (props) => {
    return(
        <div className="final">
            <img src={props.item.image} alt="icon"/>
            <h4>{props.item.title}</h4>
        </div>
    )
}

const Feachures = (props) => {
    let feachuresItems = props.main.feachuresItems.map(item => <Items item={item} />)
    let feachuresFinal = props.main.feachuresFinal.map(item => <Final item={item} />)
    return (
        <section className="feachures">

            <div className="feachures-items">
                {feachuresItems}
            </div>
            <div className="feachures-info">
                <div className="info">
                    <div className="left">
                        <img src={props.main.feachuresInfo1.image1} alt="product_photo"></img>
                    </div>
                    <div className="right text">
                        <h3>{props.main.feachuresInfo1.title1}</h3>
                        <p>{props.main.feachuresInfo1.text1}</p>
                    </div>
                </div>
                <div className="info">
                    <div className="left text">
                        <h3>{props.main.feachuresInfo2.title2}</h3>
                        <p>{props.main.feachuresInfo2.text2}</p>
                    </div>
                    <div className="right">
                        <img src={props.main.feachuresInfo2.image2} alt="product_photo"></img>
                    </div>
                </div>
                <div className="info">
                    <div className="left">
                        <img src={props.main.feachuresInfo3.image3} alt="product_photo"></img>
                    </div>
                    <div className="right text">
                        <h3>{props.main.feachuresInfo3.title3}</h3>
                        <p>{props.main.feachuresInfo3.text3}</p>
                    </div>
                </div>
                <div className="jewelry-div">
                    <div className="feachures-jewelry-first">
                        <h2>Work of art</h2>
                        <p>When attention to details matter</p>
                        <button className="btn-shop-now-grey">Shop now</button>
                    </div>
                    <div className="feachures-jewelry-second">
                        <img src={props.main.feachuresJewelrySecond.image} alt="product_photo"></img>
                        <div className="second-div">
                            <h3>{props.main.feachuresJewelrySecond.title}</h3>
                            <p>{props.main.feachuresJewelrySecond.text1}</p>
                            <p>{props.main.feachuresJewelrySecond.text2}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="features-final-div">
                {feachuresFinal}
            </div>

        </section>
    )
}

export default Feachures;