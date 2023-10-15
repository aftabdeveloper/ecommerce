import user from "../model/users.model.js";
import User from "../model/users.model.js"

export const create = async (req,res)=>{
    try {
        const data = req.body;
        const user = new User(data)
        await user.save();
        res.status(200).json(user)
    }
    catch(err)
    {
        res.status(424).json({err: err.message})
    }
 
}

export const fetch = async (req,res)=>{
    const users = await User.find()
    if(users.length) return res.status(200).json({users})
    res.status(404).json({message: "Users collection is empty"})
}

export const update = async (req,res)=>{
    try {
        const id = req.params.id
        const data = req.body
        await User.updateOne({_id: id},data)
        res.status(200).json({success: true})
    }
    catch(err) 
    {
        res.status(424).json({err: err.message})
    }
}

export const remove = async (req,res)=>{
    try {
        const id = req.params.id
        await User.deleteOne({_id: id})
        res.status(200).json({success: true})
    } 
    catch(err) 
    {
        res.status(424).json({err: err.message})
    }
}
