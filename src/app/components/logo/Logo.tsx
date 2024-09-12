import React, { FC } from "react";
import FarewellLogo from "./FarewellLogo";
import MemoryLogo from "./MemoryLogo";

interface Props {
    index: number;
}

const Logo: FC<Props> = ({index}) => {
	switch (index) {
	case 0: return <FarewellLogo />;
	case 1: return <MemoryLogo />;
	default: return null;
	}
};

export default Logo;