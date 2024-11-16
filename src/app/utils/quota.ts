const getMBQuota = (bytes: number) => {
	const mb = bytes / (1024 * 1024);
	return parseFloat(mb.toFixed(2));
};

const getFixedValue = (value: number, fixed: number = 0) => {
	return value.toFixed(fixed);
};


export { getFixedValue, getMBQuota };
