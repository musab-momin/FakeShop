import React, { useRef } from "react";
import Logo from '../assets/logo.png';
import {NavLink, Link} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'



const Header =()=>{

    const navList = useRef(null)

    const toggleNav = ()=>{
        console.log(navList.current.classList);
        navList.current.classList.toggle('active')
    }

    return(
        <header className="header flex">
            <div className="header__logo-div">
                <Link to={"/"}>
                <img src={ Logo } alt="#" className="logo-img" />
                </Link>
                <button className="nav-btn" onClick={toggleNav}>
                    <GiHamburgerMenu size={25}/>
                </button>
            </div>
            <ul className="header__pages" ref={navList}>
                <li> <NavLink to={'/'}> Home </NavLink></li>
                <li> <NavLink to={'/stack'}> Stack </NavLink></li>
                <li> <NavLink to={'/about'}> About </NavLink></li>
            </ul>
        </header>
    )
}

export default Header