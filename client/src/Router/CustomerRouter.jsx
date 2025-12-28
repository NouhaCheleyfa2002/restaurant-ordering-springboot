import React from 'react'
import RestaurantDetails from '../components/restaurant/restaurantDetails'
import CardPage from '../components/card/CardPage'
import Profile from '../components/profile/profile'
import Home from '../components/homepage/Home'
import Navbar from '../components/navbar/navbar'
import { Routes, Route } from 'react-router-dom'
import Auth from '../components/Auth/Auth'

const CustomerRouter = () => {
  return (
    <div>
      <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/account/:register" element={<Home />} />
            <Route path="/restaurant" element={<RestaurantDetails />} />
            <Route path="/cart" element={<CardPage />} />
            <Route path="/my-profile/*" element={<Profile />} />
        </Routes>
        <Auth/>
    </div>
  )
}

export default CustomerRouter
