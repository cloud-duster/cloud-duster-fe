import React, { FC } from "react";
import FarewellLocation from "../farewell/types/FarewellLocation";
import classNames from "classnames";

interface Props {
    location?: FarewellLocation;
}

const MemoryDetail: FC<Props> = ({ location = FarewellLocation.MOUNTAIN }) => {
	return <div className="detail-wrap column">
		<img
			className={classNames("detail-image", location.toLowerCase())}
			src="src/assets/judaeng.png"
		/>
		<div>이제는 유행이 지난 짤.. 잘가</div>
	</div>;
};

export default MemoryDetail;