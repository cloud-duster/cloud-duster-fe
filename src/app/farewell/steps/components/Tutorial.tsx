import Overlay from "@/app/components/Overlay";
import Button from "@/components/Button";
import React, { FC, useRef, useState } from "react";
import useOnClickOutside from "../../hooks/useOnClickOutside";

const steps = [
	{
		title: <>사용 중인 클라우드에서<br />사진/동영상을 <em className="accent">10장</em> 이상 지워주세요.</>,
		buttonLabel: "삭제완료!"
	},
	{
		title: <>기억하고 싶은 사진<br /> 1장을 <em className="accent">캡쳐</em> 후,<br />휴지통을 비워주세요.</>,
		buttonLabel: "비웠어요"
	},
	{
		title: <>구름털이에 지운 사진을 <em className="accent">공유</em>해 보세요.</>,
		description: <>공유된 사진은 3일 후<br />임시 클라우드에서 삭제됩니다.</>,
		buttonLabel: "야호!"
	}
];

interface Props {
    onClickClose: () => void;
}

const Tutorial: FC<Props> = ({ onClickClose }) => {
	const [currentStep, setCurrentStep] = useState(0);
	const ref = useRef<HTMLDivElement>(null);
	useOnClickOutside(ref, onClickClose);

	const handleNext = () => {
		if (currentStep < steps.length - 1) {
			setCurrentStep((prev) => prev + 1);
		} else {
			onClickClose();
		}
	};

	return <Overlay>
		<div className="alert column" style={{ height: "auto" }}>
			<div className="tutorial-content">
				<div className="tutorial-progress">
					{steps.map((_, index) => (
						<div
							key={index}
							className={`progress-dot ${index === currentStep ? "active" : ""}`}
						></div>
					))}
				</div>
				<p className="tutorial-title">{steps[currentStep].title}</p>
				<p className="tutorial-description">{steps[currentStep].description}</p>
				<Button onClick={handleNext} className="tutorial-button">
					{steps[currentStep].buttonLabel}
				</Button>
			</div>
		</div>
	</Overlay>;
};

export default Tutorial;