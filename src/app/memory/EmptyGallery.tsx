import Button from "@/components/Button";
import Pages from "@/routes";
import React from "react";
import { useTranslation, Trans } from "react-i18next";
import { useNavigate } from "react-router-dom";

const EmptyGallery = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
	const handleClickButton = () => {
		navigate(Pages.Farewell);
	};

	return <div className="empty-gallery-root column">
		<div className="empty-image-wrapper">
			<img src="/assets/cloud.webp" className="cloud center" />
			<div className="question-mark center">?</div>
		</div>
		<p 
        className="empty-desc" 
        dangerouslySetInnerHTML={{ __html: t('memory.empty_gallery.description') }}
      />

		<Button className="empty-gallery-button" onClick={handleClickButton}>
			{t('memory.empty_gallery.button')}
		</Button>
	</div>;
};

export default EmptyGallery;