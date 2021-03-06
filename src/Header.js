import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import  BusinessCenterIcon  from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationIcon from '@mui/icons-material/Notifications';
import { Avatar } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from './features/userSlice';
import { auth } from './firebase';
//import PersonAdd from '@mui/icons-material/PersonAdd';
export default function Header() {
 
  const dispatch = useDispatch();
const logoutOfApp = () =>{

dispatch(logout())
auth.signOut();

};

  return (
      <div className='header'>
    <div className='header__left'>
 <img src='https://cdn-icons-png.flaticon.com/512/174/174857.png' alt=''/>
 <div className='header__search'>
     
     <SearchIcon />
     <input type='text' placeholder='Search'/>

 </div>
    </div>
    <div className='header__right'>
        <HeaderOption Icon ={HomeIcon }title='Home'/>
        <HeaderOption Icon ={SupervisorAccountIcon}title='My Network'/>
        <HeaderOption Icon ={BusinessCenterIcon}title='Jobs'/>
        <HeaderOption Icon ={ChatIcon}title='Messaging'/>
        <HeaderOption Icon ={NotificationIcon}title='Notification'/>
        {/* <HeaderOption Icon={PersonAdd} title='Add Me'/> */}
        <HeaderOption avatar={true}
         title="Me"
        
        onClick={logoutOfApp}
        />
    </div>
   
</div>
  
  )
}
