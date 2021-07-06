import React from "react";
import "./Queue.css";
import { useState } from "react";
import ReactPlayer from "react-player";

function Queue(props) {
  return (
    <div className="intro">
      <h2>Queue</h2>
      <br />
      <p style={{ textAlign: "justify", fontSize: 19 }}>
        A Queue is a linear structure which follows a particular order in which
        the operations are performed. The order is First In First Out (FIFO). A
        good example of a queue is any queue of consumers for a resource where
        the consumer that came first is served first. The difference between
        stacks and queues is in removing. In a stack we remove the item the most
        recently added; in a queue, we remove the item the least recently added.
      </p>
      <br />
      <img
        style={{ border: "none" }}
        src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/gq/2014/02/Queue.png"
        alt="queue"
      />
      <br />
      <p style={{ textAlign: "justify", fontSize: 19 }}>
        As in stacks, a queue can also be implemented using Arrays,
        Linked-lists, Pointers and Structures. For the sake of simplicity, we
        shall implement queues using one-dimensional array.
        <ul>
          <li>enqueue() − add (store) an item to the queue.</li>
          <li>dequeue() − remove (access) an item from the queue.</li>
          <p>
            Few more functions are required to make the above-mentioned queue
            operation efficient. These are
          </p>
          <li>
            peek() − Gets the element at the front of the queue without removing
            it.
          </li>
          <li>isfull() − Checks if the queue is full.</li>
          <li>isempty() − Checks if the queue is empty.</li>
        </ul>
      </p>
      <br />
      <ReactPlayer url="https://youtu.be/1j2gWyY5CK4" controls />
      <br />
      <div className="code-compiler">
        <h4>Code</h4>
        <iframe
          title="queue-code"
          src="https://trinket.io/embed/python/c698cbc774?toggleCode=true"
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
        "A linear list of elements in which deletion can be done from one end (front) and insertion can take place only at the other end (rear) is known as",
      answerOptions: [
        {
          answerText: "Queue",
          isCorrect: true,
        },
        {
          answerText: "Stack",
          isCorrect: false,
        },
        {
          answerText: "Tree",
          isCorrect: false,
        },
        { answerText: "Linked list", isCorrect: false },
      ],
    },
    {
      questionText:
        "The data structure required for Breadth First Traversal on a graph is?",
      answerOptions: [
        { answerText: "Stack", isCorrect: false },
        { answerText: "Array", isCorrect: false },
        { answerText: "Queue", isCorrect: true },
        { answerText: "Tree", isCorrect: false },
      ],
    },
    {
      questionText: "A queue follows __________",
      answerOptions: [
        { answerText: "Linear tree", isCorrect: false },
        { answerText: "LIFO (Last In First Out) principle", isCorrect: false },
        { answerText: "Ordered array", isCorrect: false },
        { answerText: "FIFO (First In First Out) principle", isCorrect: true },
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

export default Queue;
