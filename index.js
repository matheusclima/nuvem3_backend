const express = require("express")
const morgan = require("morgan")
const bodyParser = require("body-parser")

const server = express()
const PORT = 5050

const cors = require("cors")
const options = {
    origin: "*",
    credentials: true,
    optionSuccessStatus: 200
}

server.use(cors(options))
server.use(morgan("combined"))
server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())

const UsersRouter = require("./routes/users.routes")
server.use("/users", UsersRouter)

server.get("/", (req, res) => {
    res.send("Bem vindo")
})

server.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}`)
})