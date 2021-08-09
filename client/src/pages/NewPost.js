import React, { useContext } from 'react'

import PostForm from '../components/forms/PostForm'
import PostContext from '../context/post/PostContext'

const NewPost = ({ history }) => {
    const { addPost } = useContext(PostContext);

    const handleAdd = async (post) => {
        await addPost(post);
        history.push('/');
    }

    return (
        <div>
            <PostForm addPost={handleAdd} />
        </div>
    )
}

export default NewPost
