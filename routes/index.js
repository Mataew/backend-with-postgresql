const { Router } = require('express');
const router = Router();

router.use(require('./postRouter'));

module.exports = router;
