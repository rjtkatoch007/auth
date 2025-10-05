import {User} from '../models/user.model.js'
import {generateTokenAndSetCookie} from "../utils/generateTokenAndSetCookie.js"
import bcryptjs from "bcryptjs"

export const signup = async (req, res)=>{
    const {email, password, name} = req.body
    try {
        if(!email || !password || !name){
        throw new Error("All fields are required!")
    }
    const userAlreadyExist = await User.findOne({email})
    if(userAlreadyExist){
        res.status(400).json({success:false, message:"User already exists!"})
    }

    const hashedPassword = await bcryptjs.hash(password, 10)
    const varificationToken = Math.floor(100000+Math.random() * 900000).toString()

    const user = new User({
        email,
        password:hashedPassword,
        name,
        varificationToken,
        varificationTokenExpiresAt:Date.now()+24*60*60*1000 //24hrs
    })

    await user.save()

    //jwt
    generateTokenAndSetCookie(res, user._id)
    res.status(201).json({success:true, message:"User created ", user:{...user._doc, password:undefined,},})

    } catch (error) {
        res.status(400).json({success:false, message:error.message})
    }
    

}

export const login = async (req, res)=>{
    res.send("Login route")
}

export const logout = async (req, res)=>{
    res.send("Logout route")
}