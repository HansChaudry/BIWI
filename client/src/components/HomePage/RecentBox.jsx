import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import SpotlightItem from "./SpotlightItem";

const RecentBox = () =>{
  const [items, setItems] = useState([]);

  useEffect(() => {
    getRecents();
  }, []);

  let getRecents = () => {
    axios.get('/data/products/isRecent')
      .then((response) => {
        const data = response.data;
        console.log(data);
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
          console.log(item._id)
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


export default RecentBox;