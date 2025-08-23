import useFarewellStore from "@/state/FarewellStore";
import classNames from "classnames";
import React, { ChangeEvent, useEffect, useRef } from "react";
import { useTranslation, Trans } from "react-i18next";
import useValidateNextButton from "../hooks/useValidateNextButton";


const Second = () => {
  const { t } = useTranslation();
  const { saveFile, file } = useFarewellStore();
	const floatingImageRef = useRef<HTMLImageElement>(null);
	const isHeic = (selectedFile: File) => {
		return selectedFile.type === "image/heic" || selectedFile.type === "image/heif" || selectedFile.name.toLowerCase().endsWith(".heic") ||
			selectedFile.name.toLowerCase().endsWith(".heif");
	};

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const selectedFile = e.target.files?.[0] || null;

		if (selectedFile) {
			console.log(selectedFile.size);
			if (isHeic(selectedFile)) {
				alert(t('farewell.second.alerts.heic_warning'));
				return;
			} else if (selectedFile.size >= 20000000) {
				alert(t('farewell.second.alerts.file_too_large'));
				return;
			}

			saveFile(selectedFile);

			if (floatingImageRef.current) {
				floatingImageRef.current.src = URL.createObjectURL(selectedFile);
			}
		}
	};

	useValidateNextButton({ disableCondition: !file });

	useEffect(() => {
		if (file && floatingImageRef.current) {
			floatingImageRef.current.src = URL.createObjectURL(file);
		}
	}, [file, floatingImageRef]);

	return <>
		<div 
		  style={{ lineHeight: "30px" }}
		  dangerouslySetInnerHTML={{ __html: t('farewell.second.title') }}
		/>

		<div>
			<img
				ref={floatingImageRef}
				className={classNames({
					floating: file
				})}
				id="floating_image"
			/>
			<label htmlFor="file">
				<img src="/assets/cloud.webp" className="cloud upload" />
			</label>
			<input
				accept="image/*"
				style={{
					display: "none"
				}}
				type="file"
				id="file"
				name="file"
				onChange={handleChange} />
		</div>
	</>;
};

export default Second;