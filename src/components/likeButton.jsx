import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { pink, grey } from '@mui/material/colors';
import IconButton from '@mui/material/IconButton';
import axios from 'axios';




export function LikeButton(props) {
    const { id, user } = props;

    const [click, setClicked] = React.useState(false)

    const [status, setStatus] = React.useState(true)

    axios.post('/api/isLiked', { eventId: id, userId: user }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).catch(err => {
        console.log(err)
    })

    const handleClick = () => {
        setClicked(!click)
        setStatus(!status)
        console.log(user, id)
        if (!status) {
            axios.post('/api/addUserToEvent', { user: user, event: id }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).catch(err => {
                console.log(err)
            })
        } else {
            axios.post('/api/removeUserToEvent', { user: user }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).catch(err => {
                console.log(err)
            })
        }
    }
    return (
        <div className='likeButton'>
            <Box sx={{ '& > :not(style)': { m: 1 } }}>
                <IconButton aria-label="like" onClick={handleClick}>
                    <FavoriteIcon sx={{ color: (click ? pink[500] : grey[500]) }} />
                </IconButton>
            </Box>
        </div>
    );
}