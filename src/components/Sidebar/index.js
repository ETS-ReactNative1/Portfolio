import './index.scss';
import { Link, NavLink } from 'react-router-dom';

import LogoS from '../../assets/images/logo-s.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub , faTwitter} from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => {
    return (
        <div className='nav-bar'>

            <Link className='logo' to='/' >
                <img src={LogoS} alt="Small Logo" />
            </Link>

            <nav>

                <NavLink exact="true" activeclassname="active" to="/" >
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                </NavLink>

                <NavLink exact="true" activeclassname="active" className="about-link" to="/about" >
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                </NavLink>

                <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact" >
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                </NavLink>

            </nav>

            <ul>

                <li>
                    <a
                        href="https://www.linkedin.com/in/utkarsh-sahu-he-him-5b21541b2/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                    </a>
                </li>

                <li>
                    <a
                        href="https://github.com/SahuUtkarsh03"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                    </a>
                </li>

                <li>
                    <a
                        href="https://twitter.com/utkarsh4tech"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon icon={faTwitter} color="#4d4d4e" />
                    </a>
                </li>

            </ul>
        </div>
    );
}

export default Sidebar;