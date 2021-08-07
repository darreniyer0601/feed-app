import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";
import { Switch, Route } from "react-router";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import Navbar from "./components/Navbar";

import AuthState from "./context/auth/AuthState";
import PostState from "./context/post/PostState";

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
						<Route exact path="/login" component={Login} />
						<Route exact path="/signup" component={Signup} />
					</Switch>
				</PostState>
			</AuthState>
		</div>
	);
}

export default App;
