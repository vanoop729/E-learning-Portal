import React from "react";
import "./Event.css";

function Event() {
  return (
    <div className="event-page">
      <h2>Upcoming Events</h2>
      <div className="event-cards">
        <div className="card">
          <div className="upper-Container">
            <div className="image-container">
              <img
                src="https://pbs.twimg.com/profile_images/1112203752553889792/5_FetTj4.png"
                alt="Event Organizer"
              />
            </div>
          </div>
          <div className="lower-container">
            <h3>Event 1</h3>
            <p>
              We aim to serve students in their professional pursuit of research
              and industry interests.Students take up challenges to solve
              problems in areas related to Water, Food, Health and Energy
              through scientific innovation and technological research. We
              conduct events and hackathons which nurtures the capabilities of
              students in our community.
            </p>
            <button className="btn mt-2 mb-2">Register</button>
          </div>
        </div>

        <div className="card">
          <div className="upper-Container">
            <div className="image-container">
              <img
                src="https://pbs.twimg.com/profile_images/1112203752553889792/5_FetTj4.png"
                alt="Event Organizer"
              />
            </div>
          </div>
          <div className="lower-container">
            <h3>Event 2</h3>
            <p>
              We aim to serve students in their professional pursuit of research
              and industry interests.Students take up challenges to solve
              problems in areas related to Water, Food, Health and Energy
              through scientific innovation and technological research. We
              conduct events and hackathons which nurtures the capabilities of
              students in our community.
            </p>
            <button className="btn mt-2 mb-2">Register</button>
          </div>
        </div>

        <div className="card">
          <div className="upper-Container">
            <div className="image-container">
              <img
                src="https://pbs.twimg.com/profile_images/1112203752553889792/5_FetTj4.png"
                alt="Event Organizer"
              />
            </div>
          </div>
          <div className="lower-container">
            <h3>Event 3</h3>
            <p>
              We aim to serve students in their professional pursuit of research
              and industry interests.Students take up challenges to solve
              problems in areas related to Water, Food, Health and Energy
              through scientific innovation and technological research. We
              conduct events and hackathons which nurtures the capabilities of
              students in our community.
            </p>
            <button className="btn mt-2 mb-2">Register</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Event;
