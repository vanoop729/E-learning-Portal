import React from "react";
import "./Subject.css";
import { Link } from "react-router-dom";

function Subject() {
  return (
    <div>
      {/* Leave this Link tag as it is for testing purpose */}
      <Link to="/subject/subject-content"> Go to Subject Content Page</Link>
      {/* Start coding from here */}

      <div class="title">
        <h1>Choose the subject you want to Master</h1>
      </div>

      <div class="flexbox-container">
        <div class="flexbox-item flexbox-item-1"></div>
        <div class="flexbox-item flexbox-item-2"></div>
        <div class="flexbox-item flexbox-item-3"></div>
        <div class="flexbox-item flexbox-item-4"></div>
      </div>
    </div>
  );
}

export default Subject;
