import React from "react"
import { Redirect } from "react-router-dom"

// Profile
import UserProfile from "../pages/Authentication/Profile/userProfile"

// Authentication related pages
// import Login from "../pages/Authentication/Login"
import Login from "pages/Authentication/LoginOld"
import Logout from "../pages/Authentication/Logout"
import Register from "../pages/Authentication/Register"
import ForgetPwd from "../pages/Authentication/ForgetPassword"
// import Signup from "../pages/Authentication/Register"
import RegisterNew from "../pages/Authentication/Register"
import SignupActivation from "../pages/Authentication/SignupActivation"

// Dashboard
import Dashboard from "../pages/Dashboard/index"

//Billing
import Billing from "../pages/Billing/Billing"
import Appointment from "../pages/Appointment/Appointment"
import Opd from "../pages/OutPatient/Opd"
import Ipd from "../pages/InPatient/Ipd"
import Pharmacy from "../pages/Pharmacy/Pharmacy"
import Pathology from "../pages/Pathology/Pathology"
import Radiology from "../pages/Radiology/Radiology"
import Bloodbank from "../pages/BloodBank/Bloodbank"
import Ambulance from "../pages/Ambulance/Ambulance"
import Frontoffice from "../pages/FrontOffice/Frontoffice"
import BirthRecord from "../pages/Records/BirthRecord"
import DeathRecord from "../pages/Records/DeathRecord"
import Hr from "../pages/HumanResource/Hr"
import Income from "../pages/Finance/Income"
import Expenses from "../pages/Finance/Expenses"
import LiveMeeting from "../pages/Consultation/LiveMeeting"
import LiveConsult from "../pages/Consultation/LiveConsult"
import Inventory from "../pages/Inventory/Inventory"
import Frontcms from "../pages/Frontcms/Frontcms"
import Message from "../pages/Messaging/Message"
import Certificate from "../pages/Certificate/Certificate"
import OpdReport from "../pages/Reports/OpdReport"
import IpdReport from "../pages/Reports/IpdReport"
import PathologyReport from "../pages/Reports/PathologyReport"
import BloodReport from "../pages/Reports/BloodReport"
import RadiologyReport from "../pages/Reports/RadiologyReport"
import { signUp } from "store/auth/register/authService"

const authProtectedRoutes = [
  { path: "/dashboard", component: Dashboard },
  { path: "/billing", component: Billing },
  { path: "/appointment", component: Appointment },
  { path: "/opd", component: Opd },
  { path: "/ipd", component: Ipd },
  { path: "/pharmacy", component: Pharmacy },
  { path: "/pathology", component: Pathology },
  { path: "/radiology", component: Radiology },
  { path: "/bloodbank", component: Bloodbank },
  { path: "/ambulance", component: Ambulance },
  { path: "/frontoffice", component: Frontoffice },
  { path: "/birthrecord", component: BirthRecord },
  { path: "/deathrecord", component: DeathRecord },
  { path: "/hr", component: Hr },
  { path: "/income", component: Income },
  { path: "/expenses", component: Expenses },
  { path: "/livemeeting", component: LiveMeeting },
  { path: "/liveconsult", component: LiveConsult },
  { path: "/inventory", component: Inventory },
  { path: "/frontcms", component: Frontcms },
  { path: "/message", component: Message },
  { path: "/opdreport", component: OpdReport },
  { path: "/ipdreport", component: IpdReport },
  { path: "/pathologyreport", component: PathologyReport },
  { path: "/bloodreport", component: BloodReport },
  { path: "/radiologyreport", component: RadiologyReport },
  { path: "/certificate", component: Certificate },
  
  // //profile
  { path: "/profile", component: UserProfile },

  // this route should be at the end of all other routes
  // eslint-disable-next-line react/display-name
  { path: "/", exact: true, component: () => <Redirect to="/dashboard" /> },
]

const publicRoutes = [
  { path: "/logout", component: Logout },
  { path: "/account/login", component: Login },
  { path: "/account/forgot-password", component: ForgetPwd },
  { path: "/account/register", component: Register},
  { path: "/account/activation", component: SignupActivation},

]

export { authProtectedRoutes, publicRoutes }
