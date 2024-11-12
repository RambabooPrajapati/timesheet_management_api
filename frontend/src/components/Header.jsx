import React from 'react';
import { Typography, Box } from '@mui/material';
import "../styles/header.css";
import MeetingReminder from './MeetingReminder';

const Header = () => {
  return (
    <div style={{display:"flex", justifyContent:"space-between", height:"150px", width:"100%"}}>
    <Box className="outerBox">
      <Box className="header">
        <Box>
        <Typography variant="h4">Good Morning Akash!</Typography>
        </Box>
        <Box className="boxText">
          <Typography >Login</Typography>
          <Typography >21/May/2021 10.24am</Typography>
        </Box>
      </Box>
      <Box className="innerBox">
        <Box className="alertIcon">
          <img height={"20px"} style={{ padding:"10px"}} src="https://as2.ftcdn.net/v2/jpg/05/80/22/47/1000_F_580224736_JstyYDskkT9tcKUwkFWULi10LFfOtfVg.jpg" alt='alertIcon'></img>
        </Box>
        <Box className="textBox">
        <Typography variant="body2" className="sub-header">
          You have still pending yesterday's task <span style={{color:"red"}}>(Ticket 24, Ticket 12)</span> <span style={{color:"grey"}}>If you finished update worksheet</span>
        </Typography>
        </Box>
      </Box>
    </Box>
    <MeetingReminder/>
    </div>
  );
};

export default Header;
