import { getFixedLocaleString } from "@/app/utils/quota";
import React, { FC } from "react";
import { useTranslation } from "react-i18next";

interface Props {
	reducedCarbon: number;
}

const FIXED = 3;

const ReducedList: FC<Props> = ({ reducedCarbon }) => {
  const { t } = useTranslation();
  
  const items = [
    { 
      image: "/assets/car.webp",
      key: "car_km",
      value: 80 * reducedCarbon
    },
    { 
      image: "/assets/smartphone.webp",
      key: "smartphone_charges",
      value: 250 * reducedCarbon
    },
    { 
      image: "/assets/computer.webp",
      key: "laptop_hours",
      value: 30 * reducedCarbon
    },
    { 
      image: "/assets/pet.webp",
      key: "plastic_bottles",
      value: 15 * reducedCarbon
    },
    { 
      image: "/assets/paper.webp",
      key: "a4_paper",
      value: 80 * reducedCarbon
    },
    { 
      image: "/assets/water.webp",
      key: "water_liters",
      value: 1000 * reducedCarbon
    }
  ];

  return (
    <div className="grid-container">
      {items.map((item, index) => (
        <div key={index} className="grid-item-wrapper">
          <div className="grid-item">
            <img src={item.image} className="grid-image" alt="" />
          </div>
          <div 
            className="label" 
            dangerouslySetInnerHTML={{ 
              __html: t(`summary.${item.key}`, { 
                value: getFixedLocaleString(item.value, FIXED) 
              })
            }} 
          />
        </div>
      ))}
    </div>
  );
};

export default ReducedList;