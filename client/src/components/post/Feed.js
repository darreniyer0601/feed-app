import React, { useContext } from 'react';
import PostContext from '../../context/post/PostContext';
import Post from './Post';

const Feed = () => {
    const postContext = useContext(PostContext);

    const { posts } = postContext;

    return (
        <div className="card-deck">
            {posts.map(post => (
                <Post post={post} key={post._id}/>
            ))}
        </div>
    )
}

export default Feed
