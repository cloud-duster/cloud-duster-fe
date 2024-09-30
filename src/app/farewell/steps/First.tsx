import useFarewellStore from "@/state/FarewellStore";
import classNames from "classnames";
import React, { useEffect, useState } from "react";
import useValidateNextButton from "../hooks/useValidateNextButton";
import Alert from "./components/Alert";

const First = () => {
	const [value, setValue] = useState("");
	const [showLayer, setShowLayer] = useState(true);
	const [error, setError] = useState("");
	const { deletedFileCount, setDeletedCount } = useFarewellStore();

	const isNumber = (target: string) => {
		return /^\d*$/.test(target);
	};

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		const valueAsNumber = parseInt(value);

		if (value && (isNaN(valueAsNumber) || !isNumber(value))) {
			setError("숫자만 입력 해 주세요.");
		} else if (valueAsNumber <= 0) {
			setError("0보다 큰 수를 입력 해 주세요.");
		} else if (valueAsNumber < 10) {
			setError("10장 이상의 사진을 지워주세요.");
		} else {
			setError("");
			setValue(value);
			setDeletedCount(valueAsNumber);
		}
	};

	useValidateNextButton({ disableCondition: !!error || !value });
	useEffect(() => {
		if (deletedFileCount) {
			setValue(String(deletedFileCount));
		}
	}, [deletedFileCount]);

	return (
		<>
			{showLayer && <Alert onClickClose={() => { setShowLayer(false); }} />}
			<div>
				사진/동영상을 <em className="accent">몇 장</em>
				<br /> 보내주셨나요?
			</div>

			<div>
				<input
					type="text"
					className={classNames("deleted-photo-input", { "with-error": error })}
					onChange={handleChange}
					value={value}
				/>{" "}장
				<p
					className="error"
					style={error ? undefined : { visibility: "hidden" }}
				>
					{error || "error"}
				</p>
			</div>
		</>
	);
};

export default First;
