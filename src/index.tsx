import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Loading from "./app/components/Loading";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<BrowserRouter>
		<App />
		<Loading />
	</BrowserRouter>
);
