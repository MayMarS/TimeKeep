import './Header.scss';
import Dropdown from '../Route/Account/Dropdown';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const LinkItem = (props) => {
    return (
        <NavLink to={props.link.adress}>{props.link.name}</NavLink>
    )
}

const Header = (props) => {

    const [dropdown, setDropdown] = useState(false);
    const onMouseEnter = () => {
        setDropdown(true)
    }
    const onMouseLeave = () => {
        setDropdown(false)
    }

    const {products} = useSelector((state) => state.cart);
    const totalCount = products.reduce((sum, item) => sum + item.count, 0);

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
    
    let headerLinks = props.links.map(link => <LinkItem link={link}/>)
    return (
        <header className={sticky}>
            <NavLink className="header-logo" to="/"></NavLink>
            <div className="header-nav">
                <nav>
                    {headerLinks}
                </nav>
            </div>
            <div className="header-user">
                <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className="user-account-div">
                    <a className="user-account-link" href="#">
                        Account
                    </a>
                    {dropdown && <Dropdown />}
                </div>
                <div className="user-cart-div">
                    <NavLink to="/Cart" className="user-cart-link">Cart</NavLink>
                    <span className="cart-quantity">{totalCount}</span>
                </div>
            </div>
        </header>
    )
}

export default Header;