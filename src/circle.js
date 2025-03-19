import React from 'react';
import { CircularProgress, Box, Typography } from '@mui/material';

const CircularProgressBar = ({ value }) => {
  return (
    <Box position="relative" display="inline-flex">
      <CircularProgress 
        variant="determinate" 
        value={value} 
        size={100} 
        thickness={5} 
        sx={{ color: '#00adb5' }}
      />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography 
          variant="h6" 
          component="div" 
          color="white"
        >
          {`${Math.round(value)}%`}
        </Typography>
      </Box>
    </Box>
  );
};

export default CircularProgressBar;
