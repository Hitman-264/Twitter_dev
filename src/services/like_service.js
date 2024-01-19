
import {TweetRepository,LikeRepository} from '../repository/index.js';
const  likeObj = new LikeRepository();
const  tweetObj = new TweetRepository();
class LikeService {

    async toggleLike(modelId, modelType, userId){  //api/v1/likes/toggle?id=modelId&type=Tweet
        if(modelType == 'Tweet'){
            var likeable = await tweetObj.find(modelId);
            // console.log('likeservice', likeable);
            
        }else if(modelType =='Comment'){   
        }else{
            throw new Error('unknown model type');
        }
        const exists = await likeObj.findByUserAndLikeable({
            user : userId,
            onModel : modelType,
            likeable : modelId,
        });

        if(exists){
            likeable.likes.pull(exists.id);
            await likeable.save();
            await likeObj.findByIdAndDelete(exists.id);
            
            var isAdded = false;
        }else{
            const newLike = await likeObj.create({
                onModel : modelType,
                likeable : modelId,
                user : userId,
            });
            likeable.likes.push(newLike);
            await likeable.save();

            var isAdded = true;
        }

        return isAdded;
    }


}

export default LikeService;