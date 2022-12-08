import React, { useState } from "react";
import axios from "axios";
import SpotlightItem from "./SpotlightItem";
import { useEffect } from "react";

const RecommendedBox = () =>{
   const [recItems, setItems] = useState([]);

	useEffect(() => {
      getRecs();
   }, []);

	let getRecs = () => {
		axios.get('/data/isRecommended')
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

            <h2 className="spotlight-box-title">Recommended Items | See All&rarr;</h2>
         </div>
         <div className="spotlight-box">
            {recItems.map((item, index) => {
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

export default RecommendedBox;