import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import 'dotenv/config';
import logger from "./util/logger";
import {connect} from "./util/database.connection"; 
const furnitureRouter=require("./api/Routes/furniture");
const transactionRouter=require("./api/Routes/transaction");
const deliveryRouter=require("./api/Routes/delivery");


const app=express();
const PORT=process.env.PORT || "8090";

app.use(cors());
app.use(express.json({limit:"20mb"}));

app.get("/",(req,res) => {
    res.send("<h2>Furniture Inventory Management System</h2>");
    next();

})

app.use("/furniture",furnitureRouter);
app.use("/transaction",transactionRouter);
app.use("/delivery",deliveryRouter);



app.listen(PORT,() => {
    
    console.log(`Server is running on PORT ${PORT}`);
    connect();

});
