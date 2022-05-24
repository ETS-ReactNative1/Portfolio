import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faReact,
    faJava,
    faGitAlt,
    faNodeJs,
    faPython,
    faLinux
  } from '@fortawesome/free-brands-svg-icons'

const About = () => {

    const about=['A','b','o','u','t',' ','m','e'];
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
        }, [])
    
    return (
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
                sed’s operation is straightforward. Each file named on the command line is opened
                and read,in turn. If there are no files,standard input is used,and the filename “-” (a
                single dash) acts as a pseudonym for standard input.
                sed reads through each file one line at a time. The line is placed in an area of memory termed the pattern space. This is like a variable in a programming language: an
                area of memory that can be changed as desired under the direction of the editing
                commands. All editing operations are applied to the contents of the pattern space.
                When all operations have been completed, sed prints the final contents of the pattern space to standar
                </p>
                <p>
                sed’s operation is straightforward. Each file named on the command line is opened
                and read,in turn. If there are no files,standard input is used,and the filename “-” (a
                single dash) n space to standar
                </p>
                <p>
                sed’s operation is straightforash() acts as a pseudonym for standard input.
                sed reads through each file othe pattern space to standar
                </p>
            </div>

            <div className='stage-cube-cont'>
                <div className='cube-spinner'>

                    <div className='face1'>
                        <FontAwesomeIcon icon={faReact} color="#61DBFB" />
                    </div>

                    <div className='face2'>
                        <FontAwesomeIcon icon={faLinux} color="#000000" />
                    </div>

                    <div className='face3'>
                        <FontAwesomeIcon icon={faGitAlt} color="#F1502F" />
                    </div>

                    <div className='face4'>
                        <FontAwesomeIcon icon={faPython} color="#EFD81D" />
                    </div>

                    <div className='face5'>
                        <FontAwesomeIcon icon={faNodeJs} color="#EFD81D" />
                    </div>

                    <div className='face6'>
                        <FontAwesomeIcon icon={faJava} color="#654321" />
                    </div>

                </div>
            </div>
        </div>
    )
};


export default About;