import {CommentRepository, TweetRepository} from "../repository/index.js";

class CommentService{
    constructor(){
        this.commentRepo = new CommentRepository();
        this.tweetRepo = new TweetRepository();
    }

    async create(modelId,modelType,userId,content){
        if(modelType=='Tweet'){
            var commentable = await this.tweetRepo.get(modelId);
        }else if(modelType=='Comment'){
            var commentable = await this.commentRepo.get(modelId);
        }else{
            throw new Error('Unknown Model Type');
        }
        const comment = await this.commentRepo.create(content, userId,modelType,modelId);
        commentable.comments.push(comment);
        await commentable.save();
       

        return comment;
    }
}
export default CommentService;