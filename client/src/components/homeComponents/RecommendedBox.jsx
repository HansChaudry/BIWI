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
			console.log('Data has be delivered');
		})
		.catch(() => {
			alert("Error retrieving items")
		});
  	}

	render(){
		return(
			<div>
				<h2 id="recommended-title">Recommended Items|See All&rarr;</h2>
				<div id="recommended-container">
					{this.state.recItem.map((item, index) => {
						return(
							<SpotlightItem
								key = {index}
								id = {index} 
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
}

export default RecommendedBox;