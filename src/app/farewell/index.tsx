import useFarewellStore from "@/state/store";
import React from "react";
import First from "./steps/First";
import Second from "./steps/Second";

const getCurrentPageView = (currentPage: number) => {
	switch(currentPage) {
	case 0:
		return <First />;
	case 1:
		return <Second />;
	default: 
		return <First />;
	}
};

const Farewell = () => {
	const { currentPage, nextPage, previousPage } = useFarewellStore();
	const handleClickNext = () => {
		nextPage();
	};
	const handleClickPrevious = () => {
		previousPage();
	};

	return <div className="container column">
		{getCurrentPageView(currentPage)}

		<div className="row">
			<button onClick={handleClickPrevious}>prev</button>
			<button onClick={handleClickNext}>next</button>
		</div>
	</div>;
};

export default Farewell;