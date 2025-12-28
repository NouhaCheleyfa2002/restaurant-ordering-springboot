
import './App.css';

import Home from './components/homepage/Home';
import RestaurantDetails from './components/restaurant/restaurantDetails';
import { darkTheme } from './theme/darkTheme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import CardPage from './components/card/CardPage';
import Profile from './components/profile/profile';
import CustomerRouter from './Router/CustomerRouter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from './components/state/authentication/Action';

function App() {

  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt")
  const {auth}=useSelector(store=>store)

  useEffect(() => {
    const jwt = localStorage.getItem('token');
    
    // Only fetch user profile if token exists
    if (jwt) {
        dispatch(getUser(jwt));
    }
}, []);

  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
      
      
      <CustomerRouter />
      </ThemeProvider>
    </div>
  );
}

export default App;
