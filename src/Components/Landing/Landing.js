import React from "react";
import "./landing.css";
import teachustooutgrow from "../../resources/teachustooutgrow.jpg";

const Landing = () => {
  return (
    <div>
      <h1 className="tag">[READ // GATHER // DISCUSS // REPEAT]</h1>
      <div className="landing-display">
        <section className="current-book">
        <h2>book of the month</h2>

            <img id="book-cover" src={teachustooutgrow} alt="book cover" />
          <div className="book-display">
          </div>
            <p>March 2020</p>
        </section>

        <section className="meeting-info">
          <div className="meet-date-time">Upcoming Meeting:</div>
          <div className="discussion-leader">Discussion Leader:</div>
          <div className="next-pick">Next Pick:</div>
        </section>
      </div>
    </div>
  );
};

export default Landing;
