import React from "react";
import {
  Grid,
  Box,
  Typography,
  Button,
} from "@mui/material";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
//import RightPanel from '../components/RightPanel';
import DashboardCard from "../components/DashboardCard";
import Chart from "../components/Charts";
import "../styles/Dashboard.css";
import ProgressCircle from "../components/ProgressCircle";
import Side from "../components/side";

const Dashboard = () => {
  const [varient1, setVarient1] = React.useState("contained");
  const [varient2, setVarient2] = React.useState("outlined");
  const [month, setMonth] = React.useState("");
  const [month1, setMonth1] = React.useState("");

  const handleChange = (event) => {
    setMonth(event.target.value);
  };
  const handleChange1 = (event) => {
    setMonth1(event.target.value);
  };

  const handleVarient1 = (e)=>{
    setVarient1("outlined");
  };
  const handleVarient2 = (e)=>{
    setVarient2("contained");
  };

  return (
    <Box className="dashboard-container">
      <Grid container>
        <Grid item>
          <Sidebar />
        </Grid>
        <Box >
          
          <Header />
          
          <Grid container >
            <Grid item xs={12} sm={6} md={3.1} className="progressBar">
              <Typography padding={2}  color="grey">
                Attendence Progress
              </Typography>
              <DashboardCard
                color="blue"
                title="Total Attendance Progress"
                className="progressBar"
                value="87%"
              />
            </Grid>
            <Grid item xs={1} sm={3} md={3.1} className="progressBar">

              <div style={{paddingBottom:"16px", paddingTop:"10px" }} className="selectdiv">
                <select onChange={handleChange} className="selectTag">
                <option value="temp">Select Month</option>
                  <option value="Jan">Jan</option>
                  <option value="Feb">Feb</option>
                  <option value="March">March</option>
                  <option value="April">April</option>
                  <option value="May">May</option>
                  <option value="June">June</option>
                  <option value="July">July</option>
                  <option value="Aug">Aug</option>
                  <option value="Sept">Sept</option>
                  <option value="Oct">Oct</option>
                  <option value="Nov">Nov</option>
                  <option value="Dec">Dec</option>
                </select>
              </div>
              <Box>
                <DashboardCard
                  color="darkgreen"
                  title = " Attendance Progress"
                  className="progressBar"
                  value="92%"
                  month={month}
                />
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={1.9} className="progressBar">
              <Box
                display="flex"
                flexDirection={"column"}
                alignItems="center"
                height="100px"
                className="progress"
              >
                <Box display="flex">
                  <Box >
                    <Typography padding={1}  paddingRight={12} color="grey">
                      Daily Attendence Progress
                    </Typography>
                  </Box>
                  <div className="selectTag1">
                    <select onChange={handleChange1} className="selectTag">
                      <option value="temp">Select Month</option>
                      <option value="Jan">Jan</option>
                      <option value="Feb">Feb</option>
                      <option value="March">March</option>
                      <option value="April">April</option>
                      <option value="May">May</option>
                      <option value="June">June</option>
                      <option value="July">July</option>
                      <option value="Aug">Aug</option>
                      <option value="Sept">Sept</option>
                      <option value="Oct">Oct</option>
                      <option value="Nov">Nov</option>
                      <option value="Dec">Dec</option>
                    </select>
                  </div>
                </Box>
                {/* 80% Done */}

                <Box marginTop={0} display={"flex"}>
                  <ProgressCircle value={80} color="green" label="Done" />
                  {/* 16% In Process */}
                  <ProgressCircle value={66} color="gold" label="In Process" />

                  {/* 4% Pending */}
                  <ProgressCircle value={40} color="red" label="Pending" />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={10}>
             
              <Box className="BoxChart">
                <Box className="buttonChart">
                  <Button className="btn1chart" marginTop={20} variant={varient1} onClick={handleVarient1}>Teamwise Progress</Button>
                  <Button  variant={varient2} onClick={handleVarient2}>Individual Progress</Button>
                </Box>
                <Chart />
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box >
          <Box>
            <Side></Side>
          </Box>
        </Box>
      </Grid>
    </Box>
  );
};

export default Dashboard;
