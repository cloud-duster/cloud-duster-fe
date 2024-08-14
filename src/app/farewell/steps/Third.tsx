import useFarewellStore from "@/state/store";
import React, { ChangeEvent, useState } from "react";

const MAX_LENGTH = 300;

const Third = () => {
	const { file } = useFarewellStore();
	const [textCount, setTextCount] = useState(0);

	const handleOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		setTextCount(e.target.value.length);
	};

	return <>
		<div>
			<em className="accent">★˚⋱</em> 작별인사 쓰기 <em className="accent">⋰˚★</em>
		</div>

		<img className="goodbye" src={file && URL.createObjectURL(file) || ""}/>
		<div className="text-counter-wrap">
			<textarea maxLength={MAX_LENGTH} className="goodbye" onChange={handleOnChange} />
			<p className="text-counter">{textCount}/{MAX_LENGTH}</p>
		</div>
        
	</>;
};

export default Third;