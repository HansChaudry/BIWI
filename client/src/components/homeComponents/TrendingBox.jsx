import React from "react";
import axios from "axios";
import SpotlightItem from "./SpotlightItem";

class TrendingBox extends React.Component{
  state = {trendItems: []}

  componentDidMount= () => {
    this.getTrends();
  }

	getTrends = () => {
    axios.get('/data/isTrending')
      .then((response) => {
        const data = response.data;
        this.setState({trendItems: data});
        console.log('Data has be delivered');
      })
      .catch(() => {
        alert("Error retrieving items")
      });
  }

  render(){
    return(
      <div>
          <h2 id="trending-title">Trending Items|See All&rarr;</h2>
          <div id="trending-container">
            {this.state.trendItems.map((item, index) => {
							return(
								<SpotlightItem
									key = {index}
                  id = {index} 
                  imgURL= {item.imageURL}
                  itemName = {item.itemName}
                  currentBid = {item.currentBid}
								/>
							);
						})}
          </div>
      </div>
    );
  }
}

export default TrendingBox;