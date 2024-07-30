import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "@/app/Main";
import Memory from "./app/memory";
import Farewell from "./app/farewell";

const App = () => {
	return <Routes>
		<Route path="/" element={<Main />} />
		<Route path="/memory" element={<Memory />} />
		<Route path="/farewell" element={<Farewell />} />
	</Routes>;
};

export default App;