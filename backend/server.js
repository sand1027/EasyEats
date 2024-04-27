import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import 'dotenv/config.js'

const app = express();
const port = 4000;


// Middlewares
app.use(express.json())
app.use(cors())

// DB Connection 
connectDB();

// Api end point
app.use("/api/food",foodRouter);
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)

app.get("/",(req, res) =>{
    res.send("API Working");
})

app.listen(port,()=>{
    console.log(`Listening to port ${port}`);
})

// mongodb+srv://sandy:Sandeep1234@cluster0.k0immcm.mongodb.net/?