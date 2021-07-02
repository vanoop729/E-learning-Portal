import React from "react";
import "./Event.css";
import { useState } from "react";

function Event() {
  const [name, setName] = useState("Hackathon");
  const [about, setAbout] = useState(
    "We aim to serve students in their professional pursuit of research and industry interests.Students take up challenges to solve problems in areas related to Water, Food, Health and Energy through scientific innovation and technological research. We conduct events and hackathons which nurtures the capabilities of students in our community. Hackathon and events conducted by our community enriches  their passion towards digital learning"
  );

  return (
    <div className="Card">
      <div className="upper-Container">
        <div className="image-container">
          {(setName, setAbout)}
          <img
            src="https://pbs.twimg.com/profile_images/1112203752553889792/5_FetTj4.png"
            alt=""
            height="100px"
            width="100px"
          />
        </div>
      </div>
      <div className="lower-container">
        <h3>{name}</h3>
        <p>{about}</p>
        <button>Register</button>
      </div>
    </div>
  );
}

export default Event;
