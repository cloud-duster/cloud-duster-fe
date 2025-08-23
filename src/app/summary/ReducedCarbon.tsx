import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { SummaryData } from "../api/SummaryAPI";
import { getMBQuota } from "../utils/quota";
import ReducedList from "./component/ReducedList";

interface Props {
	summary: SummaryData;
}

const ReducedCarbon: FC<Props> = ({ summary }) => {
  const { t } = useTranslation();
  const { totalPhotoSize } = summary;
  const reducedGB = getMBQuota(totalPhotoSize) / 1024;
  const reducedCarbon = reducedGB * 2;

  return (
    <div className="deleted-wrapper column">
      <div className="gradient"></div>
      <div 
        className="deleted-title-label"
        dangerouslySetInnerHTML={{ 
          __html: t('summary.reduced_carbon.title')
        }}
      />
      <div className="deleted-quota-wrapper">
        <img 
          src="assets/carbon-logo.svg" 
          className="deleted-quota-image" 
          alt="carbon"
        />
        <p className="deleted-quota">{reducedCarbon.toFixed(2)}KG</p>
      </div>
      <div 
        className="carbon-text"
        dangerouslySetInnerHTML={{ 
          __html: t('summary.reduced_carbon.carbon_footprint')
        }}
      />
      <ReducedList reducedCarbon={reducedCarbon} />
      <div 
        className="carbon-text-last"
        dangerouslySetInnerHTML={{ 
          __html: t('summary.reduced_carbon.saved')
        }}
      />
    </div>
  );
};

export default ReducedCarbon;