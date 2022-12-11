import mongoose from "mongoose";
import config from "./config"

(async () => {
    try {
        mongoose.set("strictQuery", true);
        const db = await mongoose.connect(config.mongodbURL);
        console.log("Database is connected to: ", db.connection.name);
    } catch (error) {
        console.log(error);
    }
})();