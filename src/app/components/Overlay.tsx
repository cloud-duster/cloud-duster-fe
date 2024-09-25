import React, { FC, PropsWithChildren } from "react";
import { createPortal } from "react-dom";

const Overlay: FC<PropsWithChildren> = ({ children }) => {
	const rootElement = document.getElementById("root");

	if (!rootElement) {
		return null;
	}

	return createPortal(<div className="overlay-layer">{children}</div>, rootElement);
};

export default Overlay;