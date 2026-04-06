const userModel = require("../models/userModel")
const bcrypt = require("bcrypt");
async function userSignUpController(req, res){
    // console.log("Inside userSignUpController");
    // console.log("Request body:", req.body);
    try{
        const { name, email, password,role} = req.body;
        const user = await userModel.findOne({email})
        if(user){
            throw new Error("Already user exits")
            }
        if(!name){
            throw new Error("please provide name")
        }
        if(!email){
            throw new Error("please provide email")
        }
        if(!password){
            throw new Error("please provide password")
        }
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = await bcrypt.hashSync(password, salt);
        if(!hashedPassword){
            throw new Error("Something is wrong")
        }
        const payload = {
            ...req.body,
            // role : "GENERAL",
            password: hashedPassword
        }
        const userData = new userModel(payload)

        // const userData = new userModel({
        //     name,
        //     email,
        //     password: hashedPassword,
        // });

        // const saveUser = userData.save()
        const saveUser = await userData.save();

        res.status(201).json({
            data: saveUser,
            success : true,
            error : false,
            message : "User created successfully!"
        })
    }catch(err){
        res.json({
            message: err.message || err,
            error: true,
            success: false,
        })
    }
}
module.exports = userSignUpController