import React, { useEffect, useState } from "react";
import axios from "axios";
import './ProductPage.css'

const ProductPage = (props) => {
    const [item, setItem] = useState([]);
    const [seller, setSeller] = useState([]);
    
    useEffect(() => {
       getItem();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    let getItem = () => {
        axios.get(`/data/products/byID/${props.id}`)
		.then((response) => {
			const data = response.data;
			setItem(data);
		})
		.catch(() => {
			alert("Error retrieving items")
		});
    }

    return(
        <div className="product-card-container">
            <h2>{item.itemName}</h2>
            <div className="product-card">
                <div className="product-img-box">
                    <img src={item.thumbnail} alt="" height="500" />
                </div>

                <div className="buy-bid-box">
                    <p>Buy Now Price: ${item.currentBid}</p>
                    <p>Highest Bid: ${Math.round(item.currentBid * .70)}</p>
                    <p></p>
                    <form action="">
                        <br />
                        <br />
                        <input type="Number" name="" id="bidAmount" />
                        <button>Bid Now</button>
                        <br />
                        <button>Buy Now</button>
                        {item ? <BidInputs/> : <BuyInputs/>}
                    </form>
                </div>
            </div>
        </div>
    );
}

function BuyInputs(){
    return;
}

function BidInputs(){
    return;
}

export default ProductPage;