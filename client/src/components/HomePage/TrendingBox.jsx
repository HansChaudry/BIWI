import React, { useEffect, useState } from "react";
import axios from "axios";
import SpotlightItem from "./SpotlightItem";

const TrendingBox = () =>{
  const [trendItems, setItems] = useState([]);

  useEffect(() => {
    getTrends();
  },[]);

	let getTrends = () => {
    axios.get('/data/isTrending')
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
        <h2 className="spotlight-box-title">Trending Items | See All&rarr;</h2>
        <div className="spotlight-box">
          {trendItems.map((item, index) => {
            return(
              <SpotlightItem
                key = {index}
                id = {item._id} 
                imgURL= {item.thumbnail}
                itemName = {item.itemName}
                currentBid = {item.currentBid}
              />
            );
          })}
        </div>
    </div>
  );
}

export default TrendingBox;