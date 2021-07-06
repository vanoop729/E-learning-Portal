import React from "react";
import "./Dashboard.css";
import ds_badge from "../../assets/ds_badge.png";
import java_badge from "../../assets/java_badge.png";
import py_badge from "../../assets/py_badge.png";
import BadgeIcon from "@material-ui/icons/Beenhere";
import AnalyticsIcon from "@material-ui/icons/Assessment";
import userIconImg from "../../assets/user-icon.png";
import { Doughnut } from "react-chartjs-2";
import { chartColors } from "./color";
import { Bar } from "react-chartjs-2";

function Dashboard() {
  const options = {
    legend: {
      display: false,
      position: "right",
    },
    elements: {
      arc: {
        borderWidth: 0,
      },
    },
  };

  const data = {
    maintainAspectRatio: false,
    responsive: false,
    labels: ["DS", "JAVA", "CPP"],
    datasets: [
      {
        data: [300, 100, 50],
        backgroundColor: chartColors,
        hoverBackgroundColor: chartColors,
      },
    ],
  };

  const state = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Submissions",
        backgroundColor: "#54f542",
        borderColor: "red",
        borderWidth: 2,
        data: [65, 59, 70, 81, 56, 8, 65, 59, 76, 81, 36, 18],
      },
    ],
  };

  return (
    <div className="dashboard-container">
      {/* left side */}
      <div className="user-details">
        <div className="user-info">
          <img src={userIconImg} alt="user-icon" />
          <h5>James Paul</h5>
          <h6>URK18CSXXX</h6>

          <p>Department:</p>
          <h6>Computer Science and Engineering</h6>

          <p>Level:</p>
          <h6>3</h6>
        </div>
      </div>

      {/* Right side */}
      <div className="user-achievements">
        <div className="badges">
          <div className="my-card-title">
            <BadgeIcon className="badge_icon" />
            <h4>Badges</h4>
          </div>
          <div className="badge-container">
            <img src={ds_badge} alt="badge" />
            <img src={java_badge} alt="badge" />
            <img src={py_badge} alt="badge" />
          </div>
        </div>

        <div className="analytics">
          <div className="my-card-title">
            <AnalyticsIcon className="analytics_icon" />
            <h4>Analytics</h4>
          </div>
          <div className="charts-container">
            <div className="doughnut-container">
              <Doughnut data={data} options={options} />
            </div>

            <div className="barchart-container">
              <Bar
                data={state}
                options={{
                  title: {
                    display: true,
                    text: "Overall submissions per month",
                    fontSize: 20,
                  },
                  legend: {
                    display: true,
                    position: "right",
                  },
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
