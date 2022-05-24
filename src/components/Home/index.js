import './index.scss';
import LogoTitle from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi <br/> I'm Utkarsh
                    <img src={LogoTitle} alt="Developer" />ahu
                    <br/>
                    Web Developer
                </h1>
                <h2>Full Stack Developer / Data Science Enthusiast</h2>

                <Link to="/contact" className="flat-button" > Contact Me </Link>
            </div>
        </div>
    );
}

export default Home;