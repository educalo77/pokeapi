import React from "react";
import { Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./pages/Home";
import PokeDetail from "./pages/PokeDetail";


function App() {
	return (
		<React.Fragment>
			<Navbar />
			<Route exact path="/" component={Home} />
			<Route exact path="/pokemon/:name?" component={PokeDetail} />
			{/* <Footer /> */}
		</React.Fragment>
	);
}

export default App;
