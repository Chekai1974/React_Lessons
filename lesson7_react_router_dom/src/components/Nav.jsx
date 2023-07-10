import React from 'react';
import { NavLink } from "react-router-dom";
function Nav() {
    return (
        <>
            {/* // на главную */}
            <NavLink to="/" className={({isActive}) => isActive ? "active-link" : ""}>Home</NavLink>
            <NavLink to="/products" className={({isActive}) => isActive ? "active-link" : ""}>Products </NavLink>
            <NavLink to="/basket" className={({isActive}) => isActive ? "active-link" : ""}>Basket </NavLink>
        </>
    );
};

export default Nav;