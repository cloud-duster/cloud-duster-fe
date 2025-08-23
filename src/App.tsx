import Main from "@/app/Main";
import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import Farewell from "./app/farewell";
import Memory from "./app/memory";
import MemoryDetail from "./app/memory/MemoryDetail";
import Summary from "./app/summary";
import Pages from "./routes";
import LanguageSelector from "./components/LanguageSelector";

const App = () => {
  const { t } = useTranslation();
  
  const setScreenSize = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  };

  useEffect(() => {
    setScreenSize();
    window.addEventListener('resize', setScreenSize);
    return () => window.removeEventListener('resize', setScreenSize);
  }, []);

	return <Routes>
		<Route path={Pages.Main} element={<Main />} />
		<Route path={Pages.Memory} element={<Memory />} />
		<Route path={Pages.Farewell} element={<Farewell />} />
		<Route path={`${Pages.MemoryDetail}/:id`} element={<MemoryDetail />} />
		<Route path={Pages.Summary} element={<Summary />} />
	</Routes>;
};

export default App;