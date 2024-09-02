import useFarewellStore from "@/state/store";
import { useEffect } from "react";

interface Props {
    disableCondition: boolean;
    enableCondition?: boolean;
}

const useValidateNextButton = ({ disableCondition, enableCondition }: Props) => {
	const {disableNextButton, enableNextButton} = useFarewellStore();

	useEffect(() => {
		if (disableCondition) {
			disableNextButton();
		} 
		else if (enableCondition !== undefined) {
			if (enableCondition) {
				enableNextButton();
			}
		} 
		else {
			enableNextButton();
		}
	}, [enableCondition, disableCondition]);
};

export default useValidateNextButton;
