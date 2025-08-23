import { createMemory } from "@/app/api/FarewellAPI";
import { getFixedLocaleString, getMBQuota } from "@/app/utils/quota";
import Button from "@/components/Button";
import "@/css/animation.css";
import Pages from "@/routes";
import useFarewellStore from "@/state/FarewellStore";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
import Alert from "./components/Alert";
import { useTranslation } from "react-i18next";

const Fifth = () => {
	const { t } = useTranslation();
	const { deletedFileCount, resetStore, file, nickName, selectedLocation, farewell } = useFarewellStore();
	const [isLoading, setLoading] = useState(true);
	const [hasError, setError] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");
	const navigate = useNavigate();
	const fileSize = file?.size || 1;
	const deletedQuota = deletedFileCount * fileSize;
	const deletedQuotaInMB = getMBQuota(deletedQuota);
	const deletedQuotaInGB = deletedQuotaInMB / 1024;

	useEffect(() => {
		const saveMemory = async () => {
			if (!file) {
				return;
			}

			try {
				const response = await createMemory({
					image: file,
					nickname: nickName,
					location: selectedLocation,
					message: farewell,
					amount: deletedFileCount
				});

				if (response) {
					setLoading(false);
				}
			} catch (error) {
				setLoading(false);
				setError(true);
			}
		};

		saveMemory();
	}, [file]);

	const handleClickMain = () => {
		navigate(Pages.Main);
		resetStore();
	};

	const handleClickToSummary = () => {
		navigate(Pages.Summary);
		resetStore();
	};


	if (isLoading) {
		return <Loading />;
	}

	if (hasError) {
		return <Alert onClickClose={handleClickMain}>
			<p>{t('error_image_upload_1')}<br />{t('error_image_upload_2')}</p>
		</Alert>;
	}

	return (
		<>
			<div>
				<img src="assets/cloud.webp" className="cloud" />
				<div className="confetti" /><div className="confetti" /><div className="confetti" />
				<div className="confetti" /><div className="confetti" /><div className="confetti" />
				<div className="confetti" />
			</div>
			<div className={
				`deleted-quota-info
                ${isLoading ? "fade-out" : "fade-in"}`
			}>
				<p className="deleted-quota-text">
					<em className="accent">
						{t('farewell.deleted_quota', { size: getFixedLocaleString(deletedQuotaInMB, 1) })}
					</em>
				</p>
				<p className="shade">
					{t('farewell.savings_description', {
						size: getFixedLocaleString(deletedQuotaInMB),
						water: getFixedLocaleString(deletedQuotaInGB * 1000),
						paper: getFixedLocaleString(deletedQuotaInGB * 80)
					})}
				</p>
				<Button className="to-main" onClick={handleClickToSummary}>
					{t('farewell.view_savings')}
				</Button>
			</div>
		</>
	);
};

export default Fifth;
