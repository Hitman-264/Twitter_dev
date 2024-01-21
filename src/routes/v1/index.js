import express from 'express';
import {createTweet, getTweet} from '../../controllers/tweet_controller.js';
import {toggleLike} from '../../controllers/like_controller.js';
import { createComment } from '../../controllers/comment_controller.js';
import { signup, login} from '../../controllers/auth_controller.js';

import {authenticate} from '../../middlewares/authenticate.js';
const router = express.Router();

router.post('/tweets', authenticate, createTweet);

router.post('/likes/toggle', toggleLike);
router.post('/comments', createComment);
router.get('/tweets/:id', getTweet);

router.post('/signup', signup);
router.post('/login', login);
export default router;
