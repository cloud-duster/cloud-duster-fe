import Button from "@/components/Button";
import "@/css/summary.css";
import Pages from "@/routes";
import useLoadingStore from "@/state/LoadingStore";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getSummary, SummaryData } from "../api/SummaryAPI";
import DeletedAmount from "./DeletedAmount";
import ReducedCarbon from "./ReducedCarbon";

const Summary = () => {
	const { showLoading, hideLoading } = useLoadingStore();
	const [summary, setSummary] = useState<SummaryData>();
	const navigate = useNavigate();
	const handleClickToMain = () => {
		navigate(Pages.Main);
	};

	useEffect(() => {
		showLoading();
		const fetchSummary = async () => {
			const response = await getSummary();

			setSummary(response.data);
			hideLoading();
		};

		fetchSummary();
	}, []);

	if (!summary) {
		return null;
	}

	return <div className='summary-container column' style={{ overflow: "scroll" }}>
		<DeletedAmount summary={summary} />
		<ReducedCarbon summary={summary} />
		<Button onClick={handleClickToMain} className="summary-main-button">
			메인으로
		</Button>
	</div>;
};

export default Summary;