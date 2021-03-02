import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import "./i18nextConf";

ReactDOM.render(
	<Suspense fallback="loading...">
		<React.StrictMode>
			<Router>
				<App />
			</Router>
		</React.StrictMode>
	</Suspense>,
	document.getElementById("root")
);
