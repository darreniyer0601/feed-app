import React from 'react';
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
    return (
        <div className="card-deck">
            {postList.map(post => (
                <Post post={post} />
            ))}
        </div>
    )
}

export default Feed
