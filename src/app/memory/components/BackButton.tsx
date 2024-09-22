import Pages from "@/routes";
import React from "react";
import { useNavigate } from "react-router-dom";

interface Props {
    to: Pages;
}

const BackButton = ({ to }: Props) => {
	const navigate = useNavigate();
	const handleClickBack = () => {
		navigate(to);
	};

	return <button onClick={handleClickBack}>
		<img className="back-button" src="src/assets/cloud.png" />
	</button>;

};

export default BackButton;