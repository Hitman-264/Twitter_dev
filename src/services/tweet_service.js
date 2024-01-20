import {TweetRepository, HashtagRepository} from '../repository/index.js';

 class TweetService {
    constructor(){
        this.tweetRepository = new TweetRepository();
        this.hashtagRepository = new HashtagRepository();
    }
    async get(tweetId){
        try{
            const result = this.tweetRepository.getwithComments(tweetId);
            return result;
        }catch(error){
            console.log("Something went wrong at tweet service layer")
        }
    }
    async create(data){
        const content = data.content;
        let tags = content.match(/#[a-zA-Z0-9_]+/g); // this regex extracts hashtags
        tags = tags.map((tag) => tag.substring(1).toLowerCase()) ;

      
        const tweet = await this.tweetRepository.create(data);

        let alreadyPresentTags = await this.hashtagRepository.findByName(tags);
        
        let titleofPresenttags = alreadyPresentTags.map(tag => tag.title);

        let newTags = tags.filter(tag => !titleofPresenttags.includes(tag));
        
        newTags = newTags.map(tag => {
            return {title : tag, tweets : [tweet.id]} 
        });
       
        const response = await this.hashtagRepository.bulkCreate(newTags);
        
        alreadyPresentTags.forEach(tag => {
            tag.tweets.push(tweet.id);
            tag.save();
        });
        
        

        // [excited,coding,js,career] -> [{title:excited}, {title:career}]
        // todo create hashtags and add here
        /**
         * 1. bulkcreate in mongoose
         * 2. filter title of hashing based on multiple tags
         * 3. How to add tweet id inside all the hashtags
         */ 
        return tweet;
    }
}

export default TweetService;

/*
    this is my #first #tweet. I am really #excited
*/
