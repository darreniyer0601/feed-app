import React, {useContext, useEffect}  from "react";
import axios from 'axios';

import Feed from "../components/post/Feed";
import PostContext from "../context/post/PostContext";

const Home = () => {
    const postContext = useContext(PostContext);

    useEffect(() => {
		axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');
        postContext.getPosts();
		// eslint-disable-next-line
    }, []);

	return (
		<div>
			<Feed />
		</div>
	);
};

export default Home;
