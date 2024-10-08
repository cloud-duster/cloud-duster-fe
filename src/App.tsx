import Main from "@/app/Main";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Farewell from "./app/farewell";
import Memory from "./app/memory";
import MemoryDetail from "./app/memory/MemoryDetail";
import Pages from "./routes";

const App = () => {
	return <Routes>
		<Route path={Pages.Main} element={<Main />} />
		<Route path={Pages.Memory} element={<Memory />} />
		<Route path={Pages.Farewell} element={<Farewell />} />
		<Route path={`${Pages.MemoryDetail}/:id`} element={<MemoryDetail />} />
	</Routes>;
};

export default App;