import './About.scss';

const Block = (props) => {
    return(
        <div className="block">
            <h2>{props.block.title}<span>{props.block.span}</span></h2>
            <p>{props.block.text1}</p>
            <p>{props.block.text2}</p>
            <div className="img-div">
                <img src={props.block.image} alt="company_about_picture"></img>
            </div>
        </div>
    )
}

const Item = (props) => {
    return(
        <div className="info">
            <img src={props.item.image} alt="icon"/>
            <h3>{props.item.title}</h3>
            <p>{props.item.text}</p>
        </div>
    )
}

const About = (props) => {
    let aboutItems = props.about.items.map(item => <Item item={item} />)
    let aboutBlocks = props.about.blocks.map(block => <Block block={block} />)
    window.scrollTo(0,0);
    return (
        <section className="about">
            <div className="about-title">
                <h1>Join The Time<span>Keep</span></h1>
            </div>
            <div className="container">
                <div className="blocks">
                    {aboutBlocks}
                </div>
                <div className="about-div">
                    <h2>Our <span>values</span> made us</h2>
                    <div className="about-info">
                        {aboutItems}
                    </div>
                </div>
                <h2 className="final-title">Sharind our values, the <span>TimeKeep</span> helps people all over the world to get a <span>unique personalized customer experience</span></h2>
            </div>
            <div className="concept">
                <h2>In <span>unique concept</span> we trust</h2>
                {
                    props.about.concept.map(text => {
                        return(
                            <p>{text}</p>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default About;