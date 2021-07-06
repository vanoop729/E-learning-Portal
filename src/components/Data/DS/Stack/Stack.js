import React from "react";
import "./Stack.css";
import { useState } from "react";
import ReactPlayer from "react-player";

function Stack(props) {
  return (
    <div className="intro">
      <h2>Stack</h2>
      <br />
      <p style={{ textAlign: "justify", fontSize: 19 }}>
        Stack is a linear data structure which follows a particular order in
        which the operations are performed. The order may be LIFO(Last In First
        Out) or FILO(First In Last Out).
      </p>
      <br />
      <img
        style={{ border: "none" }}
        src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/gq/2013/03/stack.png"
        alt="queue"
      />
      <br />
      <p style={{ textAlign: "justify", fontSize: 19 }}>
        There are many real-life examples of a stack. Consider an example of
        plates stacked over one another in the canteen. The plate which is at
        the top is the first one to be removed, i.e. the plate which has been
        placed at the bottommost position remains in the stack for the longest
        period of time. So, it can be simply seen to follow LIFO(Last In First
        Out)/FILO(First In Last Out) order.
        <ul>
          <p>
            Stack operations may involve initializing the stack, using it and
            then de-initializing it. Apart from these basic stuffs, a stack is
            used for the following two primary operations
          </p>
          <li>push() − Pushing (storing) an element on the stack.</li>
          <li>pop() − Removing (accessing) an element from the stack.</li>
          <p>
            To use a stack efficiently, we need to check the status of stack as
            well. For the same purpose, the following functionality is added to
            stacks −
          </p>
          <li>
            peek() − get the top data element of the stack, without removing it.
          </li>
          <li>isfull() − Checks if the stack is full.</li>
          <li>isempty() − Checks if the stack is empty.</li>
        </ul>
      </p>
      <br />
      <ReactPlayer url="https://youtu.be/1j2gWyY5CK4" controls />
      <br />

      <div className="code-compiler">
        <h4>Code</h4>
        <iframe
          title="stack-code"
          src="https://trinket.io/embed/python/03aa9596e8?toggleCode=true"
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
      questionText:
        "Process of inserting an element in stack is called ____________",
      answerOptions: [
        {
          answerText: "Create",
          isCorrect: false,
        },
        {
          answerText: "Push",
          isCorrect: true,
        },
        {
          answerText: "Evaluation",
          isCorrect: false,
        },
        { answerText: "Pop", isCorrect: false },
      ],
    },
    {
      questionText:
        "Process of removing an element from stack is called __________",
      answerOptions: [
        { answerText: "Create", isCorrect: false },
        { answerText: "Push", isCorrect: false },
        { answerText: "Pop", isCorrect: true },
        { answerText: "Evaluation", isCorrect: false },
      ],
    },
    {
      questionText:
        "Pushing an element into stack already having five elements and stack size of 5, then stack becomes ___________",
      answerOptions: [
        { answerText: "Overflow", isCorrect: false },
        { answerText: "Crash", isCorrect: false },
        { answerText: "underflow", isCorrect: false },
        { answerText: "Overflow", isCorrect: true },
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

export default Stack;
