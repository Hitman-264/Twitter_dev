import Like from '../models/like.js';
import CrudRepository from './crud_repository.js';

class LikeRepository extends CrudRepository{
    constructor(){
        super(Like);
    }

    async findByUserAndLikeable(data){
        try{
            const like = await Like.findOne(data);
            return like;
        }catch(error){
            throw error;
        }
    }
    async findByIdAndDelete(id){
        try{
             await Like.findByIdAndDelete(id);
        
        }catch(error){
            console.log(error);
        }
    }
}

export default LikeRepository;