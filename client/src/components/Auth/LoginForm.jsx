import { Formik, Form } from 'formik';
import React, { use } from 'react'
import { Field } from 'formik';
import { TextField } from 'formik-mui';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser } from '../state/authentication/Action';



const initialValues = {
  email: '',
  password: ''
};
const LoginForm = () => {

    const dispatch =useDispatch();

    const handleSubmit=(values) => {
        
        dispatch(loginUser({userData:values, navigate}))
    }

    const navigate = useNavigate();

  return (
    <div>
      <Typography variant="h5" className="text-center">
        Login
      </Typography>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
            <Field
              component={TextField}
              name="email"
              label="Email"
              fullWidth
              variant="outlined"
                margin="normal"
            />
            <Field
              component={TextField}
              name="password"
              label="Password"
              type="password"
              fullWidth
              variant="outlined"
                margin="normal"
            />
            <Button type="submit" sx={{ mt: 2, Padding:"1rem" }} fullWidth variant="contained">
              Login
            </Button>
        </Form>
      </Formik>
      <Typography variant="body2" align='center' sx={{ mt: 3 }}>
        Don't have an account?
         <Button onClick={() => navigate("/account/register")} size='small'>
            Register
         </Button>
      </Typography>
    </div>
  )
}

export default LoginForm
