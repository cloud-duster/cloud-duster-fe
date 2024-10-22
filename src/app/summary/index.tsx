import "@/css/summary.css";
import React from "react";
import DeletedAmount from "./DeletedAmount";
import ReducedCarbon from "./ReducedCarbon";

const Summary = () => {
	return <div className='container column' style={{ overflow: "scroll" }}>
		<DeletedAmount />
		<ReducedCarbon />
	</div>;
};

export default Summary;