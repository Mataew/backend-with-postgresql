const db = require('../config/db');

module.exports.postController = {
    createPost: async (req, res) => {
        try {
            const { title, content } = req.body;
            const newPost = await db.query(
                'INSERT INTO posts (title, content) values ($1, $2) RETURNING *',
                [title, content],
            );

            res.json(newPost.rows[0]);
        } catch (e) {
            console.log(e);
        }
    },
    getPosts: async (req, res) => {
        try {
            const allPosts = await db.query('SELECT * FROM posts');

            res.json(allPosts.rows);
        } catch (e) {
            console.log(e);
        }
    },
    getPostById: async (req, res) => {
        try {
            const { id } = req.params;

            const onePost = await db.query(
                'SELECT * FROM posts WHERE id = $1',
                [id],
            );

            res.json(onePost.rows[0]);
        } catch (e) {
            console.log(e);
        }
    },
    deletePost: async (req, res) => {
        try {
            const { id } = req.params;

            await db.query('DELETE FROM posts WHERE id = $1', [id]);

            res.json('Пост удален');
        } catch (e) {
            console.log(e);
        }
    },
    updatePost: async (req, res) => {
        try {
            const { title, content } = req.body;

            await db.query(
                'UPDATE posts set title = $1, content = $2 WHERE id = $3 RETURNING *',
                [title, content, req.params.id],
            );

            res.json('Пост обновлен');
        } catch (e) {
            console.log(e);
        }
    },
};
