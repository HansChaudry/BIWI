import React from "react";

function RecentItem(props){
    return(
      <li>
        <div className="recent-item">
          <img src={props.imgURL} width="100px" height="100px" alt=""/>
          <div className="info">
            <p>{props.itemName}</p>
            <p>{`Current Bid: ${props.currentBid}`}</p>
          </div>
        </div>
      </li>
    );
}

export default RecentItem;