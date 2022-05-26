import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import './index.scss';
import CourseCard from './Coursecard';
import courseData from './data';

const Courses = () => {

    const [letterClass, setLetterClass] = useState('text-animate');

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
                        These are few of the Courses which I have completed as part of my academic curriculm.  
                    </p>
                    <p>
                        <strong> Machine Learning Foundations</strong> and <strong>Tools in Data Science</strong> are one of my favourites.
                    </p>
                    <p>
                        I also enjoyed <strong> Modern Application Development I &amp; II </strong>
                        and learnt a lot about Development while making projects for them.
                    </p>
                </div>

                <div className='coursecards'>

                {
                    courseData.map(e=>{
                        return(
                            <CourseCard 
                                CourseImg={e.CourseImg} 
                                CourseUrl={ e.CourseUrl}
                                CourseName={e.CourseName}
                            />
                        );
                    })
                }

                </div>

            </div>
        </>
    );
};

export default Courses;