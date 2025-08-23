import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { SummaryData } from "../api/SummaryAPI";
import { getMBQuota } from "../utils/quota";

interface Props {
	summary: SummaryData;
}

const DeletedAmount: FC<Props> = ({ summary }) => {
  const { t } = useTranslation();
  const { deletedPhotoCount, avgPhotoSize, peopleCount, totalPhotoSize } = summary;

  return (
    <div className="deleted-wrapper column">
      <div className="gradient" />
      <div 
        className="deleted-title-label"
        dangerouslySetInnerHTML={{ 
          __html: t('summary.deleted_amount.title')
        }}
      />
      <div className="deleted-quota-wrapper">
        <img 
          src="assets/cloud-logo.svg" 
          className="deleted-quota-image" 
          alt="cloud"
        />
        <p className="deleted-quota">{getMBQuota(totalPhotoSize)}MB</p>
        <div className="deleted-quota-label">
          {t('summary.deleted_amount.subtitle')}
        </div>
      </div>

      <div className="oval-wrapper column">
        <div className="oval first">
          <p 
            className="oval-text"
            dangerouslySetInnerHTML={{ 
              __html: t('summary.deleted_amount.photos_deleted', { 
                count: deletedPhotoCount,
                interpolation: { 
                  escapeValue: false,
                  prefix: '{{',
                  suffix: '}}'
                }
              }).replace('{{count}}', `<em class="accent-oval-text first">${deletedPhotoCount.toLocaleString()}</em>`)
            }}
          />
        </div>

        <div className="oval second">
          <p 
            className="oval-text"
            dangerouslySetInnerHTML={{ 
              __html: t('summary.deleted_amount.clouds_cleaned', { 
                count: peopleCount,
                interpolation: { 
                  escapeValue: false,
                  prefix: '{{',
                  suffix: '}}'
                }
              }).replace('{{count}}', `<em class="accent-oval-text second">${peopleCount.toLocaleString()}</em>`)
            }}
          />
        </div>

        <div className="oval third">
          <p 
            className="oval-text"
            dangerouslySetInnerHTML={{ 
              __html: t('summary.deleted_amount.avg_size', { 
                size: getMBQuota(avgPhotoSize),
                interpolation: { 
                  escapeValue: false,
                  prefix: '{{',
                  suffix: '}}'
                }
              }).replace('{{size}}', `<em class="accent-oval-text third">${getMBQuota(avgPhotoSize)}</em>`)
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default DeletedAmount;