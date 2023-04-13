import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './Header.scss';

const Link = (props) => {
    return (
        <NavLink to={props.link.adress}>{props.link.name}</NavLink>
    )
}

const Header = (props) => {

    const [sticky, setSticky] = useState('');
    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    }, []);

    const isSticky = () => {
        const scrollTop = window.scrollY;
        const headerSticky = scrollTop >= 10 ? 'header-fixed' : '';
        setSticky(headerSticky);
    };
    
    let headerLinks = props.links.map(link => <Link link={link}/>)
    return (
        <header className={sticky}>
            <a className="header-logo" href="#"></a>
            <div className="header-nav">
                <nav>
                    {headerLinks}
                </nav>
            </div>
            <div className="header-user">
                <NavLink to="/account" className="user-account-link">Account</NavLink>
                <NavLink to="/cart" className="user-cart-link">Cart</NavLink>
            </div>
        </header>
    )
}

export default Header;