import { Button, Card } from '@mui/material'
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
 

const AddressCard = ({item, showButton, handleSelectAddress}) => {
    
  return (
    <Card className='flex gap-5 w-64 p-5'>
      <HomeIcon/>
      <div className='space-y-3 text-gray-500'>
        <h1 className='font-semibold text-lg text-white'>Home</h1>
        <p className='text-gray-400 text-sm'>123 Main Street, Apt 4B</p>
        {showButton && <Button variant='outlined' fullWidth onClick={()=>handleSelectAddress(item)}>select</Button>}
      </div>
    </Card>
  )
}

export default AddressCard
