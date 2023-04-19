import './Contact.scss';
import { useState, useEffect } from 'react';

const Contact = () => {

    const initialvalues = {name: "", email: "", message: ""};
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
        const regexName = /^[a-zA-Z0-9]{2,15}$/; 
        const regexEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,}$/; 
        const regexMessage = /^(?:\w+\W+){4,}(?:\w+)$/;
        if(!values.name){
            errors.name = "Name is reguired";
        } else if(!regexName.test(values.name)){
            errors.name = "Name should contain at least 2 characters";
        }
        if(!values.email){
            errors.email = "Email is reguired";
        } else if(!regexEmail.test(values.email)){
            errors.email = "This is not a valid email format";
        }
        if(!values.message){
            errors.message = "Message is reguired";
        } else if(!regexMessage.test(values.message)){
            errors.message = "Message should contain at least 5 words to understand your situation";
        }
        return errors;
    }

    return(
        <div className="contact">
            <div className="container">
                <h2>Contact Us</h2>
                <p>Get in touch! We're here to quickly provide you with the info and services you need & answer any question you may have.</p>
                <div className="contact-div">
                    <h3>Send Us An Email:</h3>
                    <p>ASK US ANYTHING! WE'LL GET BACK TO YOU WITHIN 24-48 HOURS.</p>
                    <form onSubmit={handleSubmit} id="form">
                        <div className="field">
                            <label for="name-contact">* Name</label>
                            <input type="text" id="name-contact" placeholder="Name" name="name"
                                value={formValues.name} onChange={handleChange} />
                            <span className="error">{formErrors.name}</span>
                        </div>
                        <div className="field">
                            <label for="email-contact">* Email</label>
                            <input type="text" id="email-contact" placeholder="Email" name="email"
                                value={formValues.email} onChange={handleChange} />
                            <span className="error">{formErrors.email}</span>
                        </div>
                        <div className="field field-message">
                            <label>* Write your message</label>
                            <textarea type="text" id="message" placeholder="Message..." name="message"
                                value={formValues.message} onChange={handleChange}>
                            </textarea>
                            <span className="error">{formErrors.message}</span>
                        </div>
                        <button type="submit" className="btn-contact">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;