import './App.css';
import 'bulma/css/bulma.min.css';

function App() {
	return (		
		<>
			<header className="hero has-text-centered has-background-warning">
				<h1 className="title is-1 has-text-danger-dark">McDnld's Rstrnt</h1>
				<h2 className="subtitle is-3">Fine Slow Food Cuisine</h2>				
			</header>
			<main className="section has-background-danger-dark">
				<div className="container has-background-danger-light">
					<div className="tabs is-large is-boxed is-centered">
						<ul>
							<li><a className="has-text-warning-dark">Home</a></li>
							<li><a className="has-text-warning-dark">Menu</a></li>
							<li><a className="has-text-warning-dark">Contact</a></li>
						</ul>
					</div>
				</div>
				<div className="section has-background-danger-light">
				</div>
			</main>
		</>
	);
}

export default App;
