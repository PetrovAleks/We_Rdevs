import React from "react";
import logo from "../img/logo.svg";
import { NavLink } from "react-router-dom";

function Header() {
	return (
		<header className="header">
			<div className="container header-container">
				<svg className="logo-svg" width="150px" height="50px">
					<use href={`${logo}#icologo`}></use>
				</svg>

				<nav className="nav">
					<ul className="nav-list list-style">
						<li className="nav-item">
							<NavLink
								to="/home"
								className="nav-item__link"
								activeClassName="active-link"
							>
								Home<span className="nav-item__action"></span>
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								to="/about-page"
								className="nav-item__link"
								activeClassName="active-link"
							>
								About us<span className="nav-item__action"></span>
							</NavLink>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}

export default Header;
