import React from "react";
import axios from "axios";
import './ProductPage.css'

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
            <div className="product-card-container">
                <h2>{this.state.itemName}</h2>
                <div className="product-card">
                    <div className="product-img-box">
                        <img src={this.state.thumbnail} alt="" srcset="" height="500" />
                    </div>

                    <div className="buy-bid-box">
                        <p>Buy Now Price: ${this.state.currentBid}</p>
                        <p>Highest Bid: ${Math.round(this.state.currentBid * .70)}</p>
                        <p></p>
                        <form action="">
                            <br />
                            <br />
                            <input type="Number" name="" id="bidAmount" />
                            <button>Bid Now</button>
                            <br />
                            <button>Buy Now</button>
                            {this.state ? <BidInputs/> : <BuyInputs/>}
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

function BuyInputs(){
    return;
}

function BidInputs(){
    return;
}

export default ProductPage;