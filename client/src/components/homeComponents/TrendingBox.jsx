import React from "react";
import axios from "axios";
import SpotlightItem from "../SpotlightItem";

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
      })
      .catch(() => {
        alert("Error retrieving items")
      });
  }

  render(){
    return(
      <div>
          <h2 className="spotlight-box-title">Trending Items | See All&rarr;</h2>
          <div className="spotlight-box">
            {this.state.trendItems.map((item, index) => {
							return(
								<SpotlightItem
									key = {index}
                  id = {index} 
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
}

export default TrendingBox;