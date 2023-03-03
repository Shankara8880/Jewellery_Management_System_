const mongoose = require("mongoose")
const express = require("express")
require("dotenv").config()
const cors = require("cors")

// Express App
const app = express()
app.use(cors())
// middleware
app.use(express.json());
app.use(express.static("public"));
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use("/api/users", require("./routes/userRoutes"))
app.use("/api/products", require("./routes/productsRoutes"))
app.use("/api/categories", require("./routes/categoryRoutes"))
app.use("/api/suppliers", require("./routes/suppliersRoutes"))
app.use("/api/stocks", require("./routes/stockRoutes"))
app.use("/api/orders", require("./routes/orderRoutes"))
app.use("/api/employees", require("./routes/employeeRoutes"))
app.use("/api/customers", require("./routes/customerRoutes"))
app.use("/api/purchases", require("./routes/purchaseRoutes"))



// Listening to port
// const PORT = process.env.PORT || 5000
const PORT = process.env.PORT || 5000 || 5173
console.log("process.env.PORT", process.env.PORT);
app.listen(PORT, () => {
    console.log("Listening to port : " + PORT)
})

mongoose.set('strictQuery', true);
// Connection to Database
mongoose.connect(process.env.DBURI)
    .then(() => {

        console.log("Connnected to DB!")
    })
    .catch(err => {
        console.log(err)
    })


// git add . && git commit -m "COMMIT" && git push origin main