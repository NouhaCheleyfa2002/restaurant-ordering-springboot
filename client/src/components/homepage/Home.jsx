import React from 'react'
import './Home.css'
import MultiItemCarousel from './MultiItemCarousel';
import RestaurantCard from '../restaurant/restaurantCard';
import Auth from '../Auth/Auth';
import Navbar from '../navbar/navbar';

const restaurant=[1,1,1,1,1,1,1,1,]

function Home() {

  return (
    
    <div className='pb-10'>
      
      <section className='banner z-50 relative flex flex-col justify-center items-center'>
        <div className='w-[50vw] z-10 text-center'>
            <p className='text-2xl lg:text-6xl font-bold z-10 py-5'>foody</p>
            <p className='z-10 text-gray-300 text-xl lg:text-4xl'>Enjoy your meals , Get Them Delivered To You.</p>
        </div>
        <div className='cover absolute top-0 left-0 right-0'>

        </div>
        <div className='fadout'> 

        </div>
      </section>
      <section>
        <p className='text-2xl font-semibold py-3 text-gray-400 pb-10'>Our Popular Items</p>
        <MultiItemCarousel />
      </section>
      <section className='px-5 lg:px-20'>
        <h1 className='text-2xl font-semibold text-gray-400 py-5'>our favorite resaurants</h1>
        <div className='flex flex-wrap items-center justify-around gap-5 pt-5'>
          {
            restaurant.map((item, index) => (
              <RestaurantCard key={index} />
            ))
          }

        </div>
      </section>
      
      </div>
  )
}

export default Home
