import React from "react";
import './loading.css'
function Loading() {
  return (
    <div id="overlay">
      <div id="text" class="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Loading;
