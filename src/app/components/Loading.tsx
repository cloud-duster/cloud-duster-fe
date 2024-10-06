import useLoadingStore from "@/state/LoadingStore";
import React from "react";
import Overlay from "./Overlay";

const Loading = () => {
	const { visible } = useLoadingStore();

	if (!visible) {
		return null;
	}

	return <Overlay>
		<div className="spinner">
			<div className="loading-text" />
			<img src="/assets/cloud-pixel.svg" width="30px" height="30px" />
		</div>
	</Overlay>;
};

export default Loading;