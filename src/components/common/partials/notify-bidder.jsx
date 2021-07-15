import React from 'react';
import './notify-bidder.css';

const NoticeContainer = (props) => {
    const mystyle = {
        color: "white",
        backgroundColor: "#E8F0FF",
        height: props.height,
        width: props.width
      };
    return (
        <div style= {mystyle} className= "main-container">
          <div className= "row">
              <div className= "col-1 col-md-1 col-lg-1">
                <i class="fas fa-exclamation-circle"></i>
              </div>
              <div className= "col-11 col-md-11 col-lg-11">
                 <p className= "ruby-tag">You are currently the highest bidder</p>
              </div>
              
          </div>
        </div>
    )
}

export default NoticeContainer