import React from "react";
import "./SubjectContent.css";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { SubjectContentData } from "./SubjectContentData";
import { Link } from "react-router-dom";
import { useState } from "react";
import Introduction from "../Data/DS/Intro/Introduction";
import Array from "../Data/DS/Array/Array";
import Stack from "../Data/DS/Stack/Stack";
import Queue from "../Data/DS/Queue/Queue";

function SubjectContent() {
  const [topicComponent, setTopicComponent] = useState(<Introduction />);
  const [currentUserScore, setcurrentUserScore] = useState(0);

  function userScore(sc) {
    setcurrentUserScore(sc);
  }

  function handleComp(comp) {
    let compn = parseInt(comp);
    if (compn === 0) {
      setTopicComponent(<Introduction />);
    }

    if (compn === 1) {
      setTopicComponent(<Array userScore={userScore} />);
    }

    if (compn === 2) {
      setTopicComponent(<Stack userScore={userScore} />);
    }

    if (compn === 3) {
      setTopicComponent(<Queue userScore={userScore} />);
    }
  }

  return (
    <div className="subject-content-page">
      <div className="subject-details">
        {/* Subject details */}
        <h4>
          <Link to="/subject">
            <ArrowBackIcon fontSize="large" className="go-back" />
          </Link>
          {"{Subject name and subject Code}"}
        </h4>

        {/* User subject score details */}
        <div className="user-subject-score">
          <h4>User Score :&nbsp;{currentUserScore}</h4>
        </div>
      </div>
      <div className="subject-content-main">
        <div className="overview">
          <div className="Titles">
            <h3>Overview</h3>
            <div className="Topics">
              <ul>
                {SubjectContentData.map((item, index) => {
                  return (
                    <li
                      className="sidebar-li"
                      key={index}
                      data-compo={index}
                      onClick={(e) => {
                        handleComp(e.target.dataset.compo);
                      }}
                    >
                      {item.title}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        <div className="Content">{topicComponent}</div>
      </div>
    </div>
  );
}

export default SubjectContent;
