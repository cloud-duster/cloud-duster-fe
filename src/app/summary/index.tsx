import Button from "@/components/Button";
import "@/css/summary.css";
import Pages from "@/routes";
import React from "react";
import { useNavigate } from "react-router-dom";
import DeletedAmount from "./DeletedAmount";
import ReducedCarbon from "./ReducedCarbon";

const Summary = () => {
	const navigate = useNavigate();
	const handleClickToMain = () => {
		navigate(Pages.Main);
	};

	return <div className='summary-container column' style={{ overflow: "scroll" }}>
		<DeletedAmount />
		<ReducedCarbon />
		<Button onClick={handleClickToMain} className="summary-main-button">
			메인으로
		</Button>
	</div>;
};

export default Summary;