import React from "react";
import "./landing.css";
import currentbook from "../../resources/currentbook.jpg";

const Landing = () => {
  let meetingPlace = `3:00 PM MT @ discord`;
  let meetingDateTime = "May 2024";
  let bookMonth = "April 2024";
  let nextPick = "";
  let discussionLeader = "";

  return (
    <div>
      <h1 className="tag">[READ // GATHER // DISCUSS // REPEAT]</h1>
      <div className="landing-display">
        <section className="current-book">
          <h2>book of the month</h2>

          <img id="book-cover" src={currentbook} alt="book cover" />
          <div className="book-display">
            <p>{bookMonth}</p>
          </div>
        </section>

        <section className="meeting-info">
          <div className="meet-date-time">
            <p>Upcoming Meeting: </p>
            <p style={{ fontWeight: "bold" }}>{meetingDateTime}</p>
            <p style={{ fontWeight: "bold" }}>{meetingPlace}</p>
          </div>

          <div className="discussion-leader">
            <p>Discussion Leader: </p>
            <p style={{ fontWeight: "bold" }}>{discussionLeader}</p>
          </div>
          <div className="next-pick">
            <p>Next Pick: </p>
            <p style={{ fontWeight: "bold" }}>{nextPick}</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Landing;
