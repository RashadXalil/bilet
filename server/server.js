const express = require("express")
const app = express()
const BlogsRouter = require("./routes/Blog.routes")
const cors = require("cors")
const mongoose = require("mongoose")
app.use(cors())
app.use(express.json())
mongoose.connect("mongodb+srv://rashadkhll:rashad918@cluster0.vllij5v.mongodb.net/").then(res => {
    console.log("database connected")
})
app.use("/blogs", BlogsRouter)

app.listen(8000, () => {
    console.log("app running on 8000")
})