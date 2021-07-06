import React from "react";
import "./Introduction.css";
import Dpic from "../../../../assets/ds-introduction.png";
import ReactPlayer from "react-player";

function Introduction() {
  return (
    <div className="intro">
      <h2>Introduction</h2>

      <p className="intro-start">
        Data Structure can be defined as the group of data elements which
        provides an efficient way of storing and organising data in the computer
        so that it can be used efficiently. Some examples of Data Structures are
        arrays, Linked List, Stack, Queue, etc. Data Structures are widely used
        in almost every aspect of Computer Science i.e. Operating System,
        Compiler Design, Artifical intelligence, Graphics and many more. Data
        Structures are the main part of many computer science algorithms as they
        enable the programmers to handle the data in an efficient way. It plays
        a vital role in enhancing the performance of a software or a program as
        the main function of the software is to store and retrieve the user's
        data as fast as possible.
      </p>

      <img className="intro-image" src={Dpic} alt="Dpic"></img>

      <p className="intro-start">
        Basic Terminology Data structures are the building blocks of any program
        or the software. Choosing the appropriate data structure for a program
        is the most difficult task for a programmer. Following terminology is
        used as far as data structures are concerned. Data: Data can be defined
        as an elementary value or the collection of values, for example,
        student's name and its id are the data about the student. Group Items:
        Data items which have subordinate data items are called Group item, for
        example, name of a student can have first name and the last name.
        Record: Record can be defined as the collection of various data items,
        for example, if we talk about the student entity, then its name,
        address, course and marks can be grouped together to form the record for
        the student.
      </p>

      <div>
        <ReactPlayer
          className="intro-video"
          url="https://www.youtube.com/watch?v=92S4zgXN17o"
          controls
        />
      </div>
    </div>
  );
}
export default Introduction;
