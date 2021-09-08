import React, { Fragment, useContext } from "react";
import { NavLink } from "react-router-dom";

import AuthContext from "../context/auth/AuthContext";

const Navbar = () => {
	const authContext = useContext(AuthContext);

	const handleLogout = () => {
		authContext.logout();
	}

	const logoutLink = (
		<li className="nav-item">
			<a className="nav-link" href="/" onClick={handleLogout}>
				Logout
			</a>
		</li>
	);

	const authLinks = (
		<Fragment>
			<li className="nav-item">
				<NavLink className="nav-link" exact to="/login">
					Login
				</NavLink>
			</li>
			<li className="nav-item">
				<NavLink className="nav-link" exact to="/signup">
					Register
				</NavLink>
			</li>
		</Fragment>
	);

	return (
		<header>
			<nav className="navbar navbar-expand w-100 navbar-light bg-light">
				<a className="navbar-brand m-2" href="/">
					<h3><strong>The Writer's Circle</strong></h3>
				</a>
				<ul className="navbar-nav me-auto">
					{authContext.authenticated && (
						<Fragment>
							<li className="nav-item">
								<NavLink className="nav-link" exact to="/">
									Home
								</NavLink>
							</li>
							{/* <li className="nav-item">
								<NavLink className="nav-link" exact to="/profile">
									Profile
								</NavLink>
							</li> */}
							<li className="nav-item">
								<NavLink className="nav-link" exact to="/new-post">
									New Post
								</NavLink>
							</li>
						</Fragment>
					)}
				</ul>
				<div className="mr-2">
					<ul className="navbar-nav">
						{authContext.authenticated ? logoutLink : authLinks}
					</ul>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
