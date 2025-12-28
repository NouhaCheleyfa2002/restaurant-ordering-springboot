import React from 'react'
import Modal from '@mui/material/Modal';
import { useLocation, useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import { style } from '../card/CardPage';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';

const Auth = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const handleOnClose = () => {
        navigate('/');
    }

  return (
    <>
     <Modal open={location.pathname === '/account/register' || location.pathname === '/account/login'}
      onClose={handleOnClose} >

        <Box sx={style}>
            {location.pathname === '/account/register' ? 
            <RegisterForm /> : <LoginForm />}
        </Box>
    </Modal> 
    </>
  )
}

export default Auth
