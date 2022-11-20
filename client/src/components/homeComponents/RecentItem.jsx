import React from "react";

function RecentItem(props){
    return(
      <li>
        <div className="recent-card">
          <img src={props.imgURL} width="100px" height="100px" alt=""/>
          <div className="recent-card-info">
            <p>{props.itemName}</p>
            <p>{`Current Bid: ${props.currentBid}`}</p>
            <div className="recent-card-buttons">
              <button className="">Buy Now</button>
              <button className="">Bid Now</button>
            </div>
          </div>
        </div>
      </li>
    );
}

export default RecentItem;