import './ResetPassword.scss';
import { useState, useEffect } from 'react';

const ResetPassword = () => {

    const initialvalues = {email: "", password: ""};
    const [formValues, setFormValues] = useState(initialvalues);
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

    useEffect(() => {
        if(Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
        window.scrollTo(0,0);
    }, [formErrors])

    const validate = (values) => {
        const errors = {};
        const regexEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,}$/; 
        if(!values.email){
            errors.email = "Email is reguired";
        } else if(!regexEmail.test(values.email)){
            errors.email = "This is not a valid email format";
        }
        return errors;
    }

    return(
        <div className="account-reset">
            <div className="reset-form">
                <h3>Welcome back</h3>
                <p>Sign into your existing account to earn rewards, check existing orders and more.</p>
                <p className="reset-info">Provide your account email address to receive an email to reset your password.</p>
                <form onSubmit={handleSubmit} id="form">
                    <div className="field">
                        <label for="email-login">* Email</label>
                        <input type="text" id="email-login" placeholder="Email" name="email"
                            value={formValues.email} onChange={handleChange} />
                        <span className="error">{formErrors.email}</span>
                    </div>
                    <button type="submit" className="btn-reset-password">Send Reset Instructions</button>
                </form>
            </div>
        </div>
    )
}

export default ResetPassword;