import background from "./assets/images/background.png";
import footBackground from "./assets/images/footer-background.jpg";
import logo from "./assets/images/logo.png";
import hospital_icon from "./assets/images/hospital.png";
import doctor_icon from "./assets/images/doctor.png";
import flu_shuts_icon from "./assets/images/vaccine.svg";
import general_practice_icon from "./assets/images/stethoscope.svg";
import travel_shuts_icon from "./assets/images/travel.svg";
import mental_health_icon from "./assets/images/mental-health.svg";
import pharmacy_icon from "./assets/images/medicine.svg";
import optometry_icon from "./assets/images/glasses.svg";
import avatar_icon from "./assets/images/avatar.png";
import jumbotron_pic from "./assets/images/homepage_jumbotron.jpg";
import data_ads_pic from "./assets/images/DataAdsPic.jpg";
import hospital_reg_icon from "./assets/images/hospital-regular.svg";
import medical_icon from "./assets/images/briefcase-medical-solid.svg";
import smile_icon from "./assets/images/smile-beam-regular.svg";
import bed_icon from "./assets/images/medical-bed.svg";
import support_icon from "./assets/images/support.svg";
import experience_icon from "./assets/images/experience.svg";
import doc1_pic from "./assets/images/gallary_doctor1.jpg";
import doc2_pic from "./assets/images/gallary_doctor2.jpg";
import doc3_pic from "./assets/images/gallary_doctor3.jpg";
import doc4_pic from "./assets/images/gallary_doctor4.png";
import doc5_pic from "./assets/images/gallary_doctor5.jpg";
import user_avatar1 from "./assets/images/user_avatar1.svg";
import user_avatar2 from "./assets/images/user_avatar2.svg";
import quote_icon from "./assets/images/quote.svg";

export const THEME_COLOR = "#008fb4";
export const NAVIGATION_GAP = "80px";
export const HOME_BACKGROUND = background;
export const FOOT_BACKGROUND = footBackground;
export const LOGO = logo;
export const HOSPITAL_ICON = hospital_icon;
export const DOCTOR_ICON = doctor_icon;
export const FLU_SHUTS_ICON = flu_shuts_icon;
export const GENERAL_PRACTICE_ICON = general_practice_icon;
export const TRAVEL_SHUTS_ICON = travel_shuts_icon;
export const MENTAL_HEALTH_ICON = mental_health_icon;
export const PHARMACY_ICON = pharmacy_icon;
export const OPTOMETRY_ICON = optometry_icon;
export const AVATAR_ICON = avatar_icon;
export const MOBILE_WIDTH = "1000px";
export const JUMBOTRON_PIC = jumbotron_pic;
export const DATA_ADS_PIC = data_ads_pic;
export const HOSPITAL_REG_ICON = hospital_reg_icon;
export const MEDICAL_ICON = medical_icon;
export const SMILE_ICON = smile_icon;
export const BED_ICON = bed_icon;
export const EXPERIENCE_ICON = experience_icon;
export const SUPPORT_ICON = support_icon;
export const DOC1_PIC = doc1_pic;
export const DOC2_PIC = doc2_pic;
export const DOC3_PIC = doc3_pic;
export const DOC4_PIC = doc4_pic;
export const DOC5_PIC = doc5_pic;
export const SMALL_BREAKPOINT = "767px";
export const USER_AVATAR1 = user_avatar1;
export const USER_AVATAR2 = user_avatar2;
export const QUOTE_ICON = quote_icon;
export const APPOINTMENT_DURATION = 15;

export const TIMES = (startHour, endHour) => {
  let times = [];
  for (let h = startHour; h !== endHour; ++h)
    for (let m = 0; m !== 60; m += 15)
      times.push({
        hour: h < 10 ? "0" + h : h.toString(),
        minute: m < 10 ? "0" + m : m.toString(),
        key: h + ":" + m,
      });
  return times;
};
