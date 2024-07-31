import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "@/app/Main";
import Memory from "./app/memory";
import Farewell from "./app/farewell";
import Pages from "./routes";

const App = () => {
	return <Routes>
		<Route path={Pages.Main} element={<Main />} />
		<Route path={Pages.Memory} element={<Memory />} />
		<Route path={Pages.Farewell} element={<Farewell />} />
	</Routes>;
};

export default App;