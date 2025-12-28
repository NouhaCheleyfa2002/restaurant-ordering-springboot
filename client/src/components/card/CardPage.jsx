import React from 'react';
import { Divider, Button, Card, Grid, Box, Modal } from '@mui/material';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import { TextField } from 'formik-mui';
import { object, string } from 'yup';

import CardItem from './CardItem';
import AddressCard from './addressCard';


export const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  outline: 'none',
  boxShadow: 24,
  p: 4,
};

const initialValues = {
  streetAddress: '',
  state: '',
  pincode: '',
  city: '',
}

const validationSchema = object().shape({
  streetAddress: string().required('street Address is Required'),
  state: string().required('State isRequired'),
  pincode: string().required('Pincode is required'),
  city: string().required('city is Required'),

});

const items = [1,1];

const CardPage = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpenAddressModal = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSubmit=(value) => {
    console.log("address added", value);
  }

  const createOrderSelectedAddress = () => {
  }

  
  return (
    <div>
        <main className='lg:flex justify-between'>
            <section className='lg:w-[30%] p-10 space-y-6 lg:min-h-screen'>
                {items.map((item)=><CardItem />)}

                <Divider/>  
            <div className='billDetails px-5 text-sm'>
              <p className='font-extralight py-5'>Bill Details</p>
              <div className='space-y-3'>
                <div className='flex justify-between tetxt-gray-400'>
                  <p>Item Total</p>
                  <p>$25.98</p>
                </div>
                <div className='flex justify-between tetxt-gray-400'>
                  <p>delivery Fee</p>
                  <p>$5.98</p>
                </div>
                <div className='flex justify-between tetxt-gray-400'>
                    <p>Restaurant Charges</p>
                    <p>$25.98</p>
                </div>
                <Divider/> 
              </div>
              <div className='flex justify-between text-gray-400'>
                <p>Total</p>
                <p>$57.94</p>
              </div>
            
            </div>
            </section>
            <Divider orientation='vertical' flexItem/> 
            <section className='lg:w-[70%] flex justify-between px-5 pb-10 lg:pb-0'>
              <div>
                <h1 className='text-center font-semibold text-2xl py-10'>Choose delivery Address</h1>
                <div className='flex gap-5 flex-wrap justify-center'>
                  {[1,1,1,1,1].map((item)=>
                  <AddressCard handleSelectAddress={createOrderSelectedAddress} item={item} showButton={true} />
                  )}

                  <Card className='flex gap-5 w-64 p-5'>
                  <AddLocationAltIcon/>
                  <div className='space-y-3 text-gray-500'>
                    <h1 className='font-semibold text-lg text-white'>Add new address</h1>

                    <Button variant='outlined' fullWidth onClick={handleOpenAddressModal}>Add</Button>
                  </div>
                </Card>
                </div>
              </div>
            </section>
        </main>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Formik initialValues={initialValues}
           onSubmit={handleSubmit}
           validationSchema={validationSchema}>
            <Form>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Field
                  component={TextField}
                  name="streetAddress"
                  label="Street Address"
                  fullWidth
                  variant="outlined"
                  
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  component={TextField}
                  name="city"
                  label="City"
                  fullWidth
                />
                <ErrorMessage name="city" component="div" />
              </Grid>
              <Grid item xs={12}>
                <Field
                  component={TextField}
                  name="state"
                  label="State"
                  fullWidth
                />
                <ErrorMessage name="state" component="div" />
              </Grid>
              <Grid item xs={12}>
                <Field
                  component={TextField}
                  name="pincode"
                  label="Pincode"
                  fullWidth
                />
                <ErrorMessage name="pincode" component="div" />
              </Grid>

            </Grid>
            <Button type="submit" variant="contained" sx={{mt:2}}>Add Address</Button>
            </Form>
          </Formik>
        </Box>
      </Modal>

    </div>
  )
}

export default CardPage
