import React, { useContext } from 'react'

import PostContext from '../../context/post/PostContext'

const CurrentPost = () => {
    const postContext = useContext(PostContext);

    const { id, title, content, likes, dislikes, author } = postContext.current;

    return (
        <div>
            
        </div>
    )
}

export default CurrentPost
