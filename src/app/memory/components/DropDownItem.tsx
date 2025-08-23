import { formatDate } from "@/app/utils/date";
import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { MemoryDateType } from "../constant/MemoryDate";

interface Props {
	date: MemoryDateType;
	onClickDate: (date: MemoryDateType) => void;
	index: number;
}

const DropDownItem: FC<Props> = ({ date, onClickDate, index }) => {
  const { t } = useTranslation();
  
  const handleClickDate = (date: MemoryDateType) => () => {
    onClickDate(date);
  };

  return (
    <a
      className="pointer"
      onClick={handleClickDate(date)}
    >
      {index === 0 ? t('memory.dropdown.all') : formatDate(date.value)}
    </a>
  );
};

export default DropDownItem;