import axios from "axios";
import React from "react";
import SpotlightItem from "./SpotlightItem";

class BuyPage extends React.Component{
  state = {
    items: []
  }

  getItems = () => {
    axios.get('/data')
      .then((response) => {
        const data = response.data;
        this.setState({items: data});
      })
      .catch(() => {
        alert("Error retrieving items")
      });
  }

  render(){
    return(
        <div>
            <p>Buy Page</p>
            <hr></hr>
        </div>
    );
  }
}

export default BuyPage; 