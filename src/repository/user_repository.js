import User from '../models/user.js';
import CrudRepository from './crud_repository.js';

class UserRepository extends CrudRepository {
    constructor(){
        super(User);

    }
    
    async findByEmail(email){
        try{
            
            const response = await User.findOne(email);
            console.log(response);

            return response;
        }catch(error){
            throw error;
        }
    }
}

export default UserRepository;