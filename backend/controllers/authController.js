import genToken from "../config/token.js";
import User from "../models/Users.js";
import bcrypt from "bcryptjs";

export const signUp = async(req,res) => {
    try {
        const {userName,email,password} = req.body;

        const checkusername = await User.findOne({userName});
        if(checkusername){
            return res.status(400).json({
                message:"Username already exisits",
            })
        }

        const checkemail = await User.findOne({email});

        if(checkemail){
            return res.status(400).json({
                message:"Email already exisits",
            })
        }

        if(password.length < 6){
            return res.status(400).json({
                message:"Password must be atleast 6 characters"
            })
        }

        const hashPassword = await bcrypt.hash(password,10);

        const user = await User.create({
            userName,email,password:hashPassword
        })

        const token = await genToken(user._id);

        res.cookie("token", token,{
            path: '/' ,
            httpOnly:true,
            secure:true,
            sameSite:"none",
            maxAge:7*24*60*60*1000
        })

        return res.status(201).json({
            user
        })


    } catch (error) {
        return res.status(500).json({
            message:`Signup error : ${error}`
        })
    }
}


export const login = async(req,res) => {
    try {
        const {email,password} = req.body;
   
        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({
                message:"User doesnt exists"
            })
        }

        const isMatch = await bcrypt.compare(password,user.password);

        if(!isMatch){
            return res.status(400).json({
                message:"Password incorrect"
            })
        }

        const token = await genToken(user._id);

        res.cookie("token", token,{
            path: '/' ,
            httpOnly:true,
            secure:true,
            sameSite:"none",
            maxAge:7*24*60*60*1000
        })

        return res.status(201).json({
            user
        })


    } catch (error) {
        return res.status(500).json({
            message:`Login error : ${error}`
        })
    }
}

export const logout = async(req,res) => {
    try {
        res.clearCookie("token", {
   path: '/' ,
  secure: true,
  sameSite: "none"
});

        return res.status(200).json({
            message:"User logged out"
        })


    } catch (error) {
        return res.status(500).json({
            message:`Error in logout : ${error}`
        })
    }
}
