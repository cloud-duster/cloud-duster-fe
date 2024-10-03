import Pages from "@/routes";
import useFarewellStore from "@/state/FarewellStore";
import React, { useEffect } from "react";
import BackButton from "../memory/components/BackButton";
import Buttons from "./Buttons";
import Fifth from "./steps/Fifth";
import First from "./steps/First";
import Fourth from "./steps/Fourth";
import Second from "./steps/Second";
import Third from "./steps/Third";
import Page from "./types/Page";

const getCurrentPageView = (currentPage: number) => {
	switch (currentPage) {
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
		<BackButton to={Pages.Main} onClickBackButton={handlePopState} />
		<div className="container column">
			{getCurrentPageView(currentPage)}
		</div>
		<Buttons />
	</div>;
};

export default Farewell;