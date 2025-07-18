import mongoose from "mongoose"
import ENV from "./env.js";


export const connectDb = async () => {
    try {
        const connection = await mongoose.connect(ENV.MONGO_URI);
        console.log(`mongoDb connected: ${connection.connection.host}`)
    } catch (error) {
        console.error("Couldn't connect to the database", error);
        process.exit(1);
    }
}