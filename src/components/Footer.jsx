import React from 'react';
import {NavLink} from 'react-router-dom';

function Footer() {
    return (
        <div className='footer'>
            <div>
                <p className='cat_title'>Developed by Belén Mundemurra</p>
                <p>This is a Prototype, Not an Actual Store.</p>
                <NavLink className="nav-info" to="/">more info</NavLink>
            </div>
            <div className='footer-logo'>
                <p>UNUSUAL</p>
            </div>
            <div>
                <NavLink className="nav-link" to="/">HOME</NavLink>
                <NavLink className="nav-link" to="/category/shop">SHOP</NavLink>
                <NavLink className="nav-link" to="/cart">CART</NavLink>
            </div>
        </div>
    )
}

export default Footer;