import { formatDate } from "@/app/utils/date";
import useMemoryStore from "@/state/MemoryStore";
import React, { useState } from "react";
import MemoryDate, { DateType, MemoryDateType } from "../constant/MemoryDate";
import DropDownItem from "./DropDownItem";

const DateDropDown = () => {
	const { selectedDate, setSelectedDate } = useMemoryStore();
	const [showDropDown, setDropDownVisibility] = useState(false);

	const handleClickSelectedDate = () => {
		setDropDownVisibility(!showDropDown);
	};

	const handleClickDate = (date: MemoryDateType) => {
		setSelectedDate(date);
		setDropDownVisibility(false);
	};

	return <div className="dropdown">
		<div
			onClick={handleClickSelectedDate}
			className="neon-text accent dropdown-font pointer dropdown-button"
		>
			{selectedDate.date === DateType.All ? "전체" : formatDate(selectedDate.value)}{" "}
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
				showDropDown && MemoryDate.map((date, index) => {
					return <DropDownItem
						key={date.date}
						date={date}
						index={index}
						onClickDate={handleClickDate}
					/>;
				})
			}
		</div>
	</div>;
};

export default DateDropDown;