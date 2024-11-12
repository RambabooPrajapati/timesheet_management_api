import React from "react";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import LogoutIcon from "@mui/icons-material/Logout";
import MoreTimeIcon from "@mui/icons-material/MoreTime";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Chat from "./Chat";
import "../styles/ExpandedView.css";

function ExpandedView({ onCollapse }) {  // Receive the onCollapse prop
  return (
    <div className="expanded-view2">
      {/* Expanded View */}
      <div className="expand-header2">
        <div className="right-arrow" onClick={onCollapse}>  {/* Call onCollapse when clicked */}
          <KeyboardDoubleArrowRightIcon />
        </div>
        <div className="Icon1">
          <div className="IconDiv">
            <AddCircleOutlineIcon className="Icon2" />
          </div>
          <p className="labelpara">New Task</p>
        </div>
        <div className="Icon1">
          <div className="IconDiv">
            <MoreTimeIcon className="Icon2" />
          </div>
          <p className="labelpara">Break</p>
        </div>
        <div className="Icon1">
          <div className="IconDiv">
            <LogoutIcon className="Icon2" />
          </div>
          <p className="labelpara">Logout</p>
        </div>
      </div>
      <div className="headerside">
        <div className="TeamSectiondiv">
          <p className="TeamHeading" style={{ fontSize: "18px" }}>Team</p>
          <div className="team-section1">
            <div className="team-card1">
              <div className="avatarexpanded">
                <img
                  className="avatarexpanded"
                  src="https://img.freepik.com/premium-vector/character-portrait-people-business-different-face_710640-5837.jpg?w=740"
                  alt="Team 1"
                />
              </div>
              <div className="Teamcarttext">
                <span className="teamcardpara">Team Creative </span>
                <span style={{fontSize:"15px", color:"red"}}>10 Mem</span>
                <br />
                <span style={{color:"grey", fontSize:"15px"}}>Dinesh | Mahesh | ...</span>
                <span style={{color:"green", fontSize:"15px", marginLeft:"17px"}}>10:36am</span>
              </div>
            </div>
            <div className="team-card1">
              <div className="avatarexpanded">
                <img
                  className="avatarexpanded"
                  src="https://img.freepik.com/premium-vector/character-portrait-people-business-different-face_710640-5837.jpg?w=740"
                  alt="Team 2"
                />
              </div>
              <div className="Teamcarttext">
                <span className="teamcardpara">Team Design </span>
                <span style={{fontSize:"15px", color:"red"}}>26 Mem</span>
                <br />
                <div className="textspan">
                  <span style={{color:"grey", fontSize:"15px"}}>Dinesh | Mahesh | ...</span>
                  <span style={{color:"green", fontSize:"15px", marginLeft:"16px"}}>10:36am</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="labelpara">Individual</p>
        <div className="team-section1">
          <div className="team-card1">
            <div className="avatarexpanded">
              <img
                className="avatarexpanded"
                src="https://img.freepik.com/free-psd/3d-illustration-person-with-glasses_23-2149436191.jpg?ga=GA1.1.220522105.1728886923&semt=ais_hybrid"
                alt="Team 1"
              />
            </div>
            <div className="Teamcarttext">
              <span className="teamcardpara">Ravikumari </span>
              <br />
              <span style={{color:"grey", fontSize:"15px"}}>Project Team </span>
              <span style={{color:"green", fontSize:"15px", marginLeft:"55px"}}>10:36am</span>
            </div>
          </div>
          <div className="team-card1">
            <div className="avatarexpanded">
              <img
                className="avatarexpanded"
                src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?ga=GA1.1.220522105.1728886923&semt=ais_hybrid"
                alt="Team 2"
              />
            </div>
            <div className="Teamcarttext">
              <span className="teamcardpara">Suresh </span>
              <br />
              <div className="textspan">
                <span style={{color:"grey", fontSize:"15px"}}>Are you sure! </span>
                <span style={{color:"green", fontSize:"15px", marginLeft:"55px"}}> 10:36am</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Chat />
    </div>
  );
}

export default ExpandedView;
