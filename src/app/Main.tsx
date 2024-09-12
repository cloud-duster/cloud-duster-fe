import React, { useState } from "react";
import "@/css/index.css";
import { useNavigate } from "react-router-dom";
import Pages from "@/routes";
import classNames from "classnames";
import Logo from "./components/logo/Logo";

const pages = [{
	className: "farewell-wrap",
	href: Pages.Farewell,
	label: "보내주기"
},
{
	className: "memory-wrap",
	href: Pages.Memory,
	label: "추억하기"
}];

const Main = () => {
	const navigate = useNavigate();
	const [currentIndex, setCurrentIndex] = useState<number>(0);

	const handleLeftClick = () => {
		setCurrentIndex(Math.max(currentIndex - 1 , 0));
	};

	const handleRightClick = () => {
		setCurrentIndex(Math.min(currentIndex + 1 , pages.length));
	};

	const handleClickPage = (href: string) => () => {
		navigate(href);
	};

	const showLeftButton = currentIndex !== 0;
	const showRightButton = currentIndex !== pages.length - 1;

	return <div className="container">
		{
			showLeftButton && <button className="left-btn neon-text" onClick={handleLeftClick}>&lt;</button>
		}
		<div className="carousel-track-container">
			{
				pages.map(({ label, href, className}, index) => {
					return <div key={label} className={classNames("main-item column", className, {
						"hide": index !== currentIndex
					})}
					onClick={handleClickPage(href)}>
						<Logo index={index}/>
						<div className="neon-text accent pointer">
							{label}
						</div>
					</div>;
				})
			}
		</div>
		{
			showRightButton && <button className="right-btn neon-text" onClick={handleRightClick}>&gt;</button>
		}
	</div>;
};

export default Main;