import React from "react";

const MemoryLogo = () => {
	return <div className="logo-wrapper logo-wrapper-memory pointer column">
		<img className="logo-big" src="/assets/cloud.png" />
		<div className="black-dot-wrapper">
			<div className="black-dot" />
			<div className="black-dot" />
			<div className="black-dot" />
		</div>
		<img className="logo-small logo-first" src="/assets/cloud.png" />
		<img className="logo-small logo-second" src="/assets/cloud.png" />
	</div>;
};

export default MemoryLogo;