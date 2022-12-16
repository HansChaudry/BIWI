/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { useEffect, useState } from "react";
import SpotlightItem from "../HomePage/SpotlightItem";

const BuyPage = (props) =>{
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems();
  }, []);

  let getItems = () => {
    // eslint-disable-next-line eqeqeq
    if([props.catergory] != 'all'){
      console.log(props.catergory);
      axios.get(`/data/products/filter/${props.catergory}`)
      .then((response) => {
        const data = response.data;
        setItems(data);
      })
      .catch(() => {
        alert("Error retrieving items")
      });
    }else{
      axios.get('/data/products')
        .then((response) => {
          const data = response.data;
          setItems(data);
        })
        .catch(() => {
          alert("Error retrieving items")
        });
    }
  }

  return(
    <div>
      {/* <h1 className="page-title">Buy Page</h1> */}
      <br />
      <NavBar/>
      <br />
      <hr></hr>
      <div className="spotlight-box buypage-box">
        {items.map((item, index) => {
          return(
            <SpotlightItem
              key = {index}
              id = {item._id} 
              imgURL= {item.thumbnail}
              itemName = {item.itemName}
              currentBid = {'$' + item.currentBid}
            />
          );
        })}
      </div>
    </div>
  );
}

export default BuyPage; 


function NavBar(){
  let catergories = [
          "All",
          "Smartphones",
          "Laptops",
          "Fragrances",
          "Skincare",
          "Groceries",
          "Home-decoration",
          "Furniture",
          "Tops"
      ]

  return(
      <nav>
          <ul className="catergory-list">
              {catergories.map((item) => {
                  return <li className="catergory"><a className="catergory-link" href={`/buy/${item.toLowerCase()}`} 
                  name={item.toLowerCase()}
                  >{item}</a></li>;
              })}
          </ul>
      </nav>
  );
}
