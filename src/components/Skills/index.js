import './index.scss';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faReact,
    faJava,
    faGitAlt,
    faNodeJs,
    faVuejs,
    faLinux } from '@fortawesome/free-brands-svg-icons'


const Skills = () => {

    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, []);

    return (
        <div className='container skills-page'>

            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        strArray={['S', 'k', 'i', 'l', 'l', 's']} // Skills
                        idx={15} //1.5s delay
                        letterClass={letterClass}
                    />
                </h1>
                <p>
                    sed’s operation is straightforash() acts as a pseudonym for standard input.
                    sed reads through each file othe pattern space to standar
                </p>
            </div>

            <div className='stage-cube-cont'>
                <div className='cube-spinner'>

                    <div className='face1 box'>
                        <FontAwesomeIcon icon={faGitAlt} color="#F1502F" />
                    </div>

                    <div className='face2 box'>
                        <FontAwesomeIcon icon={faLinux} color="#000000" />
                    </div>

                    <div className='face3 box'>
                        <FontAwesomeIcon icon={faReact} color="#61DBFB" />  
                    </div>

                    <div className='face4 box'>
                        <FontAwesomeIcon icon={faVuejs} color="#42B883" /> {/* #34495E- Blue*/}
                    </div>

                    <div className='face5 box'>
                        <FontAwesomeIcon icon={faNodeJs} color="#EFD81D" />
                    </div>

                    <div className='face6 box'>
                        <FontAwesomeIcon icon={faJava} color="#6F4E37" />
                    </div>

                </div>
            </div>

        </div>
    )
};

export default Skills;