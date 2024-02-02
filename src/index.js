// const dotenv = require('dotenv').config();

import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})

connectDB()    
.then(() => {
    // error handling for the server
    app.on("error", (error) => {
    console.log(`ERROR while listening `,  error)
    })

    app.listen(process.env.PORT || 8000, () => {
        console.log(`server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO DB connection failed !! ",err);
});



/*  approach - 1

import mongoose from "mongoose";
import { DB_NAME } from "./constants";

import express from "express";
const app = express();



( async () => {

    try{
        await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);

        app.on("error", (error) => {
            console.log("ERROR", error);
            throw error;    // Throwing the error here is not necessary, and it depends on the specific requirements of your application. It might be more appropriate to log the error and gracefully handle it within the application's error-handling middleware.

        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        })

    } catch(error) {
        console.error("ERROR: ", error)

    }
})()

*/