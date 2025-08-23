import Button from "@/components/Button";
import useFarewellStore from "@/state/FarewellStore";
import React from "react";
import { useTranslation } from "react-i18next";
import Page from "./types/Page";

const Buttons = () => {
  const { t } = useTranslation();
  const { currentPage, nextPage, previousPage, isNextButtonDisabled, setFarewell, setNickName } = useFarewellStore();
	const showPreviousButton = currentPage <= Page.Fourth && currentPage !== Page.First;
	const showNextButton = currentPage <= Page.Third;

	const saveFarewell = () => {
		const farewellDOM = document.getElementById("farewell") as HTMLTextAreaElement;
		const nickNameDOM = document.getElementById("nickname") as HTMLTextAreaElement;

		if (farewellDOM && nickNameDOM) {
			setFarewell(farewellDOM.value);
			setNickName(nickNameDOM.value);
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

  return (
    <div className="row button-area">
      {showPreviousButton && (
        <Button onClick={handleClickPrevious}>
          {t('buttons.previous')}
        </Button>
      )}
      {showNextButton && (
        <Button 
          onClick={handleClickNext} 
          disabled={isNextButtonDisabled}
        >
          {t('buttons.next')}
        </Button>
      )}
    </div>
  );
};
export default Buttons;