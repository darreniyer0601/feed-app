const Comment = require('../models/Comment');

exports.addComment = async (req, res) => {
    const postId = req.params.postId;
    const userId = req.user.id;

    try {
        const { text } = req.body;

        const comment = new Comment({
            author: userId,
            post: postId,
            text
        });

        await comment.save();

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