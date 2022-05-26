import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import AboutTimeline from './TimeLine';



const About = () => {

    const about = ['A', 'b', 'o', 'u', 't', ' ', 'm', 'e'];
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, []);

    return (
        <>
            <div className='container about-page'>

                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            strArray={about} // about me
                            idx={15} //1.5s delay
                            letterClass={letterClass}
                        />
                    </h1>

                    <p>
                        One of my vivid memories is going to a parent-teacher meeting in school and 
                        having my teacher tell my parents, 
                        <strong> “ Utkarsh is definitely my most talkitive student but he has lot of Potential! ”</strong>
                    </p>

                    <p>
                    Am I fininshing this <strong>Degree</strong> or is my Degree fininshing <strong>Me? </strong> 
                    Find out on the next episode of <strong> " WTF is my Life! " </strong>
                    </p>

                    <p>
                        I'll <strong>bend over backwards</strong> to help others' dreams come true,
                        but I also understand the <strong>importance of standing your ground</strong> and holding your own.
                    </p>

                </div>

                <div className='timeline'>
                    <AboutTimeline />
                </div>

            </div>

            <Loader type='pacman' />
        </>

    )
};


export default About;

