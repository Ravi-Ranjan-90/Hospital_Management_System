// const bcrypt = require("bcrypt")
// const userModel = require("../models/userModel")
// const jwt = require("jsonwebtoken")
// async function userSignInController(req,res){
//     try{
//         const {email, password,role} = req.body;
//         if(!email){
//             throw new Error("please provide email")
//         }
//         if(!password){
//             throw new Error("please provide password")
//         }
//         const user = await userModel.findOne({email});
//         if(!user){
//             throw new Error("user not found")
//             }
//         const checkPassword = await bcrypt.compare(password,user.password);
//         if(checkPassword){
//             const tokenData = {
//                 _id: user._id,
//                 email: user.email
//             }
//             const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET_KEY,{expiresIn: 60*60*8});
//             const tokenOption={
//                 httpOnly: true,
//                 secure: process.env.NODE_ENV === "production", // Only secure in prod
//   sameSite: "Lax", // Or "None" if frontend and backend are cross-origin
//   maxAge: 1000 * 60 * 60 * 8 // 8 hours
//             }
//             res.cookie("token",token,tokenOption).status(200).json({
//                 message: "user logged in successfully",
//                 token: token,
//                 role: user.role,
//                 user: {
//                     _id: user._id,
//                     name: user.name,
//                     email: user.email,
//                     role: user.role
//                 },
//                 success: true,
//                 error: false
//             })
//         }else{
//             throw new Error("password is not correct")
//         }
//     }catch(err){
//         res.json({
//             message: err.message || err,
//             error: true,
//             success: false,
//     })}
// }
// module.exports = userSignInController

const bcrypt = require("bcrypt");
const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");

async function userSignInController(req, res) {
    try {
        const { email, password } = req.body;

        if (!email) {
            return res.status(400).json({ message: "Please provide email" });
        }

        if (!password) {
            return res.status(400).json({ message: "Please provide password" });
        }

        const user = await userModel.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const checkPassword = await bcrypt.compare(password, user.password);

        if (!checkPassword) {
            return res.status(401).json({ message: "Password is incorrect", success: false });
        }

        const tokenData = {
            _id: user._id,
            email: user.email
        };

        const token = jwt.sign(
            tokenData,
            process.env.TOKEN_SECRET_KEY,
            { expiresIn: "8h" }
        );

        const tokenOption = {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production", // true in prod
            sameSite: process.env.NODE_ENV === "production" ? "None" : "Lax",
            maxAge: 1000 * 60 * 60 * 8
        };

        res.cookie("token", token, tokenOption).status(200).json({
            message: "User logged in successfully",
            success: true,
            error: false,
            token,
            role: user.role,
            user: {
                _id: user._id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        });

    } catch (err) {
        res.status(500).json({
            message: err.message || err,
            error: true,
            success: false
        });
    }
}

module.exports = userSignInController;