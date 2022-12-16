import React from "react";
import { useNavigate } from "react-router-dom";

function SpotlightItem(props){
  const navigate = useNavigate();

  let goToProduct = ({target}) => {
    const { id } = target;
    console.log(id);
    navigate(`/product/${id}`);
  }

  return(
    <div className="spotlight-card">
      <img className="spotlight-card-img" src={props.imgURL} alt="" width="180px" height="180px"/>
      <div className="spotlight-card-body">
        <p><b>{props.itemName.length > 16 ? (props.itemName).substring(15, 0) + "..." : props.itemName}</b></p>
        <p className="spotlight-card-buyNow"> <span>Buy Now: </span>${props.currentBid}</p>
        <p className="spotlight-card-bid"> <span>Current Bid: </span>${Math.round(props.currentBid*.70)}</p>
        <button className="spotlight-card-BTN" id={props.id} onClick={goToProduct}>View Item</button>
      </div>
    </div>
  );
}

export default SpotlightItem;