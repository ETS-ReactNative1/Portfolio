import { useState, useEffect, useRef } from 'react';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate');
    const form = useRef();

    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();
        
        console.log(form.current);
        console.log({
            subject: form.current['subject'].value,
            message: form.current['message'].value,
            name: form.current['name'].value,
            email: form.current['email'].value,
            });

        emailjs
            .sendForm(
                'Portfolio', //serviceID 
                'template_802lqln', //templateID
                form.current, //templateParams
                '41bPd0HzSHw3KNQKR' //publicKey
            )
            .then(
                () => {
                    alert('Message successfully sent!');
                    window.location.reload(false);
                },
                () => {
                    alert('Failed to send the message, please try again....');
                }
            )
    };

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e', '!']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        I am actively looking for Internship Opportunities, if you have any role that suits my profile
                        then please let me know. However, if you have other request or question,
                        don't hesitate to contact me using below form either.
                    </p>

                    <div className="contact-form">
                        <form ref={form} onSubmit={sendEmail}>
                            <ul>
                                <li className="half">
                                    <input placeholder="Name" type="text" name="name" required />
                                </li>
                                <li className="half">
                                    <input
                                        placeholder="Email"
                                        type="email"
                                        name="email"
                                        required
                                    />
                                </li>
                                <li>
                                    <input
                                        placeholder="Subject"
                                        type="text"
                                        name="subject"
                                        required
                                    />
                                </li>
                                <li>
                                    <textarea
                                        placeholder="Message"
                                        name="message"
                                        required
                                    ></textarea>
                                </li>
                                <li>
                                    <input type="submit" className="flat-button" value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>

                </div>
            </div>

        </>
    );
}

export default Contact;