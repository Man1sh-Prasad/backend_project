import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try{
        const conncectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);      // connectionInstance is assigned the result of the mongoose.connect method, which returns a Mongoose connection instance. This instance is an object representing the connection to the MongoDB database. It is commonly used to interact with the database, perform operations, and manage the connection.
        console.log(`\n MongoDB CONNECTED !! DB HOST: ${conncectionInstance.connection.host}`);
    } catch(error) {
        console.log("MONGODB connection failed", error);
        process.exit(1)
    }
}

export default connectDB;     //  This line exports the connectDB function as the default export of the module.