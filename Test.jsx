import React from 'react';
import { Button, Typography } from '@mui/material';

const Test = ({ text, icon, space }) => {
  return (
    <Button variant="contained">
      {icon}
      <Typography sx={{ mx: space }}>{text}</Typography>
    </Button>
  );
};

export default Test;
