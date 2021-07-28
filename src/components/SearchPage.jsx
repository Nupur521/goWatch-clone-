import React from 'react';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import "../stylesheet/searchPage.css";
import ChannelRowcomp from "./ChannelRowcomp";
import ChannelRow from "./ChannelRow";
import VideoRowcomp from "./VideoRowcomp";
import VideoRow from "./VideoRow";

function ChannelComponents(elements){

   return (<ChannelRow 
    key={elements.id}
    image={elements.image}
    channel={elements.channel}
    subs={elements.subs}
    noOfVideos={elements.noOfVideos}
    description={elements.description}
    verified={elements.verified}
    />);
    
}

function VideoComponents(elements){
    return(<VideoRow 
        key={elements.id}
        image={elements.image}
        subs={elements.subs}
        title={elements.title}
        views={elements.views}
        timestamp={elements.timestamp}
        description={elements.description}
        channel={elements.channel}/>);
}

function SearchPage() {
    return (
        <div className="searchPage">
        <div className="searchPage__filter">
         <TuneOutlinedIcon/>
         <h2>Filter</h2>
        </div>
        <hr/> 
        {ChannelRowcomp.map(ChannelComponents)}
        <hr/> 
        {VideoRowcomp.map(VideoComponents)} 
        </div>
    )
}

export default SearchPage;
