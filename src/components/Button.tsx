import classNames from "classnames";
import React, { FC, PropsWithChildren } from "react";

interface Props {
    className?: string;
    onClick?: () => void;
    disabled?: boolean;
}

const Button: FC<PropsWithChildren<Props>> = ({ children, onClick, className, disabled = false }) => {
	const handleClickButton = () => {
		if (onClick) {
			onClick();
		}
	};

	return <button 
		onClick={handleClickButton} 
		className={classNames(className, "pixel-button", {
			disabled
		})}
		disabled={disabled}
	>
		{children}
	</button>;
};

export default Button;