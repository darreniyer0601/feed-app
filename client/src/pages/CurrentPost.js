import React, { useContext, useEffect, useState } from "react";
import moment from "moment";
import { useParams } from "react-router";

import PostContext from "../context/post/PostContext";

const CurrentPost = () => {
	// const { postId } = useParams();
	// const postContext = useContext(PostContext);
	const [comment, setComment] = useState("");

	// useEffect(() => {
	//     postContext.setCurrent(postId);
	// }, [postContext, postId]);

	// const { id, title, content, likes, dislikes, author, isLiked } = postContext.current;
	// const { comments } = postContext;

	const handleChange = (e) => {
		setComment(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(comment);
	};

	const currentPost = {
		id: Math.random.toString(),
		title: "So about the new episode of Vivy",
		content: `Throughout the years, dozens of sci-fi stories have given us terrifying scenarios in which robots and artificial intelligence wreak havoc upon mankind. No one can say we weren't warned when our computers, iPhones, and microwaves destroy the world. Clearly, these stories haven't been enough to convince us that we're in danger. Vivy: Fluorite Eye's Song could be the first anime to succeed at warning us of the great threat posed by technology.

        Vivy’s premise is a combination of beloved stories and Hollywood films about sentient robots solving humanity's problems, whether intentionally or coincidentally—Ghost in the Shell, Terminator, Blade Runner, iRobot, and A.I. Artificial Intelligence, to name a few. Vivy may not rank among the classics, though it's impressive audiovisuals will inevitably land it a place on "Best Sci-fi Anime" lists. Written by Tappei Nagatsuki, of Re:Zero fame and produced by none other than WIT Studio, it was bound to create ripples throughout the anime community. Doubtlessly, the premiere episode caught fans' attention. It begins with a clichéd cold open. A city full of humanoid robots sing a horrible melody out of tune, plumes of smoke rise above the futuristic architecture, people run through the streets screaming, and ounces of blood cover the pavement. Then it ends—this is the future ahead of our titular heroine, Vivy. One which she is asked to prevent.
        
        50 years in our future, Vivy prepares to sing in front of a small audience. Her stilted performance and hollow singing left the citizens underwhelmed. After all, Vivy is “the first autonomous AI” ever created; Her purpose is to sing for the entertainment of citizens. While preparing for her next song, a robotic stuffed bear, given to her as a gift, suddenly calls out to her. The bear, who introduces himself as Masamoto, was sent to warn her about the future apocalypse. Once she comes to believe him, she is swept into a whirlwind of government conspiracy, a gang of criminals, murderous robots, terrorism, and more.
        
        Masamoto's plan to prevent the apocalypse is known as the Singularity Project. He revisits her throughout the years to stop 'Singularity Points'. These are the significant events that cause the disastrous future, and it's Vivy's responsibility to prevent them from happening. All of this information is explained in a lengthy exposition dialogue during the first episode. "Telling" rather than "Showing" is the frustrating pattern of this show's script. Vivy was chosen because, in the apocalypse, she is the only autonomous AI left uncorrupted. Masamoto reprograms her to have combat abilities during combat, which somehow gives her the power to shield bullets with her bare hands, dodge bullets, and run as fast as a train. If that sounds stupid, well, it kind of is, but the animators make it look badass.
        
        At its core, this is a thriller anime with a splash of music. Vivy's programmed goal is to be a singer, and it shows. Vivy's singing and mannerisms change as time flies by, visualized with brief performances. The song reused the most is the opening, which is fantastic on both visual and audio fronts. When the show focused on her music career, her dreams and passion showed she has a heart: music and an audience her sole motivations. Yet, we don't see it enough. It would be offensive to claim she has "no personality" because it's OK not to present your emotions outwardly. Writing Vivy in such a way detracted from the story it attempted to tell. Whether Vivy accomplishes an outstanding performance or fails to get a crowd, she has very little response. Happiness, pride, or dismay are hard to tell, though we can infer her emotions. Her face is nearly expressionless, her voice is constantly monotone, and she has little to no body language indicating what she's thinking. This is not uncommon for films starring AI characters—after all, Arnold Schwarzenegger only had 17 lines in Terminator. However, he wasn't the main character, and Vivy is. Her subdued personality isn't the problem. It's how she lacks autonomy in the series named after her.
        
        Rather than being a heroine, she was more of an interchangeable pawn being guided through the plot by an obnoxious robot man in her head, rather than a heroine with her own autonomy. The few times she rejects Masamotos orders, there is a glimmer of hope she may regain agency in her own story. Then the moment ends, and the script is thrown back into Masamoto's court. All of their excursions in reshaping history are planned by him. He does everything for her with future robot abilities, no matter how illogical, and Vivy does the fist fighting. Her hero's journey was more like a long video game tutorial played by someone else.
        
        Masamoto, an irritating AI that takes the form of a teddy bear and a flying cube, exists to guide Vivy through the plot. Imagine if you combined Jarjar Binks with a sarcastic supercomputer. That's him. His voice is grating, like nails on a chalkboard—and the actor has a history of good voice acting, the screenwriting and directing are entirely to blame for wasting a good voice actor. Jun Fukuyama previously voiced Koro-sensei in Assassination Classroom, which he performed exceptionally. The world-building is reliant on Masamoto's exposition. He's not a character. He is a mouthpiece for the writers to hold our hand through the complicated story. There's plenty to criticize about Masamoto because he, unfortunately, was given the majority of the dialogue.
        `,
		likes: 2,
		displayName: "Darren Iyer",
		createdAt: moment().format("MMM Do YY"),
		isLiked: true,
	};

	const comments = [
		{
			author: "Sam Smith",
			text: "Yo welcome to the cult",
			createdAt: moment.now(),
		},
	];

	const { title, content, displayName, createdAt, isLiked } = currentPost;

	const [liked, setLiked] = useState(isLiked);

	const handleLike = () => {
		// Send command to context
		setLiked(true);
	};

	const handleUnlike = () => {
		// Send command to context
		setLiked(false);
	};

	return (
		<div>
			<div className="card text-center m-5">
				<div className="card-header">
					<h3>{title}</h3>
					<p className="text-muted display-name">
						{displayName}
						{" || "}
						{createdAt}
					</p>
				</div>
				<div className="card-body">{content}</div>
				<div className="card-footer d-flex flex-align-row justify-content-center">
					<button
						disabled={liked}
						className="btn btn-success m-2"
						onClick={handleLike}
					>
						Like Post
					</button>
					<button
						disabled={!liked}
						className="btn btn-warning m-2"
						onClick={handleUnlike}
					>
						Unlike Post
					</button>
				</div>
			</div>
			<div className="container">
				<form
					onSubmit={handleSubmit}
					className="m-2 row"
				>
					<div className="col-8 form-group mr-3">
						<input
							name="comment"
							type="text"
							className="form-control"
							required
							onChange={handleChange}
						/>
					</div>
					<div className="col-4">
						<button type="submit" className="btn btn-dark ml-3">
							Comment
						</button>
					</div>
				</form>
			</div>
			<div class="list-group d-flex m-4">
				{comments.map((comment) => (
					<div class="list-group-item list-group-item-action flex-column align-items-start">
						<div class="d-flex w-100 justify-content-between">
							<h5 class="mb-1">{comment.author}</h5>
							<small>{moment().startOf("hour").fromNow()}</small>
						</div>
						<p class="mb-1">{comment.text}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default CurrentPost;
