import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    // const logoutLink = (
	// 	<li className="nav-item">
	// 		<a className="nav-link" href="/logout">
	// 			Logout
	// 		</a>
	// 	</li>
	// );

	const authLinks = (
		<Fragment>
			<li className="nav-item">
				<NavLink className="nav-link" exact to="/login">
					Login
				</NavLink>
			</li>
			<li className="nav-item">
				<NavLink className="nav-link" exact to="/register">
					Register
				</NavLink>
			</li>
		</Fragment>
	);

	return (
		<header>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<a className="navbar-brand" href="/">
					Expense Tracker
				</a>
				<ul className="navbar-nav">
					<li className="nav-item">
						<NavLink className="nav-link" exact to="/">
							Home
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink className="nav-link" exact to="/profile">
							Profile
						</NavLink>
					</li>
				</ul>
				<ul className="navbar-nav float-right">
                    {authLinks}
                    {/* {authContext.authenticated ? logoutLink : authLinks} */}
                </ul>
			</nav>
		</header>
	);
}

export default Navbar
