const express = require("express")
const { BlogsController } = require("../controllers/Blog.controller")

const router = express.Router()

router.get("/", BlogsController.getAll)
router.get("/:id", BlogsController.getById)
router.post("/", BlogsController.add)
router.put("/:id", BlogsController.edit)
router.delete("/:id", BlogsController.delete)

module.exports = router