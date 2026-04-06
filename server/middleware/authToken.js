const jwt = require('jsonwebtoken')
async function authToken(req,res,next){
    try{
        const token=req.cookies?.token
        if(!token){
            return res.status(200).json({
                message: "User not loggedIn",
                error: true,
                success: false
            })
        } 
        jwt.verify(token, process.env.TOKEN_SECRET_KEY, function(err,decoded){
            console.log(err);
            console.log(decoded)
            if(err){
                console.log("error auth", err)
                return res.status(401).json({
                    message: "Invalid or expired token",
                    error: true,
                    success: false
                });
            }
            // req.userId=decoded?._id
            // next()
            req.user=decoded
            if(err){
                console.log("error auth", err)
            }
            req.userId = decoded?._id
            next()            
            
        })
    }catch(err){
        res.status(400).json({
            message: err.message || err,
            data:[],
            error: true,
            success: false
        })
    }
}
module.exports = authToken

// const jwt = require("jsonwebtoken");
// const User = require("../models/userModel");

// const protect = async (req, res, next) => {
//   const token = req.headers.authorization?.split(" ")[1];
//   if (!token) {
//     return res.status(401).json({ message: "Not authorized, no token" });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = await User.findById(decoded.id).select("-password");
//     next();
//   } catch (err) {
//     return res.status(401).json({ message: "Token failed" });
//   }
// };

// module.exports = protect;
