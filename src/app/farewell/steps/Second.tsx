import useFarewellStore from "@/state/FarewellStore";
import classNames from "classnames";
import React, { ChangeEvent, useEffect, useRef } from "react";
import useValidateNextButton from "../hooks/useValidateNextButton";


const Second = () => {
	const { saveFile, file } = useFarewellStore();
	const floatingImageRef = useRef<HTMLImageElement>(null);
	const isHeic = (selectedFile: File) => {
		return selectedFile.type === "image/heic" || selectedFile.type === "image/heif" || selectedFile.name.toLowerCase().endsWith(".heic") ||
			selectedFile.name.toLowerCase().endsWith(".heif");
	};

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const selectedFile = e.target.files?.[0] || null;

		if (selectedFile) {
			if (isHeic(selectedFile)) {
				alert("캡쳐된 사진으로 올려주세요!");
				return;
			} else if (selectedFile.size >= 2097152) {
				alert("용량이 너무 큰데요? 원본이 아닌 캡쳐된 사진으로 올려주세요!");
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
		<div style={{ lineHeight: "30px" }}>
			구름을 눌러 <br />
			보내줄 사진을 <br /><em className="accent">선택</em> 해 주세요!
		</div>

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