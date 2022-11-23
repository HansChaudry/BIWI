// API to communicate with server and DB
import express from 'express';
import AuctionItem from '../models/auctionItem.cjs';
import User from '../models/user.cjs'

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

router.get("/data/byID/:id", (req, res) => {
  AuctionItem.findById(req.params.id)
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log('error: ', error)
    });
});

router.get("/data/:cond", (req, res) => {
  AuctionItem.find({[req.params.cond]: true}).limit(5)
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log('error: ', error)
    });
});

router.get("/data/filter/:catergory", (req, res) => {
  AuctionItem.find({'catergory' :[req.params.catergory]})
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log('error: ', error)
    });
});

router.post("/data/save", (req, res) => {
  const data = req.body;
  let newItem = new AuctionItem(data);

  newItem.save((error) => {
    if (error) {
      res.status(500).json({ msg: 'Sorry, internal server errors' });
      return;
    }
    // BlogPost
    return res.json({
        msg: 'Your data has been saved!!!!!!'
    });
  });
});

router.post("/data/users/auth", (req, res) => {
  const data = req.body;
  console.log(data.email);
  User.findOne({"email": [data.email], "password": [data.password]})
    .then((foundUser) => {
      res.json(foundUser);
    })
    .catch((error) => {
      console.log('error: ', error)
    });
});

router.post("/data/users/registration", (req, res) => {
  const data = req.body;
  let newUser = new User(data);
  newUser.save((error) => {
    if (error) {
      res.status(500).json({ msg: 'Sorry, internal server errors' });
      return;
    }
    // BlogPost
    return res.json({
        msg: 'New user has been saved!!!!!!'
    });
  });
});

export default router;