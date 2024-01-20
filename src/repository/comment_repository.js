import CrudRepository from "./crud_repository.js";
import Comment from "../models/comment.js";
class CommentRepository extends CrudRepository{
    constructor(){
        super(Comment);
    }
    async create(content, userId,modelType,modelId){
        try{
            const response = await Comment.create({
                content : content,
                userId:userId,
                onModel : modelType,
                commentable:modelId,
                comments:[],
            });
            return response;
        }catch(error){
            throw error;
        }
    }
}
export default CommentRepository;