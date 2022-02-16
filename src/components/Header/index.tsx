import React from 'react';

import { NavLink } from 'react-router-dom';

import {routMain as routMainPage} from '../../pages/MainPage';
import {routCategori as routCategoriPage} from '../../pages/CategoriPage';
import {routAbout as routAboutPage} from '../../pages/AboutPage';
import {routSearch as routSearchPage} from '../../pages/SearchPage';

import LogoPng from '../assets/img/Logo.png';
import './styles.scss';


const Header = () => {
  return (
      <header className="MainHeader">
        <div className='logo'>
        <NavLink to={routMainPage} activeClassName={'linkActive'} >
              <img src={ LogoPng} className='logoImg' alt="logo" />
            </NavLink>
        </div>
                   
          <nav className='menu'>
            <NavLink to={routMainPage} activeClassName={'linkActive'} >
              Главная
            </NavLink>
            <NavLink to={routCategoriPage} activeClassName={'linkActive'}>
              Фильмы по категории
              
            </NavLink>
            <NavLink to={routAboutPage} activeClassName={'linkActive'}>
              О нас 
            </NavLink>
            <NavLink to={routSearchPage} activeClassName={'linkActive'}>
              Поиск
            </NavLink>
          </nav>
      </header>
    );
}

export default Header;
