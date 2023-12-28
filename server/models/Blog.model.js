const mongoose = require("mongoose")

const Blog = mongoose.model("Blogs", new mongoose.Schema({
    image: String,
    date: String,
    title: String,
    description: String,
    likes: Number,
    comments: Number
}))
module.exports = { Blog }