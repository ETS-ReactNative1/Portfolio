import React from 'react';
import './index.scss';
import { Link, NavLink } from 'react-router-dom';

import LogoS from '../../assets/images/logo-s.png';

const Sidebar = () => {
    return (
        <div className='nav-bar'>
            <Link className='logo' to='/' >
                <img src={ LogoS } alt="Small Logo" /> 
            </Link>
            <NavLink exact="true" activeclassname="active" to="/" >
                
            </NavLink>
        </div>
    );
}

export default Sidebar;