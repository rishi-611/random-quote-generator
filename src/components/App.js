import React, { useState, useEffect } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "../css/App.css";

const colors = [
  { bg: "#130f40", font: "#130f40" },
  { bg: "#eb4d4b", font: "#eb4d4b" },
  { bg: "#f0932b", font: "#f0932b" },
  { bg: "#6ab04c", font: "#6ab04c" },
  { bg: "#2C3A47", font: "#2C3A47" },
  { bg: "#191919", font: "#191919" },
  { bg: "#591F0A", font: "#591F0A" },
  { bg: "#0267C1", font: "#0267C1" },
  { bg: "#721817", font: "#721817" },
];

const App = function (props) {
  const [quoteInfo, setQuoteInfo] = useState({ quote: "", author: "" });

  const btn = document.querySelector("#new-quote");
  const body = document.querySelector(".main");
  const quoteBox = document.querySelector("#quote-box");
  const tweet = document.querySelector("#tweet-quote");
  const mark = document.querySelector(".quote-mark");

  const randomNum = (length) => Math.floor(Math.random() * length);

  const getData = async function () {
    const { data } = await axios.get("https://api.quotable.io/random");

    setQuoteInfo({ quote: data.content, author: data.author });
  };

  useEffect(() => {
    getData();
  }, []);

  const handleClick = () => {
    getData();
    const color = colors[randomNum(colors.length)];
    console.log(color);
    btn.style.backgroundColor = color.bg;
    body.style.backgroundColor = color.bg;
    quoteBox.style.color = color.font;
    tweet.style.color = color.font;
    mark.style.color = color.font;

    btn.blur();
  };

  return (
    <div className="main">
      <div className="container quote-box bg-light" id="quote-box">
        <div className="text-container ">
          <h2 className="header " id="text">
            <span className="quote-mark ">
              <i className="fas fa-quote-left fa-2x"></i>
            </span>
            {quoteInfo.quote}
          </h2>
          <p id="author" className="author">
            {quoteInfo.author}
          </p>
        </div>
        <div className="btn-container">
          <a
            href="twitter.com/intent/tweet"
            target="blank"
            className="float-start animate"
            id="tweet-quote"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <button
            className="float-end btn animate"
            id="new-quote"
            onClick={handleClick}
          >
            New Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
