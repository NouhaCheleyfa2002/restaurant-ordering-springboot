import React, { use } from 'react'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import NotificationsIcon from '@mui/icons-material/Notifications';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LogoutIcon from '@mui/icons-material/Logout';
import { Divider } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../state/authentication/Action';


const menu=[
  {title:"Orders",icon:<ShoppingBagIcon/>},
  {title:"Favorites",icon:<FavoriteIcon/>},
  {title:"Address",icon:<HomeIcon/>},
  {title:"Payments",icon:<AccountBalanceWalletIcon/>},
  {title:"Notifications",icon:<NotificationsIcon/>},
  {title:"Events",icon:<CalendarMonthIcon/>},
  {title:"Logout",icon:<LogoutIcon/>}
]

const ProfileNavigation = (open, handleClose) => {

  const isSmallScreen = useMediaQuery("(max-width:1080px)");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleNavigate=(item)=>{
    if (item.title==="logout") {
      dispatch(logout());
      navigate('/')
    }else{
      navigate(`/my-profile/${item.title.toLowerCase()}`);
    }
  };

  return (
    <div>
      <Drawer
        open={isSmallScreen ? open : true}
        onClose={handleClose}
        variant={isSmallScreen ? "temporary" : "permanent"}
        anchor="left"
        sx={{
          '& .MuiDrawer-paper': {
            top: isSmallScreen ? 0 : '68px',
            height: isSmallScreen ? '100%' : 'calc(100% - 64px)',
            width: isSmallScreen ? '22vw' : '20vw',
          },
        }}
      >

        <div className='w-[50vw] lg:w-[20vw] h-[100vh] flex flex-col justify-center text-xl gap-8 pt-16'>
          {menu.map((item, i)=><>
            <div onClick={() => handleNavigate(item)} className="flex items-center space-x-5 gap-4 px-5 cursor-pointer">
              {item.icon}
              <span>{item.title}</span>
            </div>
          {i !== menu.length-1 && <Divider />}
          </>)}
          
        </div>
      </Drawer>
    </div>
  )
}

export default ProfileNavigation
