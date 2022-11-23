import React from "react";
import axios from "axios";
import SpotlightItem from "../SpotlightItem";

class RecommendedBox extends React.Component{
	state = {recItem: []}

	componentDidMount= () => {
    	this.getRecs();
  	}

	getRecs = () => {
		axios.get('/data/isRecommended')
		.then((response) => {
			const data = response.data;
			this.setState({recItem: data});
		})
		.catch(() => {
			alert("Error retrieving items")
		});
  	}

	render(){
		return(
			<div>
				<h2 className="spotlight-box-title">Recommended Items | See All&rarr;</h2>
				<div className="spotlight-box">
					{this.state.recItem.map((item, index) => {
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
}

export default RecommendedBox;