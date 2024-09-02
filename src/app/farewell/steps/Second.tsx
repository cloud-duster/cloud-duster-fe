import useFarewellStore from "@/state/store";
import React, { ChangeEvent, useEffect, useRef } from "react";
import classNames from "classnames";
import useValidateNextButton from "../hooks/useValidateNextButton";


const Second = () => {
	const { saveFile, file } = useFarewellStore();
	const floatingImageRef = useRef<HTMLImageElement>(null);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const selectedFile = e.target.files?.[0] || null;
		
		if (selectedFile) {
			saveFile(selectedFile);

			if (floatingImageRef.current){
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
		<div>
			구름을 눌러 <br/>
			보내줄 사진을 <em className="accent">선택</em> 해 주세요!
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
				<img
					className="cloud upload"
					src="src/assets/cloud.png"
					alt="Upload"
				/>
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