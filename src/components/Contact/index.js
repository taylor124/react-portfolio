import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                if (!e.target.value.length) {
                    setErrorMessage(`${e.target.name} is required.`);
                } else {
                    setErrorMessage('');
                }
            }
        }

        setFormState({ ...formState, [e.target.name]: e.target.value })
        console.log('errorMessage', errorMessage);
        if (errorMessage) {
            <div>
                <p className="error-text">{errorMessage}</p>
            </div>
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    return (
        <section className="contactForm">
            <h1>Contact me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                <div>
                    <label htmlFor="name">Name:</label>
                    </div>
                    <div>
                    <input type="text" defaultValue={name} onChange={handleChange} name="name" />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    </div>
                    <div>
                    <input type="email" defaultValue={email} name="email" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    </div>
                    <div>
                    <textarea name="message" defaultValue={message} onChange={handleChange} rows="5" />
                    </div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </section>
    );
}

export default ContactForm;