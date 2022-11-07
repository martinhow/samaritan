
const Router = require('@koa/router');
const controller = require('./controllers/user-controller');

const router = new Router();

// endpoints for topics
router.get('/users', controller.getUsers);
router.post('/users', controller.postUser);


module.exports = router;