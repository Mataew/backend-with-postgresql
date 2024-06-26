const { Router } = require('express');
const { postController } = require('../controllers/postController');

const router = Router();

router.get('/posts', postController.getPosts);
router.get('/posts/:id', postController.getPostById);
router.post('/posts', postController.createPost);
router.delete('/posts/:id', postController.deletePost);
router.patch('/posts/:id', postController.updatePost);

module.exports = router;
