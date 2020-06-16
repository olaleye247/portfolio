import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

function Header() {
  return (
    <div className="header">
      <div className="container">
        <h1 className="big-text">Hi, I'm Dan,</h1>
        <h1 className="big-text">a web Developer</h1>
        <p className="big-p">and I love building stuffs for the web.</p>
        <p>
          <code>HTML, CSS, JAVASCRIPT (React, Vue), NODEJS, PHP</code>
        </p>
      </div>
    </div>
  );
}

export default Header;
