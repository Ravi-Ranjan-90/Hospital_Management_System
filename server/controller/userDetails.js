// async function userDetailsController(req,res){
//     try{

//     }catch(err){
//         res.status(400).json({
//             message: err.message || err,
//             error: true,
//             success: false,
//         })
// }
// }
// module.exports = userDetailsController

const userModel = require("../models/userModel");
// const { use } = require("../routes");
async function userDetailsController(req, res) {
    try {
        console.log("userId",req.userId)
        const user = await userModel.findById(req.userId);
      res.status(200).json({
        data: user,
        message: "User details", // Replace with actual data
        error: false,
        success: true,
      });
    } catch (err) {
      res.status(400).json({
        message: err.message || err,
        error: true,
        success: false,
      });
    }
  }
  
  module.exports = userDetailsController;
  