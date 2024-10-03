import Overlay from "@/app/components/Overlay";
import React, { FC, PropsWithChildren, useRef } from "react";
import useOnClickOutside from "../../hooks/useOnClickOutside";

interface Props {
	onClickClose: () => void;
}

const Alert: FC<PropsWithChildren<Props>> = ({ onClickClose, children }) => {
	const ref = useRef<HTMLDivElement>(null);
	const handleClickClose = () => {
		onClickClose();
	};

	useOnClickOutside(ref, onClickClose);

	return <Overlay>
		<div className="alert column" ref={ref}>
			<button className="layer-close" onClick={handleClickClose}>X</button>
			{children}
		</div>
	</Overlay>;
};

export default Alert;