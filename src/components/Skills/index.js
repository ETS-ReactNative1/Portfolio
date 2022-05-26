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
    faLinux
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders';


const Skills = () => {

    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, []);

    return (
        <>
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
                        I am a firm believer of <strong> Learn, Unlearn and Relearn.</strong>
                    </p>
                    <p>
                        <strong> ReactJs</strong> &amp; <strong>NodeJs</strong> are my primary stack for 
                        Web-Development. However, I am also comfortable with <strong>VueJs</strong> &amp;
                        <strong> Flask </strong>. I use <strong>Git</strong> for Version Control.
                    </p>
                    <p>
                        Being a <strong>Linux</strong> user and I am quite proficient with the 
                        <strong> Terminal</strong>. <strong>Awk</strong> &amp; <strong>Sed </strong>
                        are few interseting Command Line Utility which I am familiar with.
                    </p>
                    <p>
                        <strong>Java</strong> is my primary language for practising 
                        <strong> Data Structures and Algorithms</strong>. I also use <strong>Python </strong>
                        regularly for Development and other Data Science projects. Last but not the least,
                        I also have working knowledge of <strong>C++</strong>.
                    </p>
                    <p>
                        I have very strong <strong>Communication Skills</strong> both verbal and written.
                        I have also been designated various Position of Responsibilty
                        which prove my <strong>Leadership Qualities</strong> &amp; <strong>Soft Skills</strong>.
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
                            <FontAwesomeIcon icon={faReact} color="#008B8B" />
                        </div>

                        <div className='face4 box'>
                            <FontAwesomeIcon icon={faVuejs} color="#42B883" /> {/* #34495E- Blue*/}
                        </div>

                        <div className='face5 box'>
                            <FontAwesomeIcon icon={faNodeJs} color="#3C873A" />
                        </div>

                        <div className='face6 box'>
                            <FontAwesomeIcon icon={faJava} color="#6E260E" />
                        </div>

                    </div>
                </div>

            </div>

            <Loader type='pacman' />
        </>
    )
};

export default Skills;