import React from "react";
import "@/css/index.css";

const Main = () => {
	return <div className="container">
		<button className="left-btn">좌</button>
		<div className="carousel-track-container">
			<div className="main-item farewell-wrap">
				<div>보내주기</div>
			</div>
			<div className="main-item memory-wrap">
				<div>추억하기</div>
			</div>
		</div>
		<button className="right-btn">우</button>
	</div>;
};

export default Main;