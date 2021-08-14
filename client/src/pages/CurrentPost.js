import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router';

import PostContext from '../context/post/PostContext'

const CurrentPost = () => {
    const { postId } = useParams();
    const postContext = useContext(PostContext);

    useEffect(() => {
        postContext.setCurrent(postId);
    }, [postContext, postId]);

    // const { id, title, content, likes, dislikes, author } = postContext.current;
    // const { comments } = postContext;

    const currentPost = {
        id: Math.random.toString(),
        title: '',
        content: '',
        likes: 2,
        displayName: 'Darren Iyer'
    }

    const { id, title, content, likes, dislikes, author } = currentPost;

    return (
        <div>
            
        </div>
    )
}

export default CurrentPost
