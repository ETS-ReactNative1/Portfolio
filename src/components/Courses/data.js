import DBMS from '../../assets/images/Course/DBMS.png';
import MLF from '../../assets/images/Course/MLF.png';
import BDM from '../../assets/images/Course/BDM.png';
import MAD1 from '../../assets/images/Course/MAD1.png';
import MAD2 from '../../assets/images/Course/MAD2.png';
import JAVA from '../../assets/images/Course/JAVA.png';
import TDS from '../../assets/images/Course/TDS.png';
import SC from '../../assets/images/Course/SC.png';
import PDSA from '../../assets/images/Course/PDSA.png';


const courseUrlBase = "https://onlinedegree.iitm.ac.in/course_pages/";

const courseData=[
    {
        CourseImg:MLF, 
        CourseUrl:`${courseUrlBase}BSCCS2004.html`,
        CourseName:'Machine Learning Foundations'
    },
    {
        CourseImg:TDS, 
        CourseUrl:`${courseUrlBase}BSCSE2002.html`,
        CourseName:'Tools in Data Science'
    },
    {
        CourseImg:BDM, 
        CourseUrl:`${courseUrlBase}BSCMS2001.html`,
        CourseName:'Business Data Management'
    },
    {
        CourseImg:SC, 
        CourseUrl:`${courseUrlBase}BSCSE2001.html`,
        CourseName:'System Commands'
    },
    {
        CourseImg:DBMS, 
        CourseUrl:`${courseUrlBase}BSCCS2001.html`,
        CourseName:'DataBase Management System'
    },
    {
        CourseImg:MAD1, 
        CourseUrl:`${courseUrlBase}BSCCS2003.html`,
        CourseName:'Modern Application Development I'
    },
    {
        CourseImg:MAD2, 
        CourseUrl:`${courseUrlBase}BSCCS2006.html`,
        CourseName:'Modern Application Development II'
    },
    {
        CourseImg:JAVA, 
        CourseUrl:`${courseUrlBase}BSCCS2005.html`,
        CourseName:'Programming Concepts using Java'
    },
    {
        CourseImg:PDSA, 
        CourseUrl:`${courseUrlBase}BSCC2002.html`,
        CourseName:'Data Structures and Algorithms'
    }
];

export default courseData;