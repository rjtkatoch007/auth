import express, { urlencoded } from "express"
import dotenv from 'dotenv'
import { connectDB } from "./db/connectDB.js"
import authRoutes from "./routes/auth.route.js"


const app = express()
const port=process.env.PORT || 5000
dotenv.config()

app.use(express.json())
app.use(urlencoded({extended:false}))

app.get("/", (req, res)=>{
    res.send("App is running fine!")
})

app.use("/api/auth/", authRoutes)

app.listen(port, ()=>{
    connectDB()
    console.log("Server is listning on port:"+ port);
})