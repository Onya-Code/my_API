const PostSchema = new mongoose.schema({
   title: {unique: true, type: String},
   description: String,
   author:String,
   created_at: Date,
   state: String,
   read_content: String,
   reading_time: String,
   tags: String,
   timestamp: String,
})


const PostModel = mongoose('Post', PostSchema);

module.exports = PostModel;


