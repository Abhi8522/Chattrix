const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const User = require("../models/user.modle")

const signup = async (req,res) => {
        try {
                const { fullName, userName, email, password } = req.body

                if (!fullName || !userName || !email || !password) {
                return res.status(400).json({ status: false, message: "All fields are required." });
                }


                const findUser = await User.findOne({userName})
                if(findUser) 
                        return res.status(400).json({status : false, message : "User Already Exist..."})
                        
                const findEmail = await User.findOne({email})
                if(findEmail) 
                        return res.status(400).json({status : false, message : "Email Already Exist..."})
                        
                const hashPassword = await bcrypt.hash(password,10)

                const user = await User.create({
                        fullName,
                        userName,
                        email,
                        password : hashPassword
                })

                return res.status(200).json({status : true, message : "Signup Successfully...",user})
        } catch (error) {
                console.log(`Signup Eroor : ${error}`)
                return res.status(500).json({ status: false, message: "Internal Server Error" });
        }
}



const login = async (req,res) => {
        try {
                const { email, password } = req.body

                const findUser = await User.findOne({email})
                if(!findUser) 
                        return res.status(400).json({status : false, message : "User Not Exist..."})
                        
                const isMatch = await bcrypt.compare(password, findUser.password);
                if (!isMatch) {
                return res.status(400).json({ status: false, message: "Invalid Credentials" });
                }

                return res.status(200).json({status : true, message : "Login Successfully...",findUser})
        } catch (error) {
                console.log(`Signup Eroor : ${error}`)
                return res.status(500).json({ status: false, message: "Internal Server Error" });
        }
}


const logout = async (req,res) => {
        try {
                res.clearCookie("token")
                return res.status(200).json({status : true, message : "Logout Successfully..."})
        } catch (error) {
                 console.log(`Signup Eroor : ${error}`)
                return res.status(500).json({ status: false, message: "Internal Server Error" });
        }
}
module.exports = {signup,login,logout}