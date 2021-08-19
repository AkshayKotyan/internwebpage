import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";


const Navbar = () => {

  // const hamburger = document.querySelector('.hamburger-menu');
  // const nav = document.querySelector('.menu');

  const fun = () => {
    // const hamburger = document.querySelector('.hamburger-menu');
    const nav = document.querySelector('.menu');
    nav.classList.toggle('show');

    
    // hamburger.addEventListener('click', () => {
    //  nav.classList.toggle('show');
    // });
  }
    return (
        <>
        <nav className="navdiv">
            <NavLink className="title_main" exact  to="/"> Vasitum</NavLink>

            <div className="hamburger-menu" onClick={fun}>
            <a href="#">
              <GiHamburgerMenu />
            </a>
          </div>

            <div className="menu">
            <NavLink exact  to="/looking to hire"> Looking to hire?</NavLink>
            <NavLink exact  to="/dashboard"> Dashboard</NavLink>
            <NavLink exact  to="/login"> Login</NavLink>
            <NavLink exact  to="/signup"> Free Signup</NavLink>
             {/* <NavLink exact  to="/error"> Error</NavLink> */}

            </div>
           
        </nav>
        </>
    );  

    // hamburger.addEventListener('click', () => {
    //   nav.classList.toggle('show');
    // });
};


export default Navbar;
