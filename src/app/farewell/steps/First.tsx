import useFarewellStore from "@/state/FarewellStore";
import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { useTranslation, Trans } from "react-i18next";
import useValidateNextButton from "../hooks/useValidateNextButton";
import Tutorial from "./components/Tutorial";

const First = () => {
  const { t } = useTranslation();
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
			setError(t('farewell.first.errors.not_number'));
		} else if (valueAsNumber < 10) {
			if (valueAsNumber <= 0) {
				setError(t('farewell.first.errors.zero_or_less'));
			} else {
				setError(t('farewell.first.errors.less_than_ten'));
			}

			setValue(value);
		} else {
			setError("");
			setValue(value);
			setDeletedCount(valueAsNumber);
		}
	};

	useValidateNextButton({ disableCondition: !!error || !value || parseInt(value) < 10 });
	useEffect(() => {
		if (deletedFileCount) {
			setValue(String(deletedFileCount));
		}
	}, [deletedFileCount]);

	return (
		<>
			{showLayer && <Tutorial onClickClose={() => { setShowLayer(false); }} />}
			<div 
			  style={{ lineHeight: "30px", paddingLeft: "24px", paddingRight: "24px" }}
			  dangerouslySetInnerHTML={{ __html: t('farewell.first.title') }}
			/>

			<div>
				<input
					type="text"
					className={classNames("deleted-photo-input", { "with-error": error })}
					onChange={handleChange}
					value={value}
				/>
				{t('farewell.first.input_suffix') && ` ${t('farewell.first.input_suffix')}`}
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
