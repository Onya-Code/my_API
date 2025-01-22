const PostModel = require('./models/post.model');

const createPost = async ({ text, user}) => {
  const post = await PostModel.create ({
   text,
   user_id: user_id,
   created_at: new Date()
  })

  return {
   code: 201,
   success: true,
   message: 'Successful',
   data: {
    post,
   }
  }
}



const getPost = async ({ postId }) => {
 const post = await PostModel.findOne({_id: postId});

 if (!post) {
  return {
   code: 404,
   success: false,
   message: 'Post not found',
   data: null, 
  }
 }

 return {
  code: 201,
  success: true,
  message: 'successful',
  data: {
   post,
  }
 }
}



const getAllPost = async ({}) => {
 const post = await PostModel.find();

 return {
  code: 201,
  success: true,
  message: 'successful',
  data: {
   post,
  },
 }
}



const updatePost = async ({ postId, text, user}) => {
 const post = await PostModel.findOne({_id: postId});

 if (!post) {
  return {
   code: 404,
   success: false,
   meesage: 'not found',
   data: null
  }
 }

 if (post.user_id !== user_id) {
  return {
   code: 403,
   success: false,
   message: 'forbidden',
   data: null
  }
 }
 
 post.text = text
 post.updated_at = new Date()

 await post.save()

 return {
  code: 200,
  success: true,
  message: 'post updated successfully',
  data: {
   post,
  },
 }
}



const deletePost = () => async {
 const post = await PostModel({_id: postId});

 if (!post) {
  return {
   code: 404,
   success: false,
   message: 'not Found',
   data: null,
  }
 }

 email: post.deleteOne({
  _id: postId, user_id: user_id

 })

 return {
  code: 201,
  success: true,
  message: 'deleted',
  data: null,
 }
}


module.exports = {
 createPost,
 getPost,
 getAllPost,
 updatePost,
 deletePost
}