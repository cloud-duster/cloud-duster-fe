import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(customParseFormat);

export const formatDate = (date: string) => {
	return dayjs(parseInt(date)).format("YYYY. M. DD");
};

export const dayAfter = (current: string, day: number) => {
	return dayjs(parseInt(current)).add(day, "day");
};