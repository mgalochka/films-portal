import React from 'react';
import { NavLink } from 'react-router-dom';

import LogoPng from '../assets/img/Logo.png';
import {routMain as routMainPage} from '../../pages/MainPage';

import './styles.scss';

const Footer = () => {
    return (
        <footer className='mainFooter'>
            <div className='wrapperFooter'>
                <div className='logo'>
                    <NavLink to={routMainPage} activeClassName={'linkActive'} >
                        <img src={ LogoPng} className='logoImg' alt="logo" />
                    </NavLink>
                </div>
                <div className="descFooter">Дипломный проект</div>
                <div className="infoFooter">
                     <p className='madeBy'> Made by</p>
                     <p className='autor'> Галина Козак</p>
                </div>
                

            </div>
        </footer>
    )
}
export default Footer;