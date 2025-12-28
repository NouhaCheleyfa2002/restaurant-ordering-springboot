import React from 'react'
import { Card, CardMedia } from '@mui/material';
import { CardContent, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { CardActions, IconButton } from '@mui/material';

const EventCard = () => {
  return (
    <div>
      <Card sx={{ Width: 345 }}>
        <CardMedia image="https://images.pexels.com/photos/2471171/pexels-photo-2471171.jpeg" 
        sx={{ height: 345 }} />
        <CardContent>
            <Typography variant="h5">
                Los Polos Hermanos
            </Typography>
            <Typography variant="body2">
                L50% off on second order
            </Typography>
            <div className='py-2 space-y-2 text-left'>
                <p>LA</p>
                <p className='text-sm text-blue-500'>12th NOV, 2025 | 7:00 PM</p>
                <p className='text-sm text-red-500'>12th Dec, 2025 | 7:00 PM</p>
            </div>
        </CardContent>
        {false && <CardActions>
            <IconButton>
                <DeleteIcon />
            </IconButton>
        </CardActions>}
      </Card>
    </div>
  )
}

export default EventCard
