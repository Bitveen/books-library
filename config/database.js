const mongoose = require("mongoose");
const MONGO_URI = "mongodb://localhost:27017/books";

mongoose.connect(MONGO_URI);
mongoose.connection.on("open", () => { console.log("DB connected!") });
