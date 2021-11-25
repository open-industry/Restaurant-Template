import React, { useState } from 'react';
// BrowserRouter in index.js
import { Route, Routes, Link } from 'react-router-dom';
import Home from './components/home.js';
import Menu from './components/menu.js';
import Contact from './components/contact.js';
import './App.css';
import 'bulma/css/bulma.min.css';

const navItems = ['Home', 'Menu', 'Contact'];

// icon className selector function for font awesome
const iconClass = (nav) => {
	switch (nav) {
			case navItems[0]:
				return 'fas fa-house';
			case navItems[1]:
				return 'fas fa-utensils';
			case navItems[2]:
				return 'fas fa-phone';
			default:
				return 'fas fa-house';
	};
};

function App() {
	const [activeNav, setActiveNav] = useState(() => navItems[0]);

	const handleNavClick = (nav) => {
		setActiveNav(pevNav => nav);
	}

	return (		
		<>
			<header className="hero has-text-centered has-background-danger-dark">
				<h1 className="title is-1 has-text-warning">McDnld's Rstrnt</h1>
				<h2 className="subtitle is-3 has-text-white-ter">Fine Dilatory Cuisine</h2>				
			</header>
			<main className="section has-background-danger-dark">
				<div className="box">
					<div className="container has-background-white">
						<div className="tabs is-large is-boxed is-centered">
							<ul>
								{navItems.map((item) => (
									<li key={item} className={item === activeNav ? "is-active" : null}>
										<Link
											to={`/${item !== navItems[0] ? item.toLowerCase() : ""}`}
											className={item === activeNav ? "active-font" : "has-text-warning-dark"}
											onClick={() => handleNavClick(item)}
										>
											<span className="icon is-small has-text-grey-dark">
												<i className={`${iconClass(item)} is-size-6`}></i>
											</span>
											{item}
										</Link>
									</li>
								))}							
							</ul>
						</div>
					</div>
					<div className="container has-background-white">
						<Routes>
							<Route path="/menu" element={<Menu/>} />
							<Route path="/contact" element={<Contact/>} />
							<Route path="/" element={<Home/>} />
						</Routes>
					</div>
				</div>
			</main>
		</>
	);
}

export default App;
