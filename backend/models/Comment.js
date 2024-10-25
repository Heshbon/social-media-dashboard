let mongoose = require("mongoose");

let commentSchema = mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    post: { type: mongoose.Schema.Types.ObjectId, ref: 'Post', required: true },
    content: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
}, {
    collection: 'comments'
});

module.exports = mongoose.model("Comment", commentSchema);