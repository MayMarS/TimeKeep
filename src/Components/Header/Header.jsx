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

    const [openMenu, setOpenMenu] = useState(false);
    const toggleMenu = () => {
      setOpenMenu(!openMenu);
    }
    
    let headerLinks = props.links.map(link => <LinkItem link={link}/>)
    return (
        <header className={sticky}>
            <div className={!openMenu ? "main-header" : "main-header main-close"}>
                {
                    !openMenu && 
                    <>
                    <NavLink className="header-logo" to="/"></NavLink>
                    <div className="header-nav">
                        <nav>
                            {headerLinks}
                        </nav>
                    </div>
                    <div className="header-user">
                        <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className="user-account-div">
                            <span className="user-account">
                                Account
                            </span>
                            {dropdown && <Dropdown onClick={toggleMenu}/>}
                        </div>
                        <div className="user-cart-div">
                            <NavLink to="/Cart" className="user-cart-link">Cart</NavLink>
                            <span className="cart-quantity">{totalCount}</span>
                        </div>
                    </div>
                    </>
                }
                <div className={!openMenu ? "menu-header-btn" : "menu-header-btn menu-close"}>
                        <button onClick={toggleMenu} className={!openMenu ? "btn-menu-open" : "btn-menu-close"}></button>
                </div>
            </div>
            <nav className={openMenu ? "menu-header" : ""} onClick={toggleMenu}>
                {headerLinks}
            </nav>
        </header>
    )
}

export default Header;