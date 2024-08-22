import useFarewellStore from "@/state/store";
import React from "react";
import First from "./steps/First";
import Second from "./steps/Second";
import Third from "./steps/Third";
import Fourth from "./steps/Fourth";
import Fifth from "./steps/Fifth";
import Button from "@/components/Button";

const getCurrentPageView = (currentPage: number) => {
	switch(currentPage) {
	case 0:
		return <First />;
	case 1:
		return <Second />;
	case 2:
		return <Third />;
	case 3:
		return <Fourth />;	
	case 4:
		return <Fifth />;	
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

	return <div className="wrapper column">
		<div className="container column">
			{getCurrentPageView(currentPage)}
		</div>
		<div className="row button-area">
			<Button onClick={handleClickPrevious}>이전</Button>
			<Button onClick={handleClickNext}>다음</Button>
		</div>
	</div>;
};

export default Farewell;