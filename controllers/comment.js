const Comment = require('../models/Comment');
const User = require('../models/User');
const Post = require('../models/Post');

exports.addComment = async (req, res) => {
    const postId = req.params.postId;
    const userId = req.user.id;

    try {
        const { text } = req.body;

        const user = await User.findById(userId);

        const comment = new Comment({
            author: user.username,
            post: postId,
            text
        });

        await comment.save();

        const post = await Post.findById(postId);

        if (!post) {
            return res.status(404).json({ msg: 'Post not found' });
        }

        const postFields = {};
        postFields.comments = post.comments + 1;

        await Post.findByIdAndUpdate(postId, {
            $set: postFields
        }, {
            new: true
        });

        res.status(200).json(comment);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ msg: 'Server error' });
    }
}

exports.getComments = async (req, res) => {
    const postId = req.params.postId;
    
    try {
        const comments = await Comment.find({ post: postId });

        res.status(200).json(comments);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ msg: 'Server error' });
    }
}