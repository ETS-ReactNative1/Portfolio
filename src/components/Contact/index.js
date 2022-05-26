import { useState, useEffect, useRef } from 'react';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import emailjs from '@emailjs/browser';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Loader from 'react-loaders';

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
                        I am actively looking for <strong>Internship Opportunities</strong>, 
                        if you have any role that suits my profile
                        then please let me know. However, if you have other
                        <strong> request</strong> or <strong>question</strong>,
                        don't hesitate to contact me.
                    </p>
                    <p>
                        Also, Reach out if you want to talk about <strong>Emerging Tech</strong>, 
                        <strong> Web Development</strong>, or <strong>Young Royals</strong>.
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

                <div className="info">
                    Utkarsh Sahu,
                    <br />
                    India,
                    <br />
                    4, Sheetla Square Colony,<br />
                    Mehndiganj, Lucknow - India.  <br />
                    PIN - 226003 <br />
                    <br />
                    <span>sahuutkarsh03@gmail.com</span>
                </div>

                <div className="map">
                <MapContainer center={[26.93053273517661, 80.93596302835844]} zoom={11}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={[26.848984, 80.892501]}>
                        <Popup closeButton={false} >
                            I live here, come over for a cup of coffee :) 
                        </Popup>
                    </Marker>
                </MapContainer>
                </div>

            </div>

            <Loader type="pacman" />
        </>
    );
}

export default Contact;