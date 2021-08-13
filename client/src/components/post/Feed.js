import React, { useContext } from 'react';
import PostContext from '../../context/post/PostContext';
import Post from './Post';

const posts = [
    {
        id: Math.random().toString(),
        createdAt: Date.now,
        edited: false,
        likes: 1,
        comments: 2,
        title: 'The first post',
        content: 'This is a new post',
        displayName: 'Darren Iyer'
    },
    {
        id: Math.random().toString(),
        createdAt: Date.now,
        edited: false,
        likes: 1,
        comments: 0,
        title: 'The second post',
        content: 'This is another post',
        displayName: 'Darren Iyer'
    },
    {
        id: Math.random().toString(),
        createdAt: Date.now,
        edited: false,
        likes: 2,
        comments: 1,
        title: 'The newest post',
        content: 'This is a great post',
        displayName: 'Sam Smith'
    },
]

const Feed = () => {
    // const postContext = useContext(PostContext);

    // const { posts } = postContext;

    return (
        <div className="card-deck">
            {posts.map(post => (
                <Post post={post} />
            ))}
        </div>
    )
}

export default Feed
