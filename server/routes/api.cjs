const express = require ("express");

const AuctionItem = require("../models/auctionItem.cjs");

const router = express.Router();


router.get("/data", (req, res) => {
  AuctionItem.find({ })
  .then((data) => {
    res.json(data);
  })
  .catch((error) => {
    console.log('error: ', error)
  });
});

router.get("/data/:cond", (req, res) => {
    AuctionItem.find({[req.params.cond]: true})
      .then((data) => {
        res.json(data);
      })
      .catch((error) => {
        console.log('error: ', error)
      });
});
module.exports = router;

