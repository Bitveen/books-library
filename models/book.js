const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    pubDate: {
        type: Date,
        required: true
    },
    pages: {
        type: Number,
        required: true
    },
    tags: [String]
});

module.exports = mongoose.model("Book", bookSchema);
