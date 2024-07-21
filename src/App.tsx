import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "@/app/Main";

const App = () => {
	return <Routes>
		<Route path="/" element={<Main />} />
	</Routes>;
};

export default App;