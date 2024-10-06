import Pages from "@/routes";
import React from "react";
import { useNavigate } from "react-router-dom";

interface Props {
	to: Pages;
	onClickBackButton?: () => void;
}

const BackButton = ({ to, onClickBackButton }: Props) => {
	const navigate = useNavigate();
	const handleClickBack = () => {
		if (onClickBackButton) {
			onClickBackButton();
		}

		navigate(to);
	};

	return <button onClick={handleClickBack}>
		<img className="back-button" src="/assets/cloud.png" />
	</button>;

};

export default BackButton;