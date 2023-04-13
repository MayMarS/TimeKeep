import './Footer.scss';

const Link = (props) => {
    return(
        <li><a href="#">{props.link}</a></li>
    )
}
const Social = (props) => {
    return(
        <a href={props.social.link}><img src={props.social.icon} alt="social logo"/></a>
        
    )
}

const Footer = (props) => {
        let social = props.social.map(social => <Social social={social}/>)
        let titles = props.footer.titles;
        let ulLinks1 = props.footer.links1.map(link => <Link link={link}/>)
        let ulLinks2 = props.footer.links2.map(link => <Link link={link}/>)
        let ulLinks3 = props.footer.links3.map(link => <Link link={link}/>)
    return (
        <footer>
            <div className="footer-main">
                <div className="footer-contact">
                    <a className="footer-logo" href="#"></a>
                    <a className="footer-email" href="mailto:support@timekeep.com">support@timekeep.com</a>
                    <div className="footer-social">
                        {social}
                    </div>
                </div>
                <div className="footer-menu">
                    <ul><li>{titles.title1}</li>{ulLinks1}</ul>
                    <ul><li>{titles.title2}</li>{ulLinks2}</ul>
                    <ul><li>{titles.title3}</li>{ulLinks3}</ul>
                </div>
                <div className="footer-news">
                    <p>Sign up for newsletter</p>
                    <form>
                        <input placeholder="your@email.com"></input>
                        <button className="btn-input"></button>
                    </form>
                </div>
            </div>
        </footer>
    )
}

export default Footer;