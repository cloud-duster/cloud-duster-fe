import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Overlay from "./components/Overlay";

const Information = () => {
  const { t } = useTranslation();
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(true);
  };

	return <>
		<img className="back-button" src="/assets/info.svg" onClick={handleClick} />
		{
			show && <Overlay>
				<div className="introduce-wrapper column">
					<button className="introduce-close-button" onClick={() => setShow(false)}>x</button>
					<div>{t('information.title')}</div>
					<p className="introduce-detail">
						{t('information.description')}
					</p>

					<div className="introduce-margin">{t('information.instagram')}</div>
					<p className="introduce-detail">
						<a href="https://www.instagram.com/gureum_teori/" target="_blank" rel="noreferrer">@gureum_teori</a>
					</p>

					<div className="introduce-margin">{t('information.creators')}</div>
					<p className="introduce-detail">
						<a href="https://github.com/forbid403" target="_blank" rel="noreferrer">{t('information.creator1')}</a>
						<br />
						<a href="https://github.com/mywnajsldkf" target="_blank" rel="noreferrer">{t('information.creator2')}</a>
					</p>
				</div>
			</Overlay >
		}
	</>;
};

export default Information;