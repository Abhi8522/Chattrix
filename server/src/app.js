const express = require("express")
const app = express()
const dotenv = require("dotenv")
dotenv.config()
const userRoutes = require("./routes/user.routes")
const connectDb = require("./config/db")

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/",(req,res)=>{
        res.send("hei")
})

app.use("/api/v1/auth",userRoutes)

const PORT = process.env.PORT 
app.listen(PORT, () => {
        connectDb()
        console.log(`Server started on port ${PORT}`);
});