import './SignUp.scss';
import { useState, useEffect } from 'react';

const SignUp = () => {

    const initialvalues = {firstName: "", lastName: "", email: "", password: "",  confirmPassword: ""};
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

        // const isValid = setFormErrors(validate(formValues));
        // if(isValid){
        //     setFormValues(initialvalues);
        //     alert("success!");
        //     setIsSubmit(true);
        // }

    }

    useEffect(() => {
        if(Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
        window.scrollTo(0,0);
    }, [formErrors])

    const validate = (values) => {
        const errors = {};
        const regexFirstName = /^[a-zA-Z0-9]{2,15}$/; 
        const regexLastName = /^[a-zA-Z0-9]{2,15}$/; 
        const regexEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,}$/; 
        const regexPassword = /^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/;
        // const regexConfirmPassword = values.password;
        if(!values.firstName){
            errors.firstName = "First Name is reguired";
        } else if(!regexFirstName.test(values.firstName)){
            errors.firstName = "First Name should contain at least 2 characters";
        }
        if(!values.lastName){
            errors.lastName = "Last Name is reguired";
        } else if(!regexLastName.test(values.lastName)){
            errors.lastName = "Last Name should contain at least 2 characters";
        }
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
        if(!values.confirmPassword){
            errors.confirmPassword = "Password confirmation is reguired";
        } else if(values.confirmPassword !== values.password){
            errors.confirmPassword = "Passwords do not match";
        }
        return errors;
    }

    return(
        <div className="account-sign-up">
            <div className="sign-up">
                <h3>New to TimeKeep?</h3>
                <p>Create a new account and earn points, get faster checkout and be the first to know about our exclusive offers.</p>

                {/* {Object.keys(formErrors).length === 0 && isSubmit ? (alert("Logged in successfully!")) : null} */}

                <form onSubmit={handleSubmit} id="form">
                    <div className="field">
                        <label for="firstname-signup">* First Name</label>
                        <input type="text" id="firstname-signup" placeholder="First Name" name="firstname"
                            value={formValues.firstName} onChange={handleChange} />
                        <span className="error">{formErrors.firstName}</span>
                    </div>
                    <div className="field">
                        <label for="lastname-signup">* Last Name</label>
                        <input type="text" id="lastname-signup" placeholder="Last Name" name="lastname"
                            value={formValues.lastName} onChange={handleChange} />
                        <span className="error">{formErrors.lastName}</span>
                    </div>
                    <div className="field">
                        <label for="email-signup">* Email</label>
                        <input type="text" id="email-signup" placeholder="Email" name="email"
                            value={formValues.email} onChange={handleChange} />
                        <span className="error">{formErrors.email}</span>
                    </div>
                    <div className="field">
                        <label for="password-signup">* Password</label>
                        <input type="password" id="password-signup" placeholder="Password" name="password"
                            value={formValues.password} onChange={handleChange} />
                        <span className="error">{formErrors.password}</span>
                    </div>
                    <div className="field">
                        <label for="confirm-password-signup">* Confirm Password</label>
                        <input type="password" id="confirm-password-signup" placeholder="Confirm Password" name="confirm-password"
                            value={formValues.confirmPassword} onChange={handleChange} />
                        <span className="error">{formErrors.confirmPassword}</span>
                    </div>
                    <div className="checkbox-div">
                        <input id="checkbox-sign" type="checkbox"></input>
                        <label for="checkbox-sign">Sign-up to receive the latest updates and promotions</label>
                    </div>
                    <button type="submit" className="btn-sign-up">Create Account</button>
                </form>
            </div>
        </div>
    )
}

export default SignUp;


