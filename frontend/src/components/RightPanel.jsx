import React from 'react';
import { Box, Card, CardContent, Typography, Grid, Avatar, Paper, TextField, Button } from '@mui/material';
import SideNavbar from './SideNavbar';

const RightPanel = () => {
  return (
    
    <Grid container sx={{ backgroundColor: '#ebebeb', height: '100vh', width:"3 00px"  }}>
        <SideNavbar/>
      <Grid item xs={12}>
        <Paper sx={{ backgroundColor: '#b388ff', borderRadius: '12px', padding: '1rem', height: '800px' }}>
          {/* Team Section */}
          <Box sx={{ backgroundColor: '#ce93d8', padding: '0.1rem', borderRadius: '8px' }}>
            <Typography variant="h6">Team</Typography>
          </Box>
          <Card sx={{ backgroundColor: '#fff', marginBottom: '0.5rem' }}>
            <CardContent>
              <Typography variant="body1">Team Creative</Typography>
              <Typography variant="caption" color="textSecondary">10 Mem - 10:36am</Typography>
            </CardContent>
          </Card>
          <Card sx={{ backgroundColor: '#fff', marginBottom: '0.5rem' }}>
            <CardContent>
              <Typography variant="body1">Team Design</Typography>
              <Typography variant="caption" color="textSecondary">26 Mem - 10:36am</Typography>
            </CardContent>
          </Card>

          {/* Individual Section */}
          <Box sx={{ backgroundColor: '#80cbc4', padding: '0.5rem', borderRadius: '8px', marginTop: '0.5rem' }}>
            <Typography variant="h6">Individual</Typography>
          </Box>
          <Card sx={{ backgroundColor: '#fff', marginBottom: '0.5rem' }}>
            <CardContent>
              <Grid container alignItems="center">
                <Avatar sx={{ width: '30px', height: '30px', marginRight: '10px' }} src="/ravikumar.png" />
                <Box>
                  <Typography variant="body1">Ravikumar</Typography>
                  <Typography variant="caption" color="textSecondary">Project Time - 11:26am</Typography>
                </Box>
              </Grid>
            </CardContent>
          </Card>
          <Card sx={{ backgroundColor: '#fff', marginBottom: '0.5rem' }}>
            <CardContent>
              <Grid container alignItems="center">
                <Avatar sx={{ width: '30px', height: '30px', marginRight: '10px' }} src="/suresh.png" />
                <Box>
                  <Typography variant="body1">Suresh</Typography>
                  <Typography variant="caption" color="textSecondary">I share It - 11:10am</Typography>
                </Box>
              </Grid>
            </CardContent>
          </Card>
          <Card sx={{ backgroundColor: '#fff', marginBottom: '0.5rem' }}>
            <CardContent>
              <Grid container alignItems="center">
                <Avatar sx={{ width: '30px', height: '30px', marginRight: '10px' }} src="/dharmendra.png" />
                <Box>
                  <Typography variant="body1">Dharmendra</Typography>
                  <Typography variant="caption" color="textSecondary">Team Lead</Typography>
                </Box>
              </Grid>
            </CardContent>
          </Card>

          {/* Chat Section */}
          <Box sx={{ backgroundColor: '#eeeeee', padding: '1rem', borderRadius: '12px', marginTop: '1rem', minHeight: '300px' }}>
            <Typography variant="body2" align="left" gutterBottom>
              Dharmendra: Are You Done? (10:36am)
            </Typography>
            <Typography variant="body2" align="right" gutterBottom>
              Not yet. Let you know once I am done. (10:38am)
            </Typography>
            <Typography variant="body2" align="left" gutterBottom>
              Dharmendra: Are You Done? (10:54am)
            </Typography>
            <Typography variant="body2" align="right" gutterBottom>
              Not yet. Let you know once I am done. (10:56am)
            </Typography>

            {/* Message Input Box */}
            <Box sx={{ display: 'flex', gap: '10px', marginTop: '1rem' }}>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Type here"
                size="small"
              />
              <Button variant="contained" color="primary">
                Send
              </Button>
            </Box>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default RightPanel;
