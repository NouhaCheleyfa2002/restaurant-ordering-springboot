import React from 'react'
import { Grid } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Divider } from '@mui/material';
import { Typography } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import { useState } from 'react';
import MenuCard from './menuCard';



const categories = [
  "Pizza",
  "Burgers",
  "Sushi",
    "Desserts",
    "Salads",
    "Drinks",
    "Pasta",
];
const foodTypes = [
    { label: "all", value: "all" },
    { label: "Non-Veg", value: "non-veg" },
    { label: "Vegan", value: "vegan" },
    { label: "seasonal", value: "seasonal" },
];

const menu=[1,1,1,1,1,1]

const RestaurantDetails = () => {
    const [foodType, setFoodType] = useState("all");

    const handleFilter = (e) => {
        console.log(e.target.value, e.target.name);
        
        setFoodType(e.target.value);
    }
  return (
    <div className='px-5 lg:px-20'>
      <section>
        <h3 className='text-gray-500 py-2 mt-10'>home/italy/los paulos hermanos</h3>
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <img className='w-full h-[40vh] object-cover'
                    src="https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg" alt="" />
                </Grid>
            
                <Grid item xs={12} lg={6}>
                    <img className='w-full h-[40vh] object-cover'
                    src="https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg" alt="" />
                </Grid>
            </Grid>
        </div>
        <div className='pt-3 pb-5'>
            <h1 className='text-4xl font-semibold'>los paulos hermanos</h1>
            <p className='text-gray-500 mt-1'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum dolore sunt eveniet accusamus unde pariatur deleniti, tempora beatae vitae, ad obcaecati minima?
                 Modi nemo qui, nostrum odit numquam explicabo. Distinctio!
            </p>
            <div className='space-y-3 mt-3'>
                <p className='text-gray-500 flex items-center gap-3'>
                <LocationOnIcon className='text-gray-500' />
                <span>21 jump street, New York</span></p>
               <p className='text-gray-500 flex items-center gap-3'>
                <CalendarMonthIcon className='text-gray-500' />
                <span>Mon-Sun: 9:00 AM - 9:00 PM</span></p>
            </div>
        </div>
      </section>
      <Divider/>
      <section className='pt-[2rem] lg:flex realtive'>
        <div className='space-y-10 lg:w-[20%] filter '>
            <div className='box space-y-5 lg:sticky top-28 p-5 Shadow-md'>
                <div>
                    <Typography variant="h5" sx={{ paddingBottom: "1rem" }} className='font-semibold'>
                        Food Type
                    </Typography>
                    <FormControl className='py-10 space-y-5' component="fieldset">
                        <RadioGroup onChange={handleFilter} name='food_type' value={foodType}>
                            {foodTypes.map((item) => <FormControlLabel key={item.value} 
                            value={item.value} control={<Radio />} label={item.label} />)}
                        </RadioGroup>
                    </FormControl>
                </div>
                <Divider/>
                <div>
                    <Typography variant="h5" sx={{ paddingBottom: "1rem" }} className='font-semibold'>
                        Food Category
                    </Typography>
                    <FormControl className='py-10 space-y-5' component="fieldset">
                        <RadioGroup onChange={handleFilter} name='food_type' value={categories}>
                            {categories.map((item) => <FormControlLabel key={item} 
                            value={item} control={<Radio />} label={item} />)}
                        </RadioGroup>
                    </FormControl>
                </div>
            </div>
        </div>
        <div className='space-y-5 lg:w-[80%] lg:pl-10'>
            {menu.map((item)=><MenuCard />)}
                
        </div>

      </section>
    </div>
  )
}

export default RestaurantDetails
