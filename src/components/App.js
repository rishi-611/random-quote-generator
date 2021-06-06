import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const App = function (props) {
  return (
    <div className="main">
      <div className="container">
        <h1 className="header" id="text">
          Everyday, you should become a better yourself
        </h1>
        <p id="author">Rishi Dubey</p>
      </div>
    </div>
  );
};

export default App;
