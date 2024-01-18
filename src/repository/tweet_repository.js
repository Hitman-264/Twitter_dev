import Tweet from '../models/tweet.js';
import CrudRepository from './crud_repository.js';

class TweetRepository extends CrudRepository{

    constructor(){
        super(Tweet);
    }

    async create(data){
        try{
            const tweet = await Tweet.create(data);
            return tweet;
        }catch(error){
            console.log("Something error occured at repository layer");
        }
    }    
    
    async getwithComments(id){
        try{
            const tweet = await Tweet.findById(id).populate({path: 'comments'});
            return tweet;
        }catch(error){
            console.log("Something error occured at repository layer");
        }
    }
    async getAll(offset,limit){
        try{
            const tweet = await Tweet.find().skip(offset).limit(limit);
            return tweet;
        }catch(error){
            console.log("Something error occured at repository layer");
        }
    }

}
export default TweetRepository;