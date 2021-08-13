const Post = require('../models/Post');
const User = require('../models/User');

exports.addPost = async (req, res) => {
    const { title, content } = req.body;

    const author = req.user.id;

    try {
        const user = await User.findById(author);

        // Check if user exists
        if (!user) {
            return res.status(404).json({ msg: 'User not found' });
        }

        const newPost = new Post({
            author,
            title,
            content,
            displayName: user.username
        });

        await newPost.save();

        res.json(newPost);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ msg: 'Server Error' });
    }
}

exports.updatePost = async (req, res) => {
    const postId = req.params.id;
    const { content } = req.body;

    try {
        const post = await Post.findById(postId);

        // Check if post exists
        if (!post) {
            return res.status(404).json({ msg: 'Post not found' });
        }

        // Check if user owns post
        if (post.author.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'Not authorized' });
        }

        const postFields = {};
        postFields.content = content;
        postFields.edited = true;

        const updatedPost = await Post.findByIdAndUpdate(postId, {
            $set: postFields
        }, {
            new: true
        });

        res.status(200).json(updatedPost);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ msg: 'Server error' });
    }
}

exports.deletePost = async (req, res) => {
    const postId = req.params.id;

    try {
        const post = await Post.findById(postId);

        // Check if post exists
        if (!post) {
            return res.status(404).json({ msg: 'Post not found' });
        }

        // Check if user owns post
        if (post.author.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'Not authorized' });
        }

        await Post.findByIdAndRemove(postId);

        res.status(200).json({ msg: 'Post deleted' });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ msg: 'Server error' });
    }
}

exports.getPosts = async (req, res) => {
    try {
        const posts = await Post.find().sort({
            createdAt: -1,
        });

        res.status(200).json(posts);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ msg: 'Server error' });
    }
}

exports.getOnePost = async (req, res) => {
    const postId = req.params.id;

    try {
        const post = await Post.findById(postId);

        // Check if post exists
        if (!post) {
            return res.status(404).json({ msg: 'Post not found' });
        }

        res.status(200).json(post);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ msg: 'Server error' });
    }
}

exports.addLike = async (req, res) => {
    const postId = req.params.id;

    try {
        const post = await Post.findById(postId);

        // Check if post exists
        if (!post) {
            return res.status(400).json({ msg: 'Post not found' });
        }

        const postFields = {};
        postFields.likes = post.likes + 1;

        const updatedPost = await Post.findByIdAndUpdate(postId, {
            $set: postFields
        }, {
            new: true
        });

        res.status(200).json(updatedPost);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ msg: 'Server error' });
    }
}

exports.removeLike = async (req, res) => {
    const postId = req.params.id;

    try {
        const post = await Post.findById(postId);

        if (!post) {
            return res.status(404).json({ msg: 'Post not found' });
        }

        const postFields = {};
        postFields.likes = post.likes - 1;

        await Post.findByIdAndUpdate(postId, {
            $set: postFields
        }, {
            new: true
        });

        res.status(200).json({ msg: 'Like removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ msg: 'Server error' });
    }
}
