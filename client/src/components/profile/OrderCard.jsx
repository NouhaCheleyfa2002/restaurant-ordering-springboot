import React from 'react'
import { Button } from '@mui/material'

const OrderCard = () => {
  return (
    <div className='flex justify-between items-center p-5'>
      <div className='flex items-ceter space-x-5'>
        <img src="https://images.pexels.com/photos/1049620/pexels-photo-1049620.jpeg" alt=""
         className='w-16 h-16'/>
         <div>
            <p>Pizza</p>
            <p>$25</p>
         </div>
      </div>
      <div>
        <Button  className='cursor-not-allowed'>Completed</Button>
      </div>
    </div>
  )
}

export default OrderCard
