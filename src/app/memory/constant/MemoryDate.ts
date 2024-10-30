import dayjs from "dayjs";

export interface MemoryDateType {
    date: DateType;
    value: string;
}

export enum DateType {
    All = "All",
    Today = "TODAY",
    Yesterday = "YESTERDAY",
    DayBeforeYesterday = "DBY",
}

const MemoryDate: Array<MemoryDateType> = [
	{
		date: DateType.All,
		value: dayjs().valueOf().toString(),
	},
	{
		date: DateType.Today,
		value: dayjs().valueOf().toString(),
	},
	{
		date: DateType.Yesterday,
		value: dayjs().subtract(1, "day").valueOf().toString(),
	},
	{
		date: DateType.DayBeforeYesterday,
		value: dayjs().subtract(2, "day").valueOf().toString(),
	}
];


export default MemoryDate;