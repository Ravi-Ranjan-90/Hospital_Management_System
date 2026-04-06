const express= require('express')
const cors = require('cors')
require('dotenv').config();
const connectDB = require('./config/db')
const router = require('./routes/index.js');
const cookieParser = require('cookie-parser');
const app = express();
  
app.use(cors({
    origin: process.env.FRONTEND_URL,
    // origin: "http://localhost:3000",
    credentials: true,
}))
app.use(express.json())
app.use(cookieParser())
app.use("/api",router)

// const PORT = 8080 ||  process.env.PORT
const PORT = process.env.PORT || 8080

connectDB().then(()=>{
    app.listen(PORT, ()=>{
        console.log("connect to db")
        console.log(`Server running on port ${PORT}`)
    })
})

