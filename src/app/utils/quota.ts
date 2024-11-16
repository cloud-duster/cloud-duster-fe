const formatToMB = (bytes: number) => {
	const gb = bytes / (1024 * 1024);
	return `${gb.toFixed(2)}MB`;
};

export default formatToMB;