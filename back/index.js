import express, { urlencoded } from "express"
import dotenv from 'dotenv'
import { connectDB } from "./db/connectDB.js"
import authRoutes from "./routes/auth.route.js"


const app = express()
dotenv.config()
app.use(express.json())
app.use(urlencoded({extended:false}))

app.get("/", (req, res)=>{
    res.send("App is running fine!")
})

app.use("/api/auth/", authRoutes)

app.listen(3000, ()=>{
    connectDB()
    console.log("App is listning on port:3000");
})