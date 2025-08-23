import "@/css/index.css";
import Pages from "@/routes";
import classNames from "classnames";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Logo from "./components/logo/Logo";
import Information from "./Information";
import LanguageSelector from "@/components/LanguageSelector";

const pages = [
  {
    className: "farewell-wrap",
    href: Pages.Farewell,
    labelKey: "farewell"
  },
  {
    className: "memory-wrap",
    href: Pages.Memory,
    labelKey: "memory"
  },
  {
    className: "summary-wrap",
    href: Pages.Summary,
    labelKey: "summary"
  }
];

const Main = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState<number>(0);

	const handleLeftClick = () => {
		setCurrentIndex(Math.max(currentIndex - 1, 0));
	};

	const handleRightClick = () => {
		setCurrentIndex(Math.min(currentIndex + 1, pages.length - 1));
	};

	const handleClickPage = (href: string) => () => {
		navigate(href);
	};

	const showLeftButton = currentIndex !== 0;
	const showRightButton = currentIndex !== pages.length - 1;

	return  <>
  <div>
    <Information />
    <LanguageSelector />
  </div>
  <div className="container">
		{
			showLeftButton && <button className="left-btn neon-text" onClick={handleLeftClick}>&lt;</button>
		}
		<div className="carousel-track-container">
			{
				pages.map(({ labelKey, href, className }, index) => (
				  <div 
            key={labelKey} 
            className={classNames("main-item column", className, {
              "hide": index !== currentIndex
            })}
            onClick={handleClickPage(href)}
          >
            <Logo index={index} />
            <div className="neon-text accent pointer">
              {t(`navigation.${labelKey}`)}
            </div>
          </div>
				))
			}
		</div>
		{
			showRightButton && <button className="right-btn neon-text" onClick={handleRightClick}>&gt;</button>
		}
	</div>
  </>
};

export default Main;