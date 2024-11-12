import React from "react";// Replace with actual path to your clock icon
import "../styles/MeetingReminder.css";
import calenderImg  from "../assets/images/Group.png";

const MeetingReminder = () => {
  return (
    <div className="container">
      <div className="icon">
        <img src={calenderImg} 
            style={{height:"60px", width:"60px", marginLeft:"20px"}}
         alt="Calendar Icon" />
      </div>
      <div className="content" style={{marginLeft:"30px"}}>
        <div className="title">Today 5:15 pm</div>
        <div className="subtitle">Meeting with Vinod</div>
        <div className="description">Client Meeting</div>
      </div>
    </div>
  );
};

export default MeetingReminder;
