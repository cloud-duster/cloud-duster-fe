import Button from "@/components/Button";
import useFarewellStore from "@/state/FarewellStore";
import React from "react";
import Page from "./types/Page";

const Buttons = () => {
	const { currentPage, nextPage, previousPage, isNextButtonDisabled, setFarewell } = useFarewellStore();
	const showPreviousButton = currentPage <= Page.Fourth && currentPage !== Page.First;
	const showNextButton = currentPage <= Page.Third;

	const saveFarewell = () => {
		const farewellDOM = document.getElementById("farewell") as HTMLTextAreaElement;

		if (farewellDOM) {
			setFarewell(farewellDOM.value);
		}
	};

	const handleClickNext = () => {
		if (currentPage === Page.Third) {
			saveFarewell();
		}
		nextPage();
	};
	const handleClickPrevious = () => {
		previousPage();
	};

	return <div className="row button-area">
		{showPreviousButton && <Button onClick={handleClickPrevious}>이전</Button>}
		{showNextButton && <Button onClick={handleClickNext} disabled={isNextButtonDisabled}>다음</Button>}
	</div>;
};
export default Buttons;