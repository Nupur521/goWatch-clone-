import React from "react";
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';


var sidebarRow=[
    {
        id:1,
        icon: <HomeIcon/>,
        title: "Home"
    },

    {
        id:2,
        icon: <WhatshotIcon/>,
        title: "Trending"
    },

    {
        id:3,
        icon: <SubscriptionsIcon/>,
        title: "Subscriptions"
    },
    
    {
        id:4,
        icon: <VideoLibraryIcon/>,
        title: "Library"
    },
    
    {
        id:5,
        icon: <HistoryIcon/>,
        title: "History"
    },
    
    {
        id:7,
        icon: <OndemandVideoIcon/>,
        title: "Your videos"
    },
    
    {
        id:8,
        icon: <WatchLaterIcon/>,
        title: "watch later"
    },
    
    {
        id:9,
        icon: <ThumbUpOutlinedIcon />,
        title: "Liked videos"
    },
    
    {
        id:10,
        icon: <ExpandMoreOutlinedIcon />,
        title: "Show more"
    }


]

export default sidebarRow;