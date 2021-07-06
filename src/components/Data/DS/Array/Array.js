import React from "react";
import "./Array.css";
import { useState } from "react";
import ReactPlayer from "react-player";

function Array(props) {
  return (
    <div className="intro">
      <h2>Array</h2>
      <br />
      <p style={{ textAlign: "justify", fontSize: 19 }}>
        An array is a data structure that contains a group of elements.
        Typically these elements are all of the same data type, such as an
        integer or string. Arrays are commonly used in computer programs to
        organize data so that a related set of values can be easily sorted or
        searched.
      </p>
      <br />
      <img
        style={{ border: "none" }}
        src="https://media.geeksforgeeks.org/wp-content/uploads/array-2.png"
        alt="array"
      />
      <br />
      <p style={{ textAlign: "justify", fontSize: 19 }}>
        The above image can be looked as a top-level view of a staircase where
        you are at the base of the staircase. Each element can be uniquely
        identified by their index in the array As per the above illustration,
        following are the important points to be considered.
      </p>
      <ul>
        <li>Index starts with 0.</li>
        <li>Array length is 10 which means it can store 10 elements.</li>
        <li>
          Each element can be accessed via its index. For example, we can fetch
          an element at index 6 as 9.
        </li>
      </ul>
      <br />
      <ReactPlayer url="https://youtu.be/55l-aZ7_F24" controls />
      <br />
      <div className="code-compiler">
        <h4>Code</h4>
        <iframe
          title="array-code"
          src="https://trinket.io/embed/python/dc8feafb17?toggleCode=true"
          width="100%"
          height="600"
          frameborder="0"
          marginwidth="0"
          marginheight="0"
          allowfullscreen
        ></iframe>
      </div>
      <Mcq userScore={props.userScore} />
    </div>
  );
}

function Mcq(props) {
  const questions = [
    {
      questionText: "Which of these best describes an array?",
      answerOptions: [
        {
          answerText: "A data structure that shows a hierarchical behavior",
          isCorrect: false,
        },
        {
          answerText: "Container of objects of similar types",
          isCorrect: true,
        },
        {
          answerText: "Arrays are immutable once initialised",
          isCorrect: false,
        },
        { answerText: "Array is not a data structure", isCorrect: false },
      ],
    },
    {
      questionText:
        "Which of the following is the correct way to declare a multidimensional array in Java?",
      answerOptions: [
        { answerText: "int[] arr", isCorrect: false },
        { answerText: "int arr[[]]", isCorrect: false },
        { answerText: "int[][]arr", isCorrect: true },
        { answerText: "int[[]] arr", isCorrect: false },
      ],
    },
    {
      questionText:
        "Which of the following concepts make extensive use of arrays?",
      answerOptions: [
        { answerText: "Binary trees", isCorrect: false },
        { answerText: "Scheduling of processes", isCorrect: false },
        { answerText: "Caching", isCorrect: false },
        { answerText: "Spatial locality", isCorrect: true },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      props.userScore(score + 1);
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <div className="mcq-app">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Array;
