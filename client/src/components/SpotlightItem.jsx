import React from "react";

function SpotlightItem(props){
  return(
    <div className="spotlight-card">
      <img className="spotlight-card-img" src={props.imgURL} alt="" width="200px" height="200px"/>
      <div className="spotlight-card-body">
        <p>{props.itemName.length > 16 ? (props.itemName).substring(15, 0) + "..." : props.itemName}</p>
        <p>{`Buy Now: $5`}</p>
        <p>{`Current Bid: ${props.currentBid}`}</p>
        <button className="spotlight-card-buyBTN">Buy Now</button>
        <button className="spotlight-card-bidBTN">Bid Now</button>
      </div>
    </div>
  );
}

export default SpotlightItem;