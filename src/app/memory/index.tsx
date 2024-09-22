import Pages from "@/routes";
import React from "react";
import "../../css/memory.css";
import BackButton from "./components/BackButton";
import DateDropDown from "./components/DateDropDown";
import Gallery from "./Gallery";
import Timer from "./Timer";

const Memory = () => {
	return <div className="memory_root">
		<BackButton to={Pages.Main} />
		<DateDropDown />
		<Timer />
		<Gallery />
	</div>;
};

export default Memory;