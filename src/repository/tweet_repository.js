const Tweet = require('../models/tweet');

class TweetRepository{

    async create(data){
        try{
            const tweet = await Tweet.create(data);
            return tweet;
        }catch(error){
            console.log("Something error occured at repository layer");
        }
    }    
    async get(id){
        try{
            const tweet = await Tweet.findById(id);
            return tweet;
        }catch(error){
            console.log("Something error occured at repository layer");
        }
    }
    async destroy(id){
        try{
            const tweet = await Tweet.findByIdAndDelete(id);
            return tweet;
        }catch(error){
            console.log("Something error occured at repository layer");
        }
    }
    async update(id,data){
        try{
            const tweet = await Tweet.findByIdAndUpdate(id,data, {new:true});
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
module.exports = TweetRepository;