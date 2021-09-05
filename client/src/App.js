import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";
import axios from 'axios';
import { Switch, Route } from "react-router";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import CurrentPost from "./pages/CurrentPost";

import Navbar from "./components/Navbar";

import AuthState from "./context/auth/AuthState";
import PostState from "./context/post/PostState";
import NewPost from "./pages/NewPost";

const token = localStorage.token;

if (token) {
	axios.defaults.headers.common['Authorization'] = token;
} else {
	delete axios.defaults.headers.common['Authorization'];
}

function App() {
	return (
		<div className="App">
			<AuthState>
				<PostState>
					<Navbar />
					<Switch>
						<Route exact path="/" component={Home} /> {/* Private Route */}
						<Route exact path="/profile" component={Profile} />{" "}
						{/* Private Route */}
						<Route exact path='/new-post' component={NewPost} />
						<Route exact path='/post/:postId' component={CurrentPost} />
						<Route exact path="/login" component={Login} />
						<Route exact path="/signup" component={Signup} />
					</Switch>
				</PostState>
			</AuthState>
		</div>
	);
}

export default App;
