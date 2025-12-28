import { IconButton } from '@mui/material'
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import { pink } from '@mui/material/colors';
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const {auth} = useSelector(store => store)
  const navigate = useNavigate();

  const handleAvatarClick = () => {
    if (auth.user?.role === "ROLE_CUSTOMER") {
      navigate("/my-profile")
    } else {
      navigate("/admin/restaurant")
    }
  }

  return (
    <div className='px-5 z-502 py-[.8rem] bg-[#e9791eff] lg:px-20 flex justify-between '>
      <div className='flex items-center space-x-4'>
        <div className='lg:mr-10 cursor-pointer flex items-center space-x-4'>
            <li onClick={() => navigate("/")} className='logo font-semibold text-gray-300 text-2xl list-none'>
                Foody
            </li>
        </div>
      </div>
      <div className='flex items-center space-x-2 lg:space-x-10'>
        <div className=''>
            <IconButton>
                <SearchIcon sx={{ fontSize: "1.5rem" }} />
            </IconButton>
        </div> 
        <div className='hidden lg:flex space-x-6 text-gray-200 font-medium'>
            {auth.user && auth.user.fullName ? (
              <Avatar onClick={handleAvatarClick} sx={{ bgcolor: "white", color: pink.A400 }}>
                {auth.user.fullName[0].toUpperCase()}
              </Avatar>
            ) : (
              <IconButton onClick={() => navigate("/account/login")}>
                <PersonIcon />
              </IconButton>
            )}
        </div>
        <div className=''>
            <IconButton onClick={() => navigate("/cart")}>
                <Badge badgeContent={4} color="secondary">
                    <ShoppingCartIcon  sx={{ fontSize: "1.5rem" }} />
                </Badge>
            </IconButton>
        </div>
      </div>
    </div>
  )
}

export default Navbar