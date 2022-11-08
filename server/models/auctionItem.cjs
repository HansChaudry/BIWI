const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AuctionItemSchema = new Schema({
    itemName: String,
    currentBid: Number,
    imageURL: String,
    isRecent: Boolean,
    isTrending: Boolean,
    isRecommended: Boolean,
    description: String
});

const AuctionItem = mongoose.model('AuctionItems', AuctionItemSchema);

module.exports = AuctionItem;
