import express from "express";
import mongoose from "mongoose";
import path from "path";
import morgan from "morgan";
import routes from "./routes/api.mjs"

const app = express();
const PORT = 8080;

mongoose.connect('mongodb://127.0.0.1:27017/WibiDB').then(()=> {
    console.log('connected');
});

app.use(express.json());
app.use(express.urlencoded({extended: false}));

//HTTP request logger
app.use(morgan('tiny'));

app.use("/", routes);

app.listen(PORT, console.log(`Server started on port ${PORT}`))