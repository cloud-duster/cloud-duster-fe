const getMBQuota = (bytes: number) => {
	const gb = bytes / (1024 * 1024);
	return parseFloat(gb.toFixed(2));
};

const getFixedValue = (value: number, fixed: number = 0) => {
	return value.toFixed(fixed);
};


export { getFixedValue, getMBQuota };
