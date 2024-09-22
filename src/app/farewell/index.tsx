import useFarewellStore from "@/state/FarewellStore";
import React, { useEffect } from "react";
import First from "./steps/First";
import Second from "./steps/Second";
import Third from "./steps/Third";
import Fourth from "./steps/Fourth";
import Fifth from "./steps/Fifth";
import Buttons from "./Buttons";
import Page from "./types/Page";

const getCurrentPageView = (currentPage: number) => {
	switch(currentPage) {
	case Page.First:
		return <First />;
	case Page.Second:
		return <Second />;
	case Page.Third:
		return <Third />;
	case Page.Fourth:
		return <Fourth />;	
	case Page.Fifth:
		return <Fifth />;	
	default: 
		return <First />;
	}
};

const Farewell = () => {
	const { currentPage, resetStore } = useFarewellStore();

	const handlePopState = () => {
		resetStore();
	};
	
	useEffect(() => {
		window.addEventListener("popstate", handlePopState);
		return () => {
			window.removeEventListener("popstate", handlePopState);
		};	  
	}, []);

	return <div className="wrapper column">
		<div className="container column">
			{getCurrentPageView(currentPage)}
		</div>
		<Buttons />
	</div>;
};

export default Farewell;