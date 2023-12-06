import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#000000',
    },
  },
});

export function SearchField(props) {

  const filter=(e) => {
    var filteredList = events.filter(function (item) {
      return item.toLowerCase().search(e.target.value.toLowerCase()) !== -1;
    });
    setEvents(filteredList);
  }

  const [search, setSearch] = React.useState('')
  const searchChanged = (event) => {
    setSearch(event.target.value)
  };

  return (
    <div className='search'>
      <div className='searchField'>
        <Box
          sx={{
            width: '100%',
            maxWidth: '100%',
          }}
        >
          <div className='text'>
            <ThemeProvider theme={theme}>
              <TextField fullWidth label="Поиск" id="fullWidth" variant="standard" onChange={searchChanged} value={search} />
            </ThemeProvider>
          </div>
        </Box>
      </div >
      <div className='searchButton'>
        <Box sx={{ '& button': { m: 1 } }}>
          <Stack spacing={2} direction="row">
            <IconButton size='large' aria-label='search'>
              <SearchIcon></SearchIcon>
            </IconButton>
          </Stack>
        </Box>
      </div>
    </div >
  );
}

