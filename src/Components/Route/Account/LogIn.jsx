import './LogIn.scss';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const LogIn = () => {

    const initialValues = {email: "", password: ""};
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormValues({...formValues, [name]: value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    }

    const validate = (values) => {
        const errors = {};
        const regexEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,}$/; 
        const regexPassword = /^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/;
        if(!values.email){
            errors.email = "Email is reguired";
        } else if(!regexEmail.test(values.email)){
            errors.email = "This is not a valid email format";
        }
        if(!values.password){
            errors.password = "Password is reguired";
        } else if(!regexPassword.test(values.password)){
            errors.password = "Minimum 6 characters, one lowercase letter, one number and one special symbol";
        }
        return errors;
    }

    const [icon, setIcon] = useState(true);
    const changeIcon = (value) => {
        setIcon(value)
    }

    return(
        <div className="account-log-in">
            <div className="log-in">
                <h3>Welcome back</h3>
                <p>Sign into your existing account to earn rewards, check existing orders and more.</p>

                {Object.keys(formErrors).length === 0 && isSubmit ? (alert("Logged In successfully!")) : null}
                <form onSubmit={handleSubmit} id="form">
                    <div className="field">
                        <label for="email-login">* Email</label>
                        <input type="text" id="email-login" placeholder="Email" name="email"
                            value={formValues.email} onChange={handleChange} />
                        <span className="error">{formErrors.email}</span>
                    </div>
                    <div className="field">
                        <label for="password-login">* Password</label>
                        <input type={icon ? "password" : "text"} id="password-login" placeholder="Password" name="password"
                            value={formValues.password} onChange={handleChange} />           
                        <button type="button" onClick={() => changeIcon(!icon)}
                        class={icon ? "password-toggle password-toggle_hide" : "password-toggle password-toggle_show"} >
                            <span class="password-toggle_icon password-toggle_icon_hide"></span>
                            <span class="password-toggle_icon password-toggle_icon_show"></span>
                        </button>
                        <span className="error">{formErrors.password}</span>
                        <NavLink to="/LogIn/Reset-password" className="reset-password-link">Forgot password?</NavLink>
                    </div>
                    <button type="submit" className="btn-log-in">Log In</button>
                </form>
            </div>
        </div>
    )
}

export default LogIn;




