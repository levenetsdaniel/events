import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { pink, grey } from '@mui/material/colors';
import { Button } from '@mui/material';
import IconButton from '@mui/material/IconButton';


export function LikeButton() {

    const [click, setClicked] = React.useState(false)
    const licked = () => {
        setClicked(!click)
    }

    return (
        <div class='likeButton'>
            <Box sx={{ '& > :not(style)': { m: 1 } }}>
                <IconButton aria-label="like" onClick={licked}>
                    <FavoriteIcon sx={{ color: (click ? pink[500]: grey[500]) }} />
                </IconButton>
            </Box>
        </div>
    );
}