import useMemoryStore from "@/state/MemoryStore";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
dayjs.extend(duration);

import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { dayAfter } from "../utils/date";

const Timer = () => {
  const { t } = useTranslation();
  const [timeLeft, setTimeLeft] = useState("");
  const [timeValues, setTimeValues] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const { selectedDate, memoryList } = useMemoryStore();
  const emptyList = !memoryList.length;

	useEffect(() => {
		const target = dayAfter(selectedDate.value, 3);

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

      setTimeValues({ days, hours, minutes, seconds });
      
      const timeString = [
        { value: days, unit: t('memory.timer.time_units.day') },
        { value: hours, unit: t('memory.timer.time_units.hour') },
        { value: minutes, unit: t('memory.timer.time_units.minute') },
        { value: seconds, unit: t('memory.timer.time_units.second') }
      ]
        .filter(item => item.value > 0)
        .map(item => `${item.value}${item.unit}`)
        .join(' ');

      setTimeLeft(timeString);
		};

		const intervalId = setInterval(updateCountdown, 1000);

		return () => clearInterval(intervalId);
	}, [selectedDate]);

	if (emptyList) {
		return null;
	}

  return (
    <p 
      className="timer-text"
      dangerouslySetInnerHTML={{
        __html: t('memory.timer.message', { time: timeLeft })
      }}
    />
  );
};

export default Timer;