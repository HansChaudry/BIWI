import React from "react";

function SpotlightItem(props){
  return(
    <div className="spotlight-item">
      <img src={props.imgURL} alt="" width="200px" height="200px"/>
      <p>{props.itemName.length > 16 ? (props.itemName).substring(15, 0) + "..." : props.itemName}</p>
      <p>{`Current Bid: ${props.currentBid}`}</p>
    </div>
  );
}

export default SpotlightItem;