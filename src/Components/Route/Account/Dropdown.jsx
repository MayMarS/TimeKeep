import './Dropdown.scss';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const Dropdown = () => {

    const [focus, setFocus] = useState(false);
    const handleFocus = () => {
        setFocus(!focus);
    }

    return(
        <div className="dropdown-div">
            <ul onClick={handleFocus} className={focus ? "dropdown-menu hidden" : "dropdown-menu"}>
                <li><NavLink to="/LogIn" className="account-link-login">Log In</NavLink></li>
                <li><NavLink to="/SignUp" className="account-link-signup">Sign Up</NavLink></li>
            </ul>
        </div>
    )
}

export default Dropdown;