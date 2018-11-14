const express = require("express")
const router = express.Router()
const controller = require("./controller")
const helpers = require("../helpers")

router.get("/search", helpers.isAuthenticated, controller.search)
router.get("/", helpers.isAuthenticated, controller.getAll)
router.post("/", helpers.isAuthenticated, controller.post)
router.delete("/:id", helpers.isAuthenticated, controller.deleteOne)
router.delete("/", helpers.isAuthenticated, controller.deleteAll)
router.put("/:id", helpers.isAuthenticated, controller.update)



module.exports = router
