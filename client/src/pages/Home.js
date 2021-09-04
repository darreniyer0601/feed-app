import React, {useContext, useEffect}  from "react";

import Feed from "../components/post/Feed";
import PostContext from "../context/post/PostContext";

const Home = () => {
    const postContext = useContext(PostContext);

    useEffect(() => {
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
