import FrontPage from "./pages/FrontPage";
import DoctorsPage from "./pages/DoctorsPage";
import UserCenter from "./pages/UserCentre";
import DoctorInfo from "./pages/DoctorInfo";
import DoctorLogin from "./pages/DoctorLogin";
import BookingPage from "./pages/BookingPage";

export const ROUTES = [
  {
    key: "home",
    path: "/",
    page: FrontPage,
  },
  {
    key: "doctors",
    path: "/doctors",
    page: DoctorsPage,
  },
  {
    key: "user_center",
    path: "/user_center/personalInfo",
    page: UserCenter,
  },
  {
    key: "user_center/accountInfo",
    path: "/user_center/accountInfo",
    page: UserCenter,
  },
  {
    key: "user_center/manageBookings",
    path: "/user_center/manageBookings",
    page: UserCenter,
  },
  {
    key: "doctorInfo",
    path: "/doctors/:DoctorsID",
    page: DoctorInfo,
  },
  {
    key: "doctor_login",
    path: "/doctor_login",
    page: DoctorLogin,
  },
  {
    key: "booking",
    path: "/booking",
    page: BookingPage,
  },
];
