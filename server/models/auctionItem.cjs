const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AuctionItemSchema = new Schema({
    itemName: String,
    currentBid: Number,
    isRecent: Boolean,
    isTrending: Boolean,
    isRecommended: Boolean,
    description: String,
    catergory: String,
    thumbnail : String,
    images: [],
    seller: String
});

const AuctionItem = mongoose.model('AuctionItems', AuctionItemSchema);

module.exports = AuctionItem;
