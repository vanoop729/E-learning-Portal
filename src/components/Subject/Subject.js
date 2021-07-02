import React from "react";
import "./Subject.css";
import { Link } from "react-router-dom";

function Subject() {
  return (
    <div>
      {/* Start coding from here */}
      <h1>Subject</h1>

      {/* Leave this Link tag as it is for testing purpose */}
      <Link to="/subject/subject-content"> Go to Subject Content Page</Link>
    </div>
  );
}

export default Subject;
