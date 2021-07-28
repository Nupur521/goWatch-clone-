import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import '../stylesheet/header.css'; 
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import GoWatch from "../images/GoWatch.png";
import nn from "../images/nn.png";



function Header() {
    // keeping a track of the state of input and using hooks keeping the default value as empty
    //The event e was necessary so that whatever we type, we don't constantly get remapped to empty
    const [inputSearch, setInputSearch] = useState("");

    return (
        <div className="header">
        <div className="Header__left">
           <MenuIcon/>
           <Link to="/">
           <img className="Header__logo" src= {GoWatch} alt="GoWatch"/>
           </Link>
           </div>
           
           <div className="Header__search">
           <input onChange={(e) => setInputSearch(e.target.value)} type="text" placeholder="Search"  value={inputSearch} />
           {/* whatever we have inside out input search inside of inside of our state that's where link is going to take me to */}
           <Link to={`/search/${inputSearch}`}>
           <SearchIcon className="searchIcon"/>     
           </Link></div>
           <MicIcon/>
         
        
           <div className="Header__icons">
           <VideoCallIcon className="Header__icons" />
           <AppsIcon className="Header__icons" />
           <NotificationsIcon className="Header__icons" />
           <Avatar className="Header__icons" alt="Nupur Agarwal" src={nn}/>
           </div>

        </div>
    )
}

export default Header
