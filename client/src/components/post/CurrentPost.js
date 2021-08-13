import React, { useContext } from 'react'

import PostContext from '../../context/post/PostContext'

const CurrentPost = () => {
    // const postContext = useContext(PostContext);

    // const { id, title, content, likes, dislikes, author } = postContext.current;

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
