import React, { useContext } from 'react';
import PostContext from '../../context/post/PostContext';
import Post from './Post';

const postList = [
    {
        id: Math.random().toString(),
        title: "This is the first post",
        content: "Welcome to the very first post of this app",
        likes: 3,
        dislikes: 1
    },
    {
        id: Math.random().toString(),
        title: "This is the first post",
        content: "Welcome to the very first post of this app",
        likes: 3,
        dislikes: 1
    },
    {
        id: Math.random().toString(),
        title: "This is the first post",
        content: "Welcome to the very first post of this app",
        likes: 3,
        dislikes: 1
    },
    {
        id: Math.random().toString(),
        title: "This is the first post",
        content: "Welcome to the very first post of this app",
        likes: 3,
        dislikes: 1
    },
];

const Feed = () => {
    const postContext = useContext(PostContext);

    const { posts } = postContext;

    return (
        <div className="card-deck">
            {posts.map(post => (
                <Post post={post} />
            ))}
        </div>
    )
}

export default Feed
