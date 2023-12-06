import { Auth } from '../components/auth.jsx';
import { LikeButton } from '../components/likeButton.jsx';
import { LogoutButton } from '../components/logoutButton.jsx';
import { useCookies } from 'react-cookie';
import React, { useEffect, useState, useMemo } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import axios from 'axios';
import Button from '@mui/material/Button';

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

  const [likedEvents, setLikedEvents] = useState(events)

  const [liked, setLiked] = useState(false)

  const [cookies, setCookies] = useCookies();

  const preparedCookies = useMemo(() => {
    return cookies.token ? cookies : props.cookies;
  }, [cookies, props.cookies]);

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

  const [search, setSearch] = useState('');

  // const showLiked = (liked) => {
  //   if (!liked) {
  //     setLiked(true)
  //     setSortEvents(events.liked)
  //   }
  // }

  useEffect(() => {
    setCookies('id', props.cookies.id || '');
    setCookies('name', props.cookies.name || '');
    setCookies('token', props.cookies.token || '');
  }, [props.cookies]);

  return (
    <div className="App">
      {/* // modal */}
      <div className='head'>

        {preparedCookies.id ? <LogoutButton /> : <Auth />}

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
          <Button variant="contained" /*onClick={showLiked(liked)}*/>изб</Button>
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
                {preparedCookies.id != '' && (
                  <LikeButton id={event.id} user={cookies.id} liked={!!event.liked}></LikeButton>
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
  const userId = context.req.cookies.id
  console.log(userId)
  const response = await axios.get('http://localhost:3000/api/getEvents', { params: { userId } }).catch(err => console.log(err))

  return {
    props: { cookies: context.req.cookies, events: response.data.events }
  }
}




