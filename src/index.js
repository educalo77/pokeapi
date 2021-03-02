import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./i18nextConf";

ReactDOM.render(
	<Suspense fallback="loading...">
		<React.StrictMode>
			<Provider store={store}>
				<Router>
					<App />
				</Router>
			</Provider>
		</React.StrictMode>
	</Suspense>,
	document.getElementById("root")
);
