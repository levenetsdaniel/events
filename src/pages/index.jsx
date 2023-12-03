//import './index.css';
import { getEvents } from '../db/dbFunctions';
import { Auth } from '../components/auth.jsx';
import { SearchField } from '../components/search.jsx';
import { LikeButton } from '../components/likeButton.jsx';
import { LogoutButton } from '../components/logoutButton.jsx';
import { useCookies } from 'react-cookie';
import React, { useState } from 'react';
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




export default function Index(props) {
  const [events, setEvents] = useState(props.events);

  const [sortEvents, setSortEvents] = useState(events)

  const handleEventCkick = (id) => {
    console.log(id);
    console.log(cookies.id)
    console.log(cookies.name)
  }

  const [cookies, setCookies] = useCookies()


  const filter = (e) => {
    setSearch(e.target.value)
    if (search === '') {
      setSortEvents(events)
      return
    }
    var filteredList = events.filter(function (item) {
      return item.name.toLowerCase().search(e.target.value.toLowerCase()) !== -1;
    });
    setSortEvents(filteredList);
  }

  const [search, setSearch] = useState('')

  return (
    <div className="App">
      {/* // modal */}
      <div className='head'>
        {cookies.id === '' && (
          <Auth></Auth>
        )}
        {cookies.id != '' && (
          <LogoutButton></LogoutButton>
        )}
        <div className='search'>
          <SearchIcon></SearchIcon>
          <div className='searchField'>
            <Box
              sx={{
                width: '100%',
                maxWidth: '100%',
              }}
            >
              <div className='text'>
                <ThemeProvider theme={theme}>
                  <TextField fullWidth label="Поиск" id="fullWidth" variant="standard" onChange={filter} value={search} />
                </ThemeProvider>
              </div>
            </Box>
          </div >
          {/* <div className='searchButton'>
            <Box sx={{ '& button': { m: 1 } }}>
              <Stack spacing={2} direction="row">
                <IconButton size='large' aria-label='search'>
                  <SearchIcon></SearchIcon>
                </IconButton>
              </Stack>
            </Box>
          </div> */}
        </div >
      </div>


      <div className='main'>


        {
          sortEvents.map((event) => {
            return (

              <div key={event.id} className='eventCard'>
                <a href={event.link}>
                  <div className='eventName'>
                    <h2>{event.name}</h2>
                  </div>
                </a>
                {cookies.id != '' && (
                  <LikeButton id={event.id} onClick={handleEventCkick}></LikeButton>
                )}
              </div>

            )
          })
        }
      </div>
    </div>

  );
};

export const getServerSideProps = async (context) => {
  const events = await getEvents()

  return {
    props: { events }
  }
}




