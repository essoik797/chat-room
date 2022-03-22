import React, { useState } from 'react';
import { HashRouter, Route, Link, Routes, useLocation, Outlet, useParams } from 'react-router-dom'
import '../components/styles/Header.scss';

// pages
import Home from '../Home';
import Space from '../Space';


function Header() {

    const [burger, setBurger] = useState(false)

    return (
        <>
            <header className="header">
                <nav className="menu">
                    <div className={burger ?"menu__burger active":"menu__burger"} onClick={()=> setBurger(!burger)}>
                        <span></span>
                    </div>

                    <ul className={burger ?"menu__list active":"menu__list"}>
                        <li className="menu__item"><Link to="/home" className="menu__link">Главная</Link> </li>
                        <li className="menu__item"><Link to="/space" className="menu__link active">Пространство</Link></li>
                    </ul>

                    <div className="menu__logo-wrap">
                        <a href="#" className="menu__logo">ChatRoom</a>
                    </div>

                    <div className="menu__profile profile">
                        <div className="profile__info">
                            <a href="#" className="profile__name">Вася Пупкин</a>
                            <a href="#" className="profile__settings">Настройки</a>
                        </div>
                        <div className="profile__img">
                            {/* <img src="@img/profile.svg" alt="Profile Image"> */}
                        </div>
                    </div>
                </nav>
            </header>

            <Routes>
                <Route exact path='/home' element={<Home />} />
                <Route exact path='/space' element={<Space />} />
            </Routes>

        </>

    )
}

export default Header;