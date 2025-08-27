const getMBQuota = (bytes: number) => {
	const mb = bytes / (1024 * 1024);
	return parseFloat(mb.toFixed(2)) || 0;
};


const getFixedLocaleString = (value: number, fixed: number = 1) => {
	return value.toLocaleString("en-US", { maximumSignificantDigits: fixed });
};

export { getFixedLocaleString, getMBQuota };
