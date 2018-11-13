require("dotenv").config()

const PORT = process.env.PORT
const express = require("express")
const app = express()
const products = require("./api/products")
const bodyParser = require("body-parser")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use("/products", products)


app.listen(PORT, () => console.log(`App running on port ${PORT}`))

