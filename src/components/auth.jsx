import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import * as React from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { styled } from '@mui/material/styles';






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


const AuthButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText('#8EE4AF'),
    backgroundColor: '#8EE4AF',
  }));
export function Auth() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
        setLogin('');
        setPassword('');
        setUsername('');
        setErrMessage('');
        setLogErrMessage('');
        setPasswordErrMessage('');
        setUsernameErrMessage('');
        setRegMessage('')
    }
    const [login, setLogin] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [username, setUsername] = React.useState('');
    const [regMessage, setRegMessage] = React.useState('')
    const loginChanged = (event) => {
        setLogin(event.target.value)
    };
    const passwordChanged = (event) => {
        setPassword(event.target.value)
    };
    const usernameChanged = (event) => {
        setUsername(event.target.value)
    };
    const [errMessage, setErrMessage] = React.useState('');
    const [logErrMessage, setLogErrMessage] = React.useState('');
    const [passwordErrMessage, setPasswordErrMessage] = React.useState('');
    const [usernameErrMessage, setUsernameErrMessage] = React.useState('');


    const logIn = () => {
        axios.post('/api/logIn', { email: login, password: password }, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
    };

    const registrate = () => {
        setRegMessage('');
        setErrMessage('');
        setLogErrMessage('');
        setPasswordErrMessage('');
        setUsernameErrMessage('');
        if (login.length === 0) {
            setLogErrMessage('логин обязателен')
        }
        if (password.length === 0) {
            setPasswordErrMessage('пароль обязателен')
        }
        if (username.length === 0) {
            setUsernameErrMessage('имя пользователя обязательно')
        }
        if (login.length != 0 & password.length != 0 & username.length != 0) {
            axios.post('/api/registrate', { email: login, password: password, name: username }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).catch(err => {
                setErrMessage('пользователь уже существует')
                console.log(err)
            })
            setRegMessage('вы успешно зарегистрировались');
        }
        else {
            setErrMessage('')
        }


    };


    return (
        <div className='AuthButton'>
            <AuthButton onClick={handleOpen} variant="contained"> Войти</AuthButton>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    {regMessage}
                    <div class='errorMessage'>
                        <span>{errMessage}</span>
                    </div>
                    <div class='errorMessage'>
                        <span>{logErrMessage}</span>
                    </div>
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
                            <TextField id="filled-basic" label="email" variant="filled" onChange={loginChanged} value={login} />
                        </Box>
                    </Typography>
                    <div class='errorMessage'>
                        <span>{passwordErrMessage}</span>
                    </div>
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
                            <TextField id="filled-basic" label="Password" variant="filled" onChange={passwordChanged} value={password} />
                        </Box>
                    </Typography>
                    <div class='errorMessage'>
                        <span>{usernameErrMessage}</span>
                    </div>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Имя  (обязательно при регистрации):
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '25ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField id="filled-basic" label="Usarname" variant="filled" onChange={usernameChanged} value={username} />
                        </Box>
                    </Typography>
                    <Typography>
                        <p><Button variant="outlined" onClick={registrate}> Зарегистрироваться</Button></p>
                        <Button variant="outlined" onClick={logIn}> Войти</Button>
                    </Typography>
                </Box>
            </Modal>
        </div>
    )
}