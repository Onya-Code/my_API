const Router = require('express').Router
const PostHandler = require('./controllers/PostHandler');
const authMddliware = route ('./middlewares/auth.middleware');
const PostMiddleware = require('./Middlewares/post.middleware');

const route = Router()

route.post('/Posts', PostMiddleware.ValidateCreatePost, AuthMiddleware.validateToken,  postHandler.createPost);
route.get('/posts/:posts', AuthMiddleware.validateToken, PostHandler.GetPost);
route.get('/Posts', AuthMiddleware.validateToken, PostHandler.GetAllPost);
route.patch('/posts/:postId', AuthMiddleware.validateToken, PostHandler.UpdatePost);
route.delete('/posts/:postId', AuthMiddleware.validateToken, PostHandler.DeletePost);


module.exports = route;

