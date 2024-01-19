import express from 'express';
import {createTweet} from '../../controllers/tweet_controller.js';
import {toggleLike} from '../../controllers/like_controller.js';
const router = express.Router();

router.post('/tweets', createTweet);

router.post('/likes/toggle', toggleLike);

export default router;
