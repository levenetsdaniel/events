import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import * as React from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export function Auth() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    return (
        <div className='AuthButton'>
            <Button onClick={handleOpen} variant="outlined"> Войти</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Логин:
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '25ch' },
                              }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField id="filled-basic" label="Login" variant="filled" />
                        </Box>
                    </Typography>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Пароль:
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '25ch' },
                              }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField id="filled-basic" label="Password" variant="filled" />
                        </Box>
                    </Typography>
                    <Typography>
                        <Button onClick='' variant="outlined"> Зарегистрироваться</Button>
                        <Button variant="outlined"> Войти</Button>
                    </Typography>
                </Box>
            </Modal>
        </div>
    )
}