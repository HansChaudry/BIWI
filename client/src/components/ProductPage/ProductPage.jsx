import React from "react";
import axios from "axios";

class ProductPage extends React.Component{
    state = ''
    
    componentDidMount= () => {
    	this.getProduct();
  	}

    getProduct = () => {
        axios.get(`/data/byID/${this.props.id}`)
		.then((response) => {
			const data = response.data;
			this.setState(data);
		})
		.catch(() => {
			alert("Error retrieving items")
		});
    }

    render(){
        return(
            <div>
                <img src={this.state.thumbnail} alt="" />
            </div>
        );
    }
}

export default ProductPage;