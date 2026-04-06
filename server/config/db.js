// const mongoose = require("mongoose")
// async function connectDB(){
//     try{
//         await mongoose.connect(process.env.MONGODB_URL)
//         console.log('Connected to MongoDB')
//         }
//         catch(err){
//             console.log(err)
//         }
// }
// module.exports = connectDB

const mongoose = require("mongoose");

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Connected to MongoDB ✅");
    } catch (err) {
        console.error("MongoDB Connection Error ❌:", err.message);
        process.exit(1); // 🔥 STOP SERVER if DB fails
    }
}

module.exports = connectDB;