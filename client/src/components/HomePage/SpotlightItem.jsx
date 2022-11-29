import React from "react";
import { useNavigate } from "react-router-dom";

function SpotlightItem(props){
  const navigate = useNavigate();

  let goToProuct = ({target}) => {
    const { id } = target;
    navigate(`/product/${id}`);
  }

  return(
    <div className="spotlight-card">
      <img className="spotlight-card-img" src={props.imgURL} alt="" width="180px" height="180px"/>
      <div className="spotlight-card-body">
        <p><b>{props.itemName.length > 16 ? (props.itemName).substring(15, 0) + "..." : props.itemName}</b></p>
        <p>{`Buy Now: ${props.currentBid}`}</p>
        <p>{`Current Bid: ${Math.round(props.currentBid*.70)}`}</p>
        <button className="spotlight-card-buyBTN" id={props.id} onClick={goToProuct}>Buy Now</button>
        <button className="spotlight-card-bidBTN">Bid Now</button>
      </div>
    </div>
  );
}

export default SpotlightItem;