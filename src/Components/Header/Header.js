import React from 'react';
import './header.css';

const Header = () => {
    return (
<div>
    <section className='menu-bar'>
        <h1 className='title'>BOOK CLUB</h1>
        <div className='menu-select'>Previous Books</div>
        <div className='menu-select'>Nominate a Book</div>
        <div className='menu-select'>Host a Meeting</div>

        <div className='login'>Login</div>
    </section>
</div>
    )
}

export default Header;