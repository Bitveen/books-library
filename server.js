const express = require("express");
const app = express();
const api = require("./routes/api");
const path = require("path");


require("./config/database");



app.set("port", process.env.PORT || 8080);

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views/index.html"));
});



app.use("/api", api);
app.use(express.static(path.join(__dirname, "public")));


app.listen(app.get("port"), () => console.log("Server started..."));
