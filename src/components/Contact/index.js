import React, { useState } from 'react';

const Contact = () => {

    const [formState, setForm] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(0);
    const [pleaseEnter, setPleaseEnter] = useState(0);

    function handleChange(event) {
        const set = event.target.name;
        setForm({ ...formState, [set]: event.target.value });
    }

    async function handleSubmit(event) {
        event.preventDefault();
        const { name, email, message } = formState;
        if (name && email && message) {
            setForm({ name: '', email: '', message: '' });
            setPleaseEnter(0);
            setSubmitted(1);
        } else {
            setPleaseEnter(1);
        }
    }

    return (
        <section id="contact">
            <h2>Contact</h2>
            <a id="emailMe" href="mailto:ckurz098@gmail.com">ckurz098@gmail.com </a>
            <form className='contact-form' onSubmit={handleSubmit}>
                <label for="name">Name:</label>
                <input type={'text'} name='name'  id='name-box' value={formState.name} onChange={handleChange} />

                <label for="email">Email:</label>
                <input type={'email'} name='email' id='email-box' value={formState.email} onChange={handleChange} />

                <label for="Message">Message:</label>
                <textarea type={'text'} name='message' id='message-box'value={formState.message} onChange={handleChange} />

                <button id='submit-button'>Submit</button>
                <p className='fadeIn-1' style={{ "display": submitted ? "block" : "none" }}>Thankyou!</p>
                <p className='fadeIn-1' style={{ "display": pleaseEnter ? "block" : "none" }}>Feild(s) missing</p>
            </form>

        </section>
    )
}

export default Contact;