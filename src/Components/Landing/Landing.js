import React from 'react';
import './landing.css';
import teachustooutgrow from '../../resources/teachustooutgrow.jpg';

const Landing = () => {
   return (
    <div>
        <h1 className='tag'>[READ // GATHER // DISCUSS // REPEAT]</h1>
    <section className='current-book'>
        <div>
            <img id='book-cover' src={teachustooutgrow} alt='book cover' />
        </div>
    </section>

    <section className='meeting-info'>
        <div className='meet-date-time'>
            Upcoming Meeting:
        </div>
        <div className='discussion-leader'>
            Discussion Leader:
        </div>
        <div className='next-pick'>
            Next Pick:
        </div>
    </section>
</div>
   )
}

export default Landing;