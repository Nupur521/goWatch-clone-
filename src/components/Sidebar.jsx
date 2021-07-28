import React from 'react';
import "../stylesheet/sidebar.css";

function Sidebar(props) {
    return (
        <div className="sidebarRow">
        <div className="sidebarrow__icons">
             {props.icon}
             </div>
             <div className="sidebarrow__title">
             {props.title}
             </div>
             
        </div>
    )
}

export default Sidebar
