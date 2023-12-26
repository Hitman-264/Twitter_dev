const mongoose = require('mongoose');

const tweetSchema = new mongoose.Schema({
    content : {
        type : String,
        required: true,
    },
    userEmail : {
        type : String,
    },
    comments : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Comment',
        }
    ]
}, {timestamps:true});

tweetSchema.virtual('contentwithEmail').get(function process(){
    return `${this.content}\nCreated by: ${this.userEmail}`;
})

tweetSchema.pre('save', function(){
    console.log("Inside hook");
    this.content += '.....';
    next();
})

const Tweet = mongoose.model('Tweet', tweetSchema);
module.exports = Tweet;