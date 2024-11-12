import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import "../styles/DashboardCard.css";

const DashboardCard = ({ color, title, value, progress, month }) => {
  return (
    <Card className='card'>
      <CardContent>
        <Typography color={color} variant="h4" paddingLeft={22}>{value}</Typography>
        <Typography color={color} variant="h6">{month}{title}</Typography>
        {progress && (
          <Typography variant="body2">Done: 80%, In Process: 16%, Pending: 4%</Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default DashboardCard;
