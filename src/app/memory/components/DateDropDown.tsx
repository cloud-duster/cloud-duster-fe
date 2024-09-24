import { formatDate } from "@/app/utils/date";
import useMemoryStore from "@/state/MemoryStore";
import React, { useEffect, useState } from "react";
import DropDownItem from "./DropDownItem";

const DateDropDown = () => {
	// TODO: 날짜 API 필요
	const dates = ["1726837726000", "1726751299000"];
	const { selectedDate, setSelectedDate } = useMemoryStore();
	const [showDropDown, setDropDownVisibility] = useState(false);

	useEffect(() => {
		setSelectedDate(dates[0]);
	}, []);

	const handleClickSelectedDate = () => {
		setDropDownVisibility(!showDropDown);
	};

	const handleClickDate = (date: string) => {
		setSelectedDate(date);
		setDropDownVisibility(false);
	};

	return <div className="dropdown">
		<div
			onClick={handleClickSelectedDate}
			className="neon-text accent dropdown-font pointer dropdown-button"
		>
			{formatDate(selectedDate)}{" "}
			<button
				className="neon-text accent dropdown-font"
				style={{
					rotate: "90deg"
				}}
			>
				{">"}
			</button>
		</div>
		<div className="dropdown-items">
			{
				showDropDown && dates.map((date) => {
					return <DropDownItem
						key={date}
						date={date}
						onClickDate={handleClickDate}
					/>;
				})
			}
		</div>
	</div>;
};

export default DateDropDown;