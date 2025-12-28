import React from 'react'
import ProfileNavigation from './profileNavigation.jsx'
import { useState } from 'react';
import UserProfile from './userProfile.jsx';
import Orders from './Orders.jsx';
import Favorites from './Favorites.jsx';
import Address from './Address.jsx';
import Events from './Events.jsx';
import { Routes, Route } from 'react-router-dom';

const Profile = () => {

  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <div className='lg:flex justify-between'>
      <div className='sticky h-[80vh] lg:w-[20%]'>
        <ProfileNavigation open={openSidebar} handleClose={() => setOpenSidebar(false)} />
      </div>
      <div className='lg:w-[80%]'>
        <Routes>
          <Route path="/" element={<UserProfile />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/address" element={<Address />} />
          <Route path="/events" element={<Events />} />
          <Route path="/logout" element={<div>Logout Page</div>} />
        </Routes>
      </div>
    </div>
  )
}

export default Profile
