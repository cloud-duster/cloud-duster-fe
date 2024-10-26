import Button from "@/components/Button";
import "@/css/summary.css";
import Pages from "@/routes";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getSummary, SummaryData } from "../api/SummaryAPI";
import DeletedAmount from "./DeletedAmount";
import ReducedCarbon from "./ReducedCarbon";

const Summary = () => {
	const [summary, setSummary] = useState<SummaryData>();
	const navigate = useNavigate();
	const handleClickToMain = () => {
		navigate(Pages.Main);
	};

	useEffect(() => {
		const fetchSummary = async () => {
			const response = await getSummary();

			setSummary(response.data);
		};

		fetchSummary();
	}, []);

	return <div className='summary-container column' style={{ overflow: "scroll" }}>
		<DeletedAmount summary={summary} />
		<ReducedCarbon />
		<Button onClick={handleClickToMain} className="summary-main-button">
			메인으로
		</Button>
	</div>;
};

export default Summary;