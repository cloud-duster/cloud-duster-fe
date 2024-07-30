import React from "react";
import "@/css/index.css";
import { Link } from "react-router-dom";
import Pages from "@/routes";

const Main = () => {
	return <div className="container">
		<button className="left-btn">좌</button>
		<div className="carousel-track-container">
			<div className="main-item farewell-wrap">
				<Link to={Pages.Farewell}>보내주기</Link>
			</div>
			<div className="main-item memory-wrap">
				<Link to={Pages.Memory}>추억하기</Link>
			</div>
		</div>
		<button className="right-btn">우</button>
	</div>;
};

export default Main;