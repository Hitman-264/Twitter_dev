import UserService from "../services/user_service.js";

const userService = new UserService();

export const signup = async(req,res)=>{
    try{
     
        const response = await userService.signup({
            email: req.body.email,
            password: req.body.password,
            name: req.body.name, 
        });
        return res.status(201).json({
            success:true,
            message:"Successfully created a user",
            data:response,
            err:{},
        })
    }catch(error){
        return res.status(501).json({
            success:false,
            message: "User not created",
            data:{},
            err:error
        })
    }
}

export const login = async(req,res)=>{
    try{
        const token = await userService.signIn(req.body);
        return res.status(200).json({
            success:true,
            message:"Successfully logged in",
            data:token,
            err:{},
        })
    }catch(error){
        return res.status(501).json({
            success:false,
            message: "Something went wrong",
            data:{},
            err:error
        })
    }
}