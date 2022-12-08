import React, { useState } from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom';
import { useEffect } from "react";
import SpotlightItem from "./SpotlightItem";

const RecentBox = () =>{
  const [items, setItems] = useState([]);

  useEffect(() => {
    getRecents();
  }, []);

  let getRecents = () => {
    axios.get('/data/isRecent')
      .then((response) => {
        const data = response.data;
        setItems(data);
      })
      .catch(() => {
        alert("Error retrieving items")
      });
  }

  return(
    <div>
      <div>
         <h2 className="spotlight-box-title">Recently Viewed | See All&rarr;</h2>
      </div>
      <div className="spotlight-box">
        {items.map((item, index) => {
          return(
            <SpotlightItem
              key = {index}
              id = {item._id} 
              imgURL= {item.thumbnail}
              itemName = {item.itemName}
              currentBid = {item.currentBid}
            />);
        })}
      </div>
    </div>
  );
  
}

function RecentItem(props){
  const navigate = useNavigate();
  let goToProduct = ({target}) => {
    const { id } = target;
    navigate(`/product/${id}`);
  }

  return(
    <li>
      <div className="recent-card">
        <img src={props.imgURL} width="100px" height="100px" alt=""/>
        <div className="recent-card-info">
          <p><b>{props.itemName}</b></p>
          <p>{`Current Bid: $${Math.round(props.currentBid * .70)}`}</p>
          <div className="recent-card-buttons">
            <button className="spotlight-card-BTN" id={props.id} onClick={goToProduct}>View Item</button>
          </div>
        </div>
      </div>
    </li>
  );
}

export default RecentBox;