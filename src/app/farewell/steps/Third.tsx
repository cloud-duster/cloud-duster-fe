import useFarewellStore from "@/state/FarewellStore";
import React, { ChangeEvent, useEffect, useMemo, useRef, useState } from "react";
import useValidateNextButton from "../hooks/useValidateNextButton";

const MAX_LENGTH = 300;

const Third = () => {
	const { file, farewell, nickName } = useFarewellStore();
	const [textCount, setTextCount] = useState(0);
	const imageSrc = useMemo(() => (file && URL.createObjectURL(file)) || "", [file]);

	const textAreaRef = useRef<HTMLTextAreaElement>(null);
	const nickNameRef = useRef<HTMLTextAreaElement>(null);

	const handleOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		setTextCount(e.target.value.length);
	};

	useEffect(() => {
		if (textAreaRef.current && farewell) {
			textAreaRef.current.value = farewell;
			setTextCount(farewell.length);
		}

		if (nickNameRef.current) {
			nickNameRef.current.value = nickName || "";
		}
	}, []);

	useValidateNextButton({ disableCondition: !textCount });

	return (
		<div className="third-wrapper">
			<div>
				<em className="accent">★˚⋱</em> 작별인사 쓰기 <em className="accent">⋰˚★</em>
			</div>
			<img
				className="goodbye"
				src={imageSrc}
			/>
			<div className="text-counter-wrap">
				<textarea
					ref={nickNameRef}
					className="goodbye nickname"
					id="nickname"
					placeholder="익명의 먼지털이"
				/>
				<textarea
					id="farewell"
					maxLength={MAX_LENGTH}
					className="goodbye"
					onChange={handleOnChange}
					ref={textAreaRef}
				/>
				<p className="text-counter">{textCount}/{MAX_LENGTH}</p>
			</div>
		</div>
	);
};

export default Third;
