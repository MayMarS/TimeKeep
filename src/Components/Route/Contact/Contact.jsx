import './Contact.scss';
import { useState } from 'react';
import SelectSubject from './Select/Select';

const Contact = () => {

    const initialvalues = {name: "", email: "", message: ""};
    const [formValues, setFormValues] = useState(initialvalues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [selectError, setSelectError] = useState("");

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormValues({...formValues, [name]: value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
        setSelectError("Please choose a subject");
    }

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

    const optionsSubject = [
        {value: "stuff", label: "Where is my stuff?"},
        {value: "returns", label: "Returns"},
        {value: "edit", label: "Cancel/Edit order"},
        {value: "marketing", label: "Marketing & PR"},
        {value: "other", label: "Other"}
    ]

    const [select, setSelect] = useState("Select a subject");
    const onSelectItem = (value) => {
        setSelect(value)
    }

    // const [open, isOpen] = useState(false);
    // const  onMenuOpen = (value) => {
    //     isOpen(value);
    // }

    // const selects = ["Where is my stuff?", "Returns", "Cancel/Edit order", "Marketing & PR", "Other"];
    // const [select, setSelect] = useState("Select a subject");
    // const onSelectItem = (value) => {
    //     setSelect(value)
    //     isOpen(false);
    // }

    return(
        <div className="contact">
            <div className="container">
                <h2>Contact Us</h2>
                <p>Get in touch! We're here to quickly provide you with the info and services you need & answer any question you may have.</p>
                <div className="contact-div">
                    <h3>Send Us An Email:</h3>
                    <p>ASK US ANYTHING! WE'LL GET BACK TO YOU WITHIN 24-48 HOURS.</p>

                    {Object.keys(formErrors).length === 0 && isSubmit ? (alert("Message is sent! We will contact you within 24-48 hours")) : null}
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

                        <div className="field select-div">
                            <label for="select-subject">* What can we help you with?</label>
                            <SelectSubject options={optionsSubject} onChange={onSelectItem} id="select-subject"/>
                            {
                                select === "Select a subject" && (
                                    <span className="error">{selectError}</span>
                                )
                            }
                        </div>

                        {/* <div className="field select-div">
                            <label for="select-subject">* What can we help you with?</label>
                            <div id="select-subject" onClick={() => onMenuOpen(!open)}>
                                <span className="select-span">{select}</span>
                                <span className={!open ? "arrow-span arrow-down" : "arrow-span arrow-up"}></span>
                            </div>
                            {
                                select === "Select a subject" && (
                                    <span className="error">{selectError}</span>
                                )
                            }

                            {
                                open && (
                                    <div className="dropdown-select">
                                        <ul>
                                            {
                                                selects.map((name, i) => (
                                                    <li key={i} className="select-item"
                                                        onClick={() => onSelectItem(name)}>
                                                        {name}
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                )
                            }
                        </div> */}

                        <div className="field field-message">
                            <label for="message-contact">* Write your message</label>
                            <textarea type="text" id="message-contact" placeholder="Message..." name="message"
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