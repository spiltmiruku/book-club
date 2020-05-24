import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import bookstack from '../../resources/bookstack.svg';
import location from '../../resources/location.svg';
import thumbsup from '../../resources/thumbsup.svg';


const Header = () => {
    return (
<div className='side-menu'>

    <section className='menu-bar'>
    {/* <Link to='/'> </Link> */}
    <h1 className='title'>Book Club</h1>
        {/* <div className='menu-select'>
        <img id="menu-icon" src={bookstack} alt="stack of books icon" />
            Previous Books
            </div>
        <div className='menu-select'>
        <img id="menu-icon" src={location} alt="location icon" />
            Nominate a Book
            </div>
        <div className='menu-select'>
        <img id="menu-icon" src={thumbsup} alt="thumbs up icon" />
            Host a Meeting
            </div>

        <div className='login'>Login</div> */}
    </section>
</div>
    )
}

export default Header;