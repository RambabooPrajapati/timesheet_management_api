import React from "react";
import { CircularProgress, Box, Typography } from "@mui/material";
import "../styles/ProgressCircle.css";

const ProgressCircle = ({ value, color, label }) => {
  return (
    <Box  className="OuterboxCircle">
      <Box position="relative" display="inline-flex" className="OuterboxCircle">
      <CircularProgress
        variant="determinate"
        value={value}
        size={100}
        thickness={3.5}
        style={{color}}
        className="circle1"
      />
      <Box
        top={0}
        left={0}
        bottom={40}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
        className="progressbox"
      >
        <Typography color={color} variant="h6" component="div">
          {`${value}%`}
        </Typography>
      </Box>
      <Box
        top={70}
        left={0}
        right={0}
        bottom={40}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
        >
        <Typography color={color} variant="body2" component="div">
          {label}
        </Typography>
      </Box>
    </Box>
    </Box>
  );
};

export default ProgressCircle;
