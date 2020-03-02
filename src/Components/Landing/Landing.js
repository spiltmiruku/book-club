import React from "react";
import "./landing.css";
import teachustooutgrow from "../../resources/teachustooutgrow.jpg";

const Landing = () => {
    let meetingPlace = `Trent's place`;
    let meetingDateTime = 'March 22nd, 2020, 11AM';
    let bookMonth = 'March 2020';
    let discussionLeader = 'Kate';
    let nextPick = 'Dale';

  return (
    <div>
      <h1 className="tag">[READ // GATHER // DISCUSS // REPEAT]</h1>
      <div className="landing-display">
        <section className="current-book">
        <h2>book of the month</h2>

            <img id="book-cover" src={teachustooutgrow} alt="book cover" />
          <div className="book-display">
            <p>{bookMonth}</p>
          </div>
        </section>

        <section className="meeting-info">
  <div className="meet-date-time">
      <p>Upcoming Meeting: </p>
      <p>{meetingDateTime}</p>
      <p>{meetingPlace}</p>
      </div>

          <div className="discussion-leader">
              <p>Discussion Leader: </p>
              <p>{discussionLeader}</p>
              </div>
          <div className="next-pick">
              <p>Next Pick: </p>
              <p>{nextPick}</p>
              </div>
        </section>
      </div>
    </div>
  );
};

export default Landing;
