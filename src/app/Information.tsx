import React, { useState } from "react";
import Overlay from "./components/Overlay";

const Information = () => {
	const [show, setShow] = useState(false);
	const handleClick = () => {
		setShow(true);
	};

	return <>
		<img className="back-button" src="/assets/info.svg" onClick={handleClick} />
		{
			show && <Overlay>
				<div className="introduce-wrapper column">
					<button className="introduce-close-button" onClick={() => setShow(false)}>x</button>
					<div>구름털이 소개</div>
					<p className="introduce-detail">
						클라우드에 저장 되어있는 사진들 중 몇 개나 꺼내보시나요?
						쌓여가는 사진을 모아둔 클라우드는 추억 보관소가 아닌 무거운 잡동사니 상자가 됩니다.
						사진을 지우지 않는 이유는 언제 찾아볼 지 모른다는 노파심과 추억을 삭제하기 아쉬운 두 가지 마음이 겹쳐서 나타났을 것입니다.
						여기, 구름털이에서 클라우드에 켜켜히 쌓인 먼지를 털어내며 우리가 사진을 찍는 이유를 고민하고, 수많은 인생샷들이 남긴 부작용들을 갈무리하는 시간을 가져보세요.
					</p>

					<div className="introduce-margin">인스타그램</div>
					<p className="introduce-detail">
						<a href="https://www.instagram.com/gureum_teori/" target="_blank" rel="noreferrer">@gureum_teori</a>
					</p>

					<div className="introduce-margin">제작자</div>
					<p className="introduce-detail">
						<a href="https://github.com/forbid403" target="_blank" rel="noreferrer">도막 @forbid403</a>
						<br />
						<a href="https://github.com/mywnajsldkf" target="_blank" rel="noreferrer">정인 @mywnajsldkf</a>
					</p>
				</div>
			</Overlay >
		}
	</>;
};

export default Information;