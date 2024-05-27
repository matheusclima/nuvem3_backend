const UsersControllers = require("../controllers/users.controllers")

const express = require("express")
const router = express.Router()

router.get("/", UsersControllers.getAllUsers)
router.post("/", UsersControllers.addUser)
router.delete("/:id", UsersControllers.deleteUser)
router.put("/:id", UsersControllers.updateUser)
module.exports = router