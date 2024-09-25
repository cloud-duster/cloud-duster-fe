import Overlay from "@/app/components/Overlay";
import React, { FC, useRef } from "react";
import useOnClickOutside from "../../hooks/useOnClickOutside";

interface Props {
    onClickClose: () => void;
}

const Alert: FC<Props> = ({ onClickClose }) => {
	const ref = useRef<HTMLDivElement>(null);
	const handleClickClose = () => {
		onClickClose();
	};

	useOnClickOutside(ref, onClickClose);

	return <Overlay>
		<div className="alert column" ref={ref}>
			<button className="layer-close" onClick={handleClickClose}>X</button>
			<p>
                삭제하기 아쉬운 사진에<br />
                작별을 고하는 공간입니다.<br />
                탄소절감량을 확인하며<br />
                사진을 의미있게 보내보세요.
			</p>
		</div>
	</Overlay>;
};

export default Alert;