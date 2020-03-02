import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
    return (
<div className='side-menu'>

    <section className='menu-bar'>
        <h1 className='title'>Book Club</h1>
        <Link to='/'><span>Home</span></Link>
        <div className='menu-select'>Previous Books</div>
        <div className='menu-select'>Nominate a Book</div>
        <div className='menu-select'>Host a Meeting</div>

        <div className='login'>Login</div>
    </section>
</div>
    )
}

export default Header;