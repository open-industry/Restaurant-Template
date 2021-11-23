import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Home from './components/home.js';
import Menu from './components/menu.js';
import Contact from './components/contact.js';
import './App.css';
import 'bulma/css/bulma.min.css';

function App() {
	return (		
		<Router>
			<header className="hero has-text-centered has-background-warning">
				<h1 className="title is-1 has-text-danger-dark">McDnld's Rstrnt</h1>
				<h2 className="subtitle is-3">Fine Dilatory Cuisine</h2>				
			</header>
			<main className="section has-background-danger-dark">
				<div className="container has-background-white-ter">
					<div className="tabs is-large is-boxed is-centered">
						<ul>
							<li><Link to="/" className="has-text-warning-dark">Home</Link></li>
							<li><Link to="/menu" className="has-text-warning-dark">Menu</Link></li>
							<li><Link to="/contact" className="has-text-warning-dark">Contact</Link></li>
						</ul>
					</div>
				</div>
				<div className="section has-background-white-ter">
					<Routes>
						<Route path="/" element={<Home/>} />
						<Route path="/menu" element={<Menu/>} />
						<Route path="/contact" element={<Contact/>} />
					</Routes>
				</div>
			</main>
		</Router>
	);
}

export default App;
