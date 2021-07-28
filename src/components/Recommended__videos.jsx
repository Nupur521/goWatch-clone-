import React from 'react';
import "../stylesheet/recommendedVideos.css";
import VideoCard from "./VideoCard";
import videoInfo from "./videoInfo";

function RecommendedVideosF(elements)
{
  return (<VideoCard
           key={elements.id}
           image={elements.image}
           title={elements.title}
           views={elements.views}
           timestamp={elements.timestamp}
           channel={elements.channel}
           channelImage={elements.channelImage}/>);
}


function Recommended__videos() {
    return (
        <div class="recommendedVideos">
            <h2>Recommended</h2>
        
        <div class="VideoCard">
            {videoInfo.map(RecommendedVideosF)}
            </div>
        </div>
    )
}

export default Recommended__videos;
