import React from 'react';
import'./Header.css';
import logo from '../../images/logo.png';
 
const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <nav>
                <a href="/shop">Shop</a>
                <a href="/order-review">Order review</a>
                <a href="/manage-inventory-here">Manage Inventory here</a>
            </nav>
        </div>
    );
};

export default Header;