import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

const buttons = [
    <Button key="one">в избранное</Button>,
    <Button key="two">о мереприятии</Button>,
];



export function EventSelect() {

    const [open, setOpen] = React.useState(false)

    return (



        <div className='eventSelector'>
            <div class='selectButton'>
                <Stack spacing={2} direction="row">
                    <Button variant="text" onClick={() => setOpen(!open)} size='small'>действия</Button>
                </Stack>
            </div>
            <div class={!open ? 'dropDawn' : 'dropDawnOpen'}>
                <Box
                    sx={{
                        display: 'flex',
                        '& > *': {
                            m: 1,
                        },
                    }}
                >
                    <ButtonGroup
                        orientation="vertical"
                        aria-label="vertical outlined button group"
                    >
                        {buttons}
                    </ButtonGroup>
                </Box>
            </div>
        </div>
    );
}