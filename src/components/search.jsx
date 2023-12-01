import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';



export function SearchField() {

  const [search, setSearch] = React.useState('')
  const searchChanged = (event) => {
    setSearch(event.target.value)
  };

  return (
    <div class='search'>
      <div class='searchField'>
        <Box
          sx={{
            width: '100%',
            maxWidth: '100%',
          }}
        >
          <TextField fullWidth label="Поиск" id="fullWidth" onChange={searchChanged} value={search} />
        </Box>
      </div>
      <div class='searchButton'>
        <Box sx={{ '& button': { m: 1 } }}>
          <Stack spacing={2} direction="row">
            <Button variant="contained" size='small'>
              <p>Найти</p>
            </Button>
          </Stack>
        </Box>
      </div>
    </div >
  );
}

