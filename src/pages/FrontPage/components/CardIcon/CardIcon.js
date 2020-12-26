import React from "react";
import styled from "styled-components";
import { DOCTOR_ICON } from "../../../../constants";
import { HOSPITAL_ICON } from "../../../../constants";
import { FLU_SHUTS_ICON } from "../../../../constants";
import { GENERAL_PRACTICE_ICON } from "../../../../constants";
import { TRAVEL_SHUTS_ICON } from "../../../../constants";
import { MENTAL_HEALTH_ICON } from "../../../../constants";
import { PHARMACY_ICON } from "../../../../constants";
import { OPTOMETRY_ICON } from "../../../../constants";

const Layout = styled.div`
  height: 100px;
  width: 100px;
  background-color: rgba(174, 204, 84, 0.4);
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ICONS = [
  {
    key: "hospital",
    icon: HOSPITAL_ICON,
  },
  {
    key: "doctor",
    icon: DOCTOR_ICON,
  },
  {
    key: "flu_shuts",
    icon: FLU_SHUTS_ICON,
  },
  {
    key: "general_practice",
    icon: GENERAL_PRACTICE_ICON,
  },
  {
    key: "travel_shuts",
    icon: TRAVEL_SHUTS_ICON,
  },
  {
    key: "mental_health",
    icon: MENTAL_HEALTH_ICON,
  },
  {
    key: "pharmacy",
    icon: PHARMACY_ICON,
  },
  {
    key: "optometry",
    icon: OPTOMETRY_ICON,
  },
];

const CardIcon = ({ icon, icon_width }) => {
  return (
    <Layout>
      {ICONS.map((i) => {
        if (i.key === icon)
          return (
            <img
              key={i.key}
              src={i.icon}
              width={icon_width}
              height={icon_width}
              alt=""
            />
          );
        return undefined;
      })}
    </Layout>
  );
};

export default CardIcon;
