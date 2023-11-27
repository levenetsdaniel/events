import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export function SearchField() {
  return (
    <div class='search'>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '90ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="standard-basic" label="Поиск" variant="standard" />
      </Box>
    </div>
  );
}