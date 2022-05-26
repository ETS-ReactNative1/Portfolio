import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import './index.scss';
import CourseCard from './Coursecard';

import DBMS from '../../assets/images/Course/DBMS.png';
import MLF from '../../assets/images/Course/MLF.png';
import BDM from '../../assets/images/Course/BDM.png';
import MAD1 from '../../assets/images/Course/MAD1.png';
import MAD2 from '../../assets/images/Course/MAD2.png';
import JAVA from '../../assets/images/Course/JAVA.png';
import TDS from '../../assets/images/Course/TDS.png';
import SC from '../../assets/images/Course/SC.png';
import PDSA from '../../assets/images/Course/PDSA.png';


const Courses = () => {

    const [letterClass, setLetterClass] = useState('text-animate');
    const courseUrlBase = "https://onlinedegree.iitm.ac.in/course_pages/";

    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, []);

    return (
        <>
            <div className="container course-page">
                
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            strArray={['C','o','u','r','s','e','w','o','r','k']} // CourseWork
                            idx={15} //1.5s delay
                            letterClass={letterClass}
                        />
                    </h1>

                    <p>
                        sed’s operation is straightforash() acts as a pseudonym for standard input.
                        sed reads through each file othe pattern space to standar
                    </p>
                </div>

                <div className='coursecards'>
                    
                    <CourseCard 
                        CourseImg={DBMS} 
                        CourseUrl={ `${courseUrlBase}BSCCS2001.html`}
                        CourseName='DataBase Management System'
                    />
                    <CourseCard 
                        CourseImg={MLF} 
                        CourseUrl={`${courseUrlBase}BSCCS2004.html`}
                        CourseName='Machine Learning Foundations'
                    />
                    <CourseCard  
                        CourseImg={BDM} 
                        CourseUrl={`${courseUrlBase}BSCMS2001.html`}
                        CourseName='Business Data Management'
                    />
                    <CourseCard  
                        CourseImg={MAD1} 
                        CourseUrl={`${courseUrlBase}BSCCS2003.html`}
                        CourseName='Modern Application Development I'
                    />
                    <CourseCard  
                        CourseImg={MAD2} 
                        CourseUrl={`${courseUrlBase}BSCCS2006.html`}
                        CourseName='Modern Application Development II'
                    />
                    <CourseCard  
                        CourseImg={JAVA} 
                        CourseUrl={`${courseUrlBase}BSCCS2005.html`}
                        CourseName='Programming Concepts using Java'
                    />
                    <CourseCard  
                        CourseImg={TDS} 
                        CourseUrl={`${courseUrlBase}BSCSE2002.html`}
                        CourseName='Tools in Data Science'
                    />
                    <CourseCard  
                        CourseImg={SC} 
                        CourseUrl={`${courseUrlBase}BSCSE2001.html`}
                        CourseName='System Commands'
                    />
                    <CourseCard  
                        CourseImg={PDSA} 
                        CourseUrl={`${courseUrlBase}BSCC2002.html`}
                        CourseName='Data Structures and Algorithms'
                    />

                </div>

            </div>
        </>
    );
};

export default Courses;