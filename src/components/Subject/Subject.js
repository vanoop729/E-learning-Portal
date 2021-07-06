import React from "react";
import "./Subject.css";
import { Link } from "react-router-dom";

function Subject() {
  return (
    <div>
      <div className="title">
        <h2>Welcome {"{Username}"}</h2>
      </div>
      <div className="flexbox-container">
        <Link to="/subject/subject-content">
          <div className="flexbox-item flexbox-item-1">
            <p className="sname">Data Structures and Algorithms</p>
            <p className="scode">18CS2005</p>
            <p className="syear">2nd Year</p>
          </div>
        </Link>

        <Link to="/subject/subject-content">
          <div className="flexbox-item flexbox-item-2">
            <p className="sname">Microprocessor and Microcontroller </p>
            <p className="scode">18EC2029</p>
            <p className="syear">2nd Year</p>
          </div>
        </Link>

        <Link to="/subject/subject-content">
          <div className="flexbox-item flexbox-item-3">
            <p className="sname">Computer Organization and Architecture</p>
            <p className="scode">18CS2004</p>
            <p className="syear">3rd Year</p>
          </div>
        </Link>

        <Link to="/subject/subject-content">
          <div className="flexbox-item flexbox-item-4">
            <p className="sname">Fabrication, Testing and Troubleshooting</p>
            <p className="scode">18CS2012</p>
            <p className="syear">2nd Year</p>
          </div>
        </Link>

        <Link to="/subject/subject-content">
          <div className="flexbox-item flexbox-item-5">
            <p className="sname">
              Engineering Physics - Semiconductors and Optics
            </p>
            <p className="scode">8PH1003</p>
            <p className="syear">1st Year</p>
          </div>
        </Link>

        <Link to="/subject/subject-content">
          <div className="flexbox-item flexbox-item-6">
            <p className="sname">Computer Aided Engineering Drawing</p>
            <p className="scode">18ME1007</p>
            <p className="syear">2nd Year</p>
          </div>
        </Link>

        <Link to="/subject/subject-content">
          <div className="flexbox-item flexbox-item-6">
            <p className="sname">Computer Aided Engineering Drawing</p>
            <p className="scode">18ME1007</p>
            <p className="syear">2nd Year</p>
          </div>
        </Link>

        <Link to="/subject/subject-content">
          <div className="flexbox-item flexbox-item-7">
            <p className="sname">
              Chemistry for Computer Science and Engineering
            </p>
            <p className="scode">18CH1004</p>
            <p className="syear">2nd Year</p>
          </div>
        </Link>

        <Link to="/subject/subject-content">
          <div className="flexbox-item flexbox-item-8">
            <p className="sname">Object Oriented Programming</p>
            <p className="scode">18CS2014</p>
            <p className="syear">3rd Year</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Subject;
