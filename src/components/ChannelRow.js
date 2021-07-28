import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import VerifiedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';
import "../stylesheet/searchPage.css";

function ChannelRow(props) {
    return (
        <div className="channelRow">
            <Avatar className="channelRow__logo" src={props.image} alt={props.channel}/>
        <div className="channelRow__text">
            <h4>{props.channel} {props.verified && <VerifiedIcon/>}</h4>
            <p> {props.subs} subscribes • {props.noOfVideos} videos </p>
            <p>{props.description}</p>
        </div>

        </div>
    )
}

export default ChannelRow;
