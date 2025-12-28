import React from 'react'
import { Formik, Form } from 'formik';
import { Field } from 'formik';
import { TextField } from 'formik-mui';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch } from 'react-redux';
import { registerUser } from '../state/authentication/Action';



const initialValues = {
  fullName: '',
  email: '',
  password: '',
  role:''
};
const RegisterForm = () => {
    const dispatch = useDispatch();
    const handleSubmit=(values) => {
            
          dispatch(registerUser({userData:values, navigate}))
            
        }
    
        const navigate = useNavigate();
  return (
    <div>
      <div>
      <Typography variant="h5" className="text-center">
        Resgister
      </Typography>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
            <Field
              component={TextField}
              name="fullName"
              label="Full Name"
              fullWidth
              variant="outlined"
                margin="normal"
            />
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
            <FormControl fullWidth margin="normal">
                <InputLabel id="role-simple-select-label">Role</InputLabel>
                <Field
                    as={Select}
                    id="role-simple-select"
                    name="role"
                    label="Role" 
                >
                    <MenuItem value="ROLE_CUSTOMER">Customer</MenuItem>
                    <MenuItem value="ROLE_RESTAURANT_OWNER">Owner</MenuItem>
                </Field>
                </FormControl>
            
            <Button type="submit" sx={{ mt: 2, Padding:"1rem" }} fullWidth variant="contained">
              Register
            </Button>

        </Form>
      </Formik>
      <Typography variant="body2" align='center' sx={{ mt: 3 }}>
        Already have an account?
         <Button onClick={() => navigate("/account/login")} size='small'>
            Login
         </Button>
      </Typography>
    </div>
    </div>
  )
}

export default RegisterForm
