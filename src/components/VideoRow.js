import React from 'react';
import "../stylesheet/searchPage.css";

function VideoRow(props) {
    return (
        <div className="videoRow">
            <img className="videoRow__image" src={props.image}  alt=""/>
            <div className="videoRow__text">
                <h3>{props.title}</h3>
                <p className="headline">{props.channel} • <span className="videoRow__subscribe"><span className="videoRow__subs">{props.subs}</span> subscribers </span>{props.views} Views • {props.timestamp} </p>
                <p className="description">{props.description}</p>
            </div>
        </div>
    )
}

export default VideoRow;
