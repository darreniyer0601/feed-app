const mongoose = require('mongoose');

const CommentSchema = mongoose.Schema({
    author: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'posts'
    }
});

module.exports = mongoose.model('Comment', CommentSchema);