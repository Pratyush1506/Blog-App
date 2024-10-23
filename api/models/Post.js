const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const PostSchema = new Schema({
    title: String,
    summary: String,
    content: String,
    cover: String,
    author:{type:Schema.Types.ObjectId, ref:'User'},
},{
    timestamps: true, // with this we will have 2 new columns created at and updated at
});

const PostModel = model('Post', PostSchema);

module.exports = PostModel;