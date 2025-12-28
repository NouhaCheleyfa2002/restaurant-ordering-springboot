import { Chip, IconButton } from '@mui/material'
import React from 'react'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const CardItem = () => {
  return (
    <div className='px-5'>
      <div className='lg:flex items-center lg:space-x-5'>
        <div>
            <img className='w-[10rem] h-[7rem] object-cover' src="https://images.pexels.com/photos/1199960/pexels-photo-1199960.jpeg"/>
            
        </div>
        <div className='flex items-center justify-between lg:w-[70%]'>
            <div className='space-y-1 lg:space-y-3 w-full'>
                <p>Cheese Burst burger</p>
                <div className='flex items-center space-x-1'>
                    <IconButton>
                        <RemoveCircleOutlineIcon />
                    </IconButton>
                    <div className='w-5 h-5 text-xs flex items-center justify-center'>
                        5
                    </div>
                    <IconButton>
                        <AddCircleOutlineIcon />
                    </IconButton>
                </div>
                <p>Price: $12.99</p>
                <div className='pt-3 space-x-2'>
                    {[1,1,1].map((item)=><Chip label="bread" size="small" />)}
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default CardItem
