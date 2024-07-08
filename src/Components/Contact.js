// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import emailjs from 'emailjs-com';

const Contact = () => {
    const [messageStatus, setMessageStatus] = useState(null);

    useEffect(() => {
        AOS.init({
            easing: 'ease-out-quart',
            delay: 0,
            duration: 800
        });
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();

        // Validate form inputs
        const userName = e.target.user_name.value;
        const userEmail = e.target.user_email.value;
        const message = e.target.message.value;

        if (!userName || !userEmail || !message) {
            setMessageStatus('error');
            console.log("All fields are required.");
            return;
        }

        const templateParams = {
            user_name: userName,
            user_email: userEmail,
            message: message,
            html: `<p>Sender's Name: ${userName}</p>
                   <p>Sender's Email: ${userEmail}</p>
                   <hr />
                   <p>Message:</p>
                   <p>${message}</p>`,
        };

        emailjs.send('service_swczu16', 'template_vheafej', templateParams, 'tb1oBuZHji2vqlqRA')
            .then((result) => {
                console.log(result.text);
                setMessageStatus('success');
            }, (error) => {
                console.log(error.text);
                setMessageStatus('error');
            });
        e.target.reset();
    };

    return (
        <div id="Contact" className='p-8 md:p-20 bg-slate-900 text-center'>
            <h1 data-aos='fade-right' className='text-2xl md:text-5xl font-semibold mb-8 md:mb-20 leading-normal uppercase text-purple-500'>
                Contact <span className="text-white">Me!</span>
            </h1>
            <form data-aos='fade-up' onSubmit={sendEmail} className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
                <div className="mb-6">
                    <input type="text" name="user_name" placeholder="Your Name" className="w-full p-3 border border-purple-300 rounded-md focus:outline-none focus:ring focus:border-purple-500 transition" />
                </div>
                <div className="mb-6">
                    <input type="email" name="user_email" placeholder="Your Email" className="w-full p-3 border border-purple-300 rounded-md focus:outline-none focus:ring focus:border-purple-500 transition" />
                </div>
                <div className="mb-6">
                    <textarea name="message" placeholder="Your Message" className="w-full p-3 border border-purple-300 rounded-md focus:outline-none focus:ring focus:border-purple-500 transition"></textarea>
                </div>
                <button type="submit" className="w-full bg-purple-500 text-white py-3 rounded-md hover:bg-purple-700 focus:outline-none focus:ring focus:border-purple-500 transition">
                    Send Message
                </button>
                {messageStatus === 'success' && (
                    <p className="text-green-500 mt-3">Thank you! Your message has been sent successfully.</p>
                )}
                {messageStatus === 'error' && (
                    <p className="text-red-500 mt-3">Oops! Something went wrong. Please fill all fields and try again later.</p>
                )}
            </form>
        </div>
    );
};

export default Contact;
