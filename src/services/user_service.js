
import {UserRepository} from "../repository/index.js";
const userRepo = new UserRepository();
class UserService{
    
    async signup(data){
        try{
            const user = await userRepo.create(data);
            return user;
        }catch(error){
            throw error
            // console.log("Something went wrong at user service layer");
        }
    }

    async getUserByEmail(email){
        try{
            const user = await userRepo.findByEmail({email});
            return user;
        }catch(error){
            throw error;
        }
    }
    async signIn(data){
       try {
            const user = await this.getUserByEmail(data.email);
            console.log(user);
            if(!user){
                throw {
                    message:"no user found",
                }
            }
            if(!user.comparePassword(data.password)){
                throw{
                    message:"Incorrect password",
                }
            }
            const token = user.genJWT();
            return token;
       } catch (error) {
            throw error;
       }
    }
}

export default UserService;