import useMemoryStore from "@/state/MemoryStore";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
dayjs.extend(duration);

import React, { useEffect, useState } from "react";
import { dayAfter } from "../utils/date";

const Timer = () => {
	const [timeLeft, setTimeLeft] = useState("");
	const { selectedDate } = useMemoryStore();

	useEffect(() => {
		const target = dayAfter(selectedDate, 2);

		if (!target.isValid()) {
			return;
		}

		const updateCountdown = () => {
			const now = dayjs();
			const diffTime = target.diff(now);
			const remainingTime = dayjs.duration(diffTime);

			const days = remainingTime.days();
			const hours = remainingTime.hours();
			const minutes = remainingTime.minutes();
			const seconds = remainingTime.seconds();

			setTimeLeft(`${days}일 ${hours}시간 ${minutes}분 ${seconds}초`);
		};

		const intervalId = setInterval(updateCountdown, 1000);

		return () => clearInterval(intervalId);
	}, [selectedDate]);


	return <p className="timer-text">
		{timeLeft} 후,
		<br />
		지구가 좀 더 가벼워져요.
	</p>;

};

export default Timer;