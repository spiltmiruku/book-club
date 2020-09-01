import React from "react";
import "./history.css";
import argonauts from "../../resources/previousbooks/the-argonauts-july-2020.jpg";

const History = () => {
  return (
    <main className="history-main">
      <section className="prev-book-display">
        <img id="prev-book-cover" src={argonauts}></img>
        <div className="prev-book-info">
          <p className="book-month">July 2020</p>
          <p className="book-selector">Catherine</p>
        </div>
      </section>
    </main>
  );
};

export default History;
