import React from 'react';
import './notify-bidder.css';

const BidWinner = (props) => {
    const mystyle = {
        color: "white",
        backgroundColor: "#E8F0FF",
        minHeight: props.height,
        width: props.width,
      };
    return (
        <div style= {mystyle} className= "main-container">
          <div className= "row">
              <div className= "col-1 col-md-1 col-lg-1">
                <i class="fas fa-exclamation-circle"></i>
              </div>
              <div className= "col-10 col-md-10 col-lg-10">
                 <p className= "ruby-tag">{
                   props.text
                    }
                 </p>
                 {props.show ? 
                    <p className= "ruby-tag">{
                        props.text2
                        }
                    </p> : null
                }
              </div>
              
          </div>
        </div>
    )
}

export default BidWinner