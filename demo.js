import React, { useState } from 'react';
import Stack from '@mui/material/Stack';

import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';

import Test from './Test.jsx';

export default function BasicButtons() {
  const [space, setSpace] = useState(10);
  return (
    <Stack spacing={2} direction="row">
      <Test
        icon={<AccessAlarmIcon />}
        space={space}
        text={'this is a text message'}
      />
    </Stack>
  );
}
