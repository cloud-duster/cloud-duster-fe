import Button from "@/components/Button";
import Pages from "@/routes";
import React from "react";
import { useNavigate } from "react-router-dom";

const EmptyGallery = () => {
	const navigate = useNavigate();
	const handleClickButton = () => {
		navigate(Pages.Farewell);
	};

	return <div className="empty-gallery-root column">
		<div className="empty-image-wrapper">
			<img src="/assets/cloud.webp" className="cloud center" />
			<div className="question-mark center">?</div>
		</div>
		<p className="empty-desc">아직 털어낸<br />클라우드가 없나봐요.</p>

		<Button className="empty-gallery-button" onClick={handleClickButton}>
			정리하러 가기
		</Button>
	</div>;
};

export default EmptyGallery;