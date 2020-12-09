import React from 'react';
import './style.css';
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <div className="navStyles">

{/* style={{width: "25%", margin: "auto", justifyContent: "center"}} */}
          <NavLink className="navLinkStyles" to="/">HOME</NavLink>
          <NavLink className="navLinkStyles" to="/discography">DISCOGRAPHY</NavLink>
          <NavLink className="navLinkStyles" to="/video">VIDEO</NavLink>
          <NavLink className="navLinkStyles" to="/press">PRESS</NavLink>
          <NavLink className="navLinkStyles" to="/contact">CONTACT</NavLink>
       </div>
    );
}
 
export default Navigation;