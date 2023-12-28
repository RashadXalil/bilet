const { Blog } = require("../models/Blog.model")
const BlogsController = {
    getAll: async (req, res) => {
        try {
            const blogs = await Blog.find({})
            res.status(200).send(blogs)
        } catch (error) {
            res.status(404).send(error)
        }
    },
    getById: async (req, res) => {
        try {
            const { id } = req.params
            const target = await Blog.findById(id)
            res.status(200).send(target)
        } catch (error) {
            res.status(404).send(error)
        }
    },
    add: async (req, res) => {
        try {
            const date = new Date().toLocaleDateString('en-GB');
            const { image, title, description, likes, comments } = req.body
            const newBlog = new Blog({ image, date, title, description, likes, comments })
            await newBlog.save()
            res.send("salam")
        } catch (error) {
            res.status(404).send(error)
        }
    },
    edit: async (req, res) => {
        try {
            const { id } = req.params
            await Blog.findByIdAndUpdate(id, { ...req.body })
            res.send("item updated")

        } catch (error) {
            res.status(404).send(error)
        }
    },
    delete: async (req, res) => {
        try {
            const { id } = req.params
            await Blog.findByIdAndDelete(id)
            const blogs = await Blog.find({})
            res.send(blogs)

        } catch (error) {
            res.send(error)
        }
    }
}
module.exports = { BlogsController }