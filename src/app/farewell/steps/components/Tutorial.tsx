import Overlay from "@/app/components/Overlay";
import Button from "@/components/Button";
import React, { FC, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import useOnClickOutside from "../../hooks/useOnClickOutside";

interface Props {
    onClickClose: () => void;
}

const Tutorial: FC<Props> = ({ onClickClose }) => {
	const { t } = useTranslation();
	const [currentStep, setCurrentStep] = useState(0);
	const ref = useRef<HTMLDivElement>(null);
	useOnClickOutside(ref, onClickClose);

	const steps = t('tutorial.steps', { returnObjects: true }) as Array<{
		title: string;
		description?: string;
		buttonLabel: string;
	}>;

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
				<div 
				  className="tutorial-title" 
				  dangerouslySetInnerHTML={{ __html: steps[currentStep].title }}
				/>
				{steps[currentStep].description && (
				  <div 
				    className="tutorial-description" 
				    dangerouslySetInnerHTML={{ __html: steps[currentStep].description || '' }}
				  />
				)}
				<Button onClick={handleNext} className="tutorial-button">
					{steps[currentStep].buttonLabel}
				</Button>
			</div>
		</div>
	</Overlay>;
};

export default Tutorial;