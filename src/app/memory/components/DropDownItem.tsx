import { formatDate } from "@/app/utils/date";
import React, { FC } from "react";

interface Props {
    date: string;
    onClickDate: (date: string) => void;
}

const DropDownItem: FC<Props> = ({ date, onClickDate }) => {
	const handleClickDate = (date: string) => () => {
		onClickDate(date);
	};

	return <a
		className="pointer"
		key={date}
		onClick={handleClickDate(date)}
	>
		{formatDate(date).toString()}
	</a>;
};

export default DropDownItem;