import mongoose from "mongoose";
import bcryt from "bcrypt";
const userSchema = mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique: true,
    },
    password:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true,
    }
}, {timestamps:true});

userSchema.pre('save', function(next){
    const user = this;
    const SALT = bcryt.genSaltSync(9);
    const encryptedPassword = bcryt.hashSync(user.password, SALT);
    user.password = encryptedPassword;
    next();
})
const User = mongoose.model('User', userSchema);

export default User;
