// API to communicate with server and DB
import express from "express";
import AuctionItem from "../models/auctionItem.cjs";
import User from "../models/user.cjs";

const router = express.Router();

router.get("/data/products", (req, res) => {
  AuctionItem.find({})
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log("error: ", error);
    });
});

router.get("/data/products/byID/:id", (req, res) => {
  AuctionItem.findById(req.params.id)
    .then((data) => {
      User.findById(data.seller).then((itemSeller) => {
        let xyz = [data, itemSeller];
        console.log(xyz);
        res.json(data);
      });
    })
    .catch((error) => {
      console.log("error: ", error);
    });
});

router.get("/data/products/:cond", (req, res) => {
  AuctionItem.find({ [req.params.cond]: true })
    .limit(5)
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log("error: ", error);
    });
});

router.get("/data/products/filter/:catergory", (req, res) => {
  AuctionItem.find({ catergory: [req.params.catergory] })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log("error: ", error);
    });
});

router.post("/data/products/save", (req, res) => {
  const data = req.body;
  let newItem = new AuctionItem(data);

  newItem.save((error) => {
    if (error) {
      res.status(500).json({ msg: "Sorry, internal server errors" });
      return;
    }
    // BlogPost
    return res.json({
      msg: "Your data has been saved!!!!!!",
    });
  });
});

router.post("/data/users/auth", (req, res) => {
  const data = req.body;
  console.log(data.email);
  User.findOne({ email: [data.email], password: [data.password] })
    .then((foundUser) => {
      res.json(foundUser._id);
    })
    .catch((error) => {
      console.log("error: ", error);
    });
});

router.post("/data/users/registration", (req, res) => {
  const data = req.body;
  let newUser = new User(data);
  newUser.save((error) => {
    if (error) {
      res.status(500).json({ msg: "Sorry, internal server errors" });
      return;
    }
    // BlogPost
    return res.json({
      msg: "New user has been saved!!!!!!",
    });
  });
});

router.get("/data/users/byID/:id", (req, res) => {
  User.findById(req.params.id)
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log("error: ", error);
    });
});

router.get("/data/addseller", (req, res) => {
  let x = AuctionItem.find({});
  let y = User.find({});
  x = x.map((item) => {
    var user = y[Math.floor(Math.random() * y.length)];
    return (item.seller = user._id);
  });
  res.json({
    hi: "hola",
  });
});

router.get("/data/users/getusers", (req, res) => {
  User.find({})
    .then((data) => {
      let x = data.map((item) => {
        return item._id;
      });
      AuctionItem.find({}).then((data) => {
        let newData = data;
        newData = data.map((item) => {
          item.seller = x[Math.floor(Math.random() * x.length)];
          return item;
        });
        res.json(newData);
      });
    })
    .catch((error) => {
      console.log("error: ", error);
    });
});

export default router;
