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
				<NavLink className="nav-link" exact to="/signup">
					Register
				</NavLink>
			</li>
		</Fragment>
	);

	return (
		<header>
			<nav className="navbar navbar-expand w-100 navbar-light bg-light">
				<a className="navbar-brand" href="/">
					Feed App
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
                <div className="float-right">
				<ul className="navbar-nav">
                    {authLinks}
                    {/* {authContext.authenticated ? logoutLink : authLinks} */}
                </ul>
                </div>
			</nav>
		</header>
	);
}

export default Navbar
