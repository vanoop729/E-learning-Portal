import React from "react";
import "./SubjectContent.css";
import {Link} from "react-router-dom";

function SubjectContent() {
  return (
    <div className= "full">
      <Link to = "/subject"> Go back to the previous page</Link>
      {/* Start coding from here */}
      <div className="Titles">
        <h3>Overview</h3>
        <div className="Topics">
        <ol>
          <li><a href="#">Introduction</a></li>
          <li><a href="#">Array</a></li>
          <li><a href="#">Stack</a></li>
          <li><a href="#">Queue</a></li>
          <li><a href="#">Linked list</a></li>
          <li><a href="#">Binary Trees</a></li>
          <li><a href="#">Heap</a></li>
          <li><a href="#">Hashing</a></li>
          <li><a href="#">Graphs</a></li>
          <li><a href="#">Advanced Data Structures</a></li>
          <li><a href="#">Summary</a></li>
          <li><a href="#">Quizes</a></li>
          <li><a href="#">Puzzles</a></li>
          <li><a href="#">Lab experiments</a></li>
          <li><a href="#">Online resources</a></li>
        </ol>
        </div>
      </div>
    </div>
  );
}

export function SubjectDescription() {
  return (
    <div className="Content">
     
      <h3>Description</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ullam
        tempore quam dignissimos consequatur quis molestiae cumque, magni nemo
        odit cum quas optio? Quam vero suscipit non libero ad neque aliquid
        temporibus assumenda nisi, dolor harum excepturi consequuntur
        accusantium quisquam repudiandae deleniti at ut facilis ea eius quidem
        ipsam alias!
      </p>
    </div>
  );
}

export default SubjectContent;
