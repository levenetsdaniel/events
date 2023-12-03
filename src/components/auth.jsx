import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { styled } from '@mui/material/styles';
import { Link } from '@mui/material';
import { useCookies } from 'react-cookie'

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
    '&:hover': {
        backgroundColor: '#00ff47',
        borderColor: '#000000',
      },
}));

export function Auth() {
    const [open, setOpen] = useState(false);

    const [cookies, setCookies] = useCookies()

    const [process, setProccess] = useState('logIn');

    const changeStep = () => {
        setProccess(process === 'logIn' ? 'registration' : 'logIn');
        setErrMessage('');
        setLogErrMessage('');
        setPasswordErrMessage('');
        setUsernameErrMessage('');
    };

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [regMessage, setRegMessage] = useState('')
    const loginChanged = (event) => {
        setLogin(event.target.value)
    };
    const passwordChanged = (event) => {
        setPassword(event.target.value)
    };
    const usernameChanged = (event) => {
        setUsername(event.target.value)
    };
    const [errMessage, setErrMessage] = useState('');
    const [logErrMessage, setLogErrMessage] = useState('');
    const [passwordErrMessage, setPasswordErrMessage] = useState('');
    const [usernameErrMessage, setUsernameErrMessage] = useState('');

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
        setRegMessage('');
    }

    const logIn = () => {
        axios.post('/api/logIn', { email: login, password: password }, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            setCookies('token', res.data.token)
            setCookies('id', res.data.id)
            setCookies('name', res.data.name)
        }).catch(err => console.log(err))
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
                <Box sx={style} component="form">
                    <Typography id="modal-modal-title" component="h2">
                        {process === 'logIn' && 'Войти'}
                        {process === 'registration' && 'Регистрация'}
                    </Typography>
                    {regMessage}
                    {errMessage && <div className='errorMessage'>{errMessage}</div>}
                    <Typography>
                        <Box
                            sx={{
                                '& > :not(style)': { m: 1, width: '25ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField id="filled-basic" label="Email" variant="filled" onChange={loginChanged} value={login} />
                        </Box>
                        {logErrMessage && <div className='errorMessage'>{logErrMessage}</div>}
                    </Typography>
                    <Typography>
                        <Box
                            sx={{
                                '& > :not(style)': { m: 1, width: '25ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField id="filled-basic" label="Пароль" variant="filled" onChange={passwordChanged} value={password} />
                        </Box>
                        {passwordErrMessage && <div className='errorMessage'>{passwordErrMessage}</div>}
                    </Typography>
                    {process === 'registration' && (
                        <Typography>
                            <Box
                                sx={{
                                    '& > :not(style)': { m: 1, width: '25ch' },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <TextField id="filled-basic" label="Имя" variant="filled" onChange={usernameChanged} value={username} />
                            </Box>
                            {usernameErrMessage && <div className='errorMessage'>{usernameErrMessage}</div>}
                        </Typography>

                    )}
                    <Typography>
                        {process === 'registration' && (
                            <>
                                <Typography>
                                    <Button variant="outlined" onClick={registrate}> Зарегистрироваться</Button>
                                </Typography>
                                <Typography>
                                    <Link onClick={changeStep}>Войти</Link>
                                </Typography>
                            </>
                        )}
                        {process === 'logIn' && (
                            <>
                                <Typography>
                                    <Button variant="outlined" onClick={logIn}> Войти</Button>
                                </Typography>
                                <Typography>
                                    <Link onClick={changeStep}>Регистрация</Link>
                                </Typography>
                            </>
                        )}
                    </Typography>
                </Box>
            </Modal>
        </div>
    )
}