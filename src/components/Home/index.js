import { useEffect, useState } from 'react'
import './index.scss';
import LogoTitle from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';

const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate');
    const NameLine = ['I','\'m',' ','U','t','k','a','r','s','h'];
    const JobLine = ['F','u','l','l',' ','S','t','a','c','k',' ','D','e','v','e','l','o','p','e','r','.']

    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 5000)
    }, [])

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <br /> 
                    <AnimatedLetters strArray={NameLine} idx={13} letterClass={letterClass} />
                    <img src={LogoTitle} alt="Developer" />
                    <span className={`${letterClass} _23`}>a</span>
                    <span className={`${letterClass} _24`}>h</span>
                    <span className={`${letterClass} _25`}>u</span>
                    <br />
                    <AnimatedLetters strArray={JobLine} idx={26} letterClass={letterClass} />
                </h1>
                <h2>Web Developer / Data Science Enthusiast</h2>

                <Link to="/contact" className="flat-button" > Contact Me </Link>
            </div>
        </div>
    );
}

export default Home;