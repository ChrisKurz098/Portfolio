import React, { useState } from 'react';

const Contact = () => {

    const [formState, setForm] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(0);

    function handleChange(event) {
        const set = event.target.name;
        setForm({ ...formState, [set]: event.target.value });
    }

    async function handleSubmit(event) {
        event.preventDefault();
        setForm({ name: '', email: '', message: '' });
        setSubmitted(1);
    }

    return (
        <section id="contact">
            <h2>Contact</h2>
            <form className='contact-form' onSubmit={handleSubmit}>
                <label for="name">Name:</label>
                <input type={'text'} name='name' id='name-box' value={formState.name} onChange={handleChange} />

                <label for="email">Email:</label>
                <input  type={'text'}name='email' id='email-box' value={formState.email} onChange={handleChange} />

                <label for="Message">Message:</label>
                <textarea type={'text'} name='message' id='message-box' value={formState.message} onChange={handleChange} />

                <button id='submit-button'>Submit</button>
                <p style={{"display": submitted ? "block" : "none"}}>Thankyou!</p>
            </form>

        </section>
    )
}

export default Contact;