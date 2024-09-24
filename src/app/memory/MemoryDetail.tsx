import Pages from "@/routes";
import classNames from "classnames";
import React, { FC } from "react";
import FarewellLocation from "../farewell/types/FarewellLocation";
import BackButton from "./components/BackButton";

interface Props {
	location?: FarewellLocation;
}

const MemoryDetail: FC<Props> = ({ location = FarewellLocation.MOUNTAIN }) => {
	return <>
		<BackButton to={Pages.Memory} />
		<div className="detail-wrap">
			<div className="detail-image-wrap">
				<img
					className={classNames("detail-image", location.toLowerCase())}
					src="src/assets/judaeng.png"
				/>
				<div className="detail-nickname">익명의 먼지1</div>
			</div>
			<p className="detail-content">
				이제는 유행이 지난 짤.. 잘가이제는 유행이 지난 짤.. 잘가이제는 유행이 지난 짤.. 잘가이제는 유행이 지난 짤.. 잘가이제는 유행이 지난 짤.. 잘가
			</p>
		</div >
	</>;
};

export default MemoryDetail;