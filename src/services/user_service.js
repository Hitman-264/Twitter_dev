
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
}

export default UserService;