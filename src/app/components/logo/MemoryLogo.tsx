import React from "react";

const MemoryLogo = () => {
	return <div className="logo-wrapper logo-wrapper-memory pointer column">
		<img src="/assets/cloud.webp" className="logo-big" loading="lazy" />
		<div className="black-dot-wrapper">
			<div className="black-dot" />
			<div className="black-dot" />
			<div className="black-dot" />
		</div>
		<img src="/assets/cloud.webp" className="logo-small logo-first" loading="lazy" />
		<img src="/assets/cloud.webp" className="logo-small logo-second" loading="lazy" />
	</div>;
};

export default MemoryLogo;