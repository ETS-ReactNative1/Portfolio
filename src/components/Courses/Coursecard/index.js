import './index.scss';

const CourseCard = ({CourseImg,CourseUrl,CourseName}) => {
    return(
        <div class="card">
            <div class="imgBox"><img src={CourseImg} alt="" /></div>
            <div class="contentBox">
                <h2>{CourseName}</h2>
                <a href={CourseUrl} target="_blank" rel="noreferrer" >View Syllabus</a>
            </div>
        </div>
    );
};

export default CourseCard;
