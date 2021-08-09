import React, { useContext } from 'react'

import PostForm from '../components/forms/PostForm'
import PostContext from '../context/post/PostContext'

const NewPost = ({ history }) => {
    const { addPost } = useContext(PostContext);

    const handleAdd = (post) => {
        try {
            addPost(post);
            history.push('/');
        } catch (err) {
            alert(err);
        }
    }

    return (
        <div>
            <PostForm addPost={handleAdd} />
        </div>
    )
}

export default NewPost
