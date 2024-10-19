import React, { FC } from "react";
import FarewellLogo from "./FarewellLogo";
import MemoryLogo from "./MemoryLogo";
import SummaryLogo from "./SummaryLogo";

interface Props {
	index: number;
}

const Logo: FC<Props> = ({ index }) => {
	switch (index) {
	case 0: return <FarewellLogo />;
	case 1: return <MemoryLogo />;
	case 2: return <SummaryLogo />;
	default: return null;
	}
};

export default Logo;