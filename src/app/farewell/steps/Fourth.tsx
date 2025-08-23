import useFarewellStore from "@/state/FarewellStore";
import React from "react";
import { useTranslation, Trans } from "react-i18next";
import FarewellLocation from "../types/FarewellLocation";

const Fourth = () => {
  const { t } = useTranslation();
  const { setSelectedLocation, nextPage } = useFarewellStore();
	const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
		const value = event.currentTarget.dataset.value as FarewellLocation;

		setSelectedLocation(value);
		nextPage();
	};

	return <div className="location-wrapper">
		<div className="location-wrapper-label">
        <Trans i18nKey="farewell.fourth.title" components={{ br: <br /> }}>
          사진을 보내 줄 장소를<br />선택 해 주세요.
        </Trans>
      </div>

		<div className="location-image-wrapper">
			<div
				className="location-div"
				onClick={handleClick}
				data-value={FarewellLocation.SKY}
			>
				<img src="/assets/sky.webp" className="location-image" />
					<p className="location-text neon-text">{t('farewell.fourth.locations.sky')}</p>
			</div>
			<div
				className="location-div"
				onClick={handleClick}
				data-value={FarewellLocation.OCEAN}
			>
				<img src="/assets/ocean.webp" className="location-image" />
					<p className="location-text neon-text">{t('farewell.fourth.locations.ocean')}</p>
			</div>
			<div
				className="location-div"
				onClick={handleClick}
				data-value={FarewellLocation.MOUNTAIN}
			>
				<img src="/assets/mountain.webp" className="location-image" />
					<p className="location-text neon-text">{t('farewell.fourth.locations.mountain')}</p>
			</div>
		</div>
	</div>;
};

export default Fourth;