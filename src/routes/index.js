import React from "react";
import { Redirect } from "react-router-dom";

// Profile
import UserProfile from "../pages/Authentication/Profile/userProfile";

// Authentication related pages
import Login from "pages/Authentication/LoginOld";
import Logout from "../pages/Authentication/Logout";
import RegisterStaff from "pages/Authentication/RegisterStaff";
import ForgetPwd from "../pages/Authentication/ForgetPassword";
import SignupActivation from "../pages/Authentication/SignupActivation";

// Dashboard
import Dashboard from "../pages/Dashboard/index";

//Billing
import Billing from "../pages/Billing/Billing";
import Appointment from "../pages/Appointment/Appointment";
import Opd from "../pages/OutPatient/Opd";
import Ipd from "../pages/InPatient/Ipd";
import Pharmacy from "../pages/Pharmacy/Pharmacy";
import Pathology from "../pages/Pathology/Pathology";
import Radiology from "../pages/Radiology/Radiology";
import Bloodbank from "../pages/BloodBank/Bloodbank";
import Ambulance from "../pages/Ambulance/Ambulance";
import Frontoffice from "../pages/FrontOffice/Frontoffice";
import BirthRecord from "../pages/Records/BirthRecord";
import DeathRecord from "../pages/Records/DeathRecord";
import Hr from "../pages/HumanResource/Hr";
import Income from "../pages/Finance/Income";
import Expenses from "../pages/Finance/Expenses";
import LiveMeeting from "../pages/Consultation/LiveMeeting";
import LiveConsult from "../pages/Consultation/LiveConsult";
import Inventory from "../pages/Inventory/Inventory";
import Frontcms from "../pages/Frontcms/Frontcms";
import Message from "../pages/Messaging/Message";
import Certificate from "../pages/Certificate/Certificate";
import OpdReport from "../pages/Reports/OpdReport";
import IpdReport from "../pages/Reports/IpdReport";
import PathologyReport from "../pages/Reports/PathologyReport";
import BloodReport from "../pages/Reports/BloodReport";
import RadiologyReport from "../pages/Reports/RadiologyReport";
import Settings from "../pages/Settings/Settings";
import General from "../pages/Settings/SettingPages/General";
import Medicines from "../pages/Pharmacy/Medicines";
import PathologyTest from "pages/Pathology/PathologyTest";
import Item from "../pages/Inventory/Item";
import CallLog from "../pages/FrontOffice/CallLog";
import Complain from "../pages/FrontOffice/Complain";
import RadioTest from "pages/Radiology/RadioTest";
import Downloads from "pages/Download/Downloads";
import Doctorwise from "pages/Appointment/Pages/Doctorwise";
import Patientqueue from "pages/Appointment/Pages/Patientqueue";
import Medicinepage from "pages/Pharmacy/Medicinepage";
import Medicinepurchase from "pages/Pharmacy/Medicinepurchase";
import Bill from "pages/Pharmacy/Bill";
import Billgeneration from "pages/Pharmacy/Billgeneration";
import IpdPatientProfile from "pages/InPatient/IpdPatientProfile";
import OpdProfile from "pages/OutPatient/OpdProfile";
import OutPatientProfile from "pages/OutPatient/OpdProfile/OutPatientProfile";
import IpdDischargeReport from "pages/Reports/IpdDischargeReport";
import OpdDischargedReport from "pages/Reports/OpdDischargedReport";
import AddStaff from "pages/HumanResource/AddStaff";
import StaffAttendance from "pages/HumanResource/StaffAttendance";
import Payroll from "pages/HumanResource/Payroll";
import Leaves from "pages/HumanResource/Leaves";

//setup
import SetupBloodBank from "pages/Setup/SetupComponents/SetupBloodBank";
import SetupCharge from "pages/Setup/SetupComponents/SetupCharge";
import SetupChargeCategory from "pages/Setup/SetupComponents/SetupChargeCategory";
import SetupTaxCategory from "pages/Setup/SetupComponents/SetupTaxCategory";
import SetupUnitType from "pages/Setup/SetupComponents/SetupUnitType";
import SetupBed from "pages/Setup/SetupComponents/SetupBed";
import SetupBedList from "pages/Setup/SetupComponents/SetupBedList";
import SetupBedType from "pages/Setup/SetupComponents/SetupBedType";
import SetupBedGroup from "pages/Setup/SetupComponents/SetupBedGroup";
import SetupFloor from "pages/Setup/SetupComponents/SetupFloor";
import SetupFindings from "pages/Setup/SetupComponents/SetupFindings";
import SetupFindingCategory from "pages/Setup/SetupComponents/SetupFindingCategory";
import SetupPharmacy from "pages/Setup/SetupComponents/SetupPharmacy";
import SetupSupplier from "pages/Setup/SetupComponents/SetupSupplier";
import SetupMedDosage from "pages/Setup/SetupComponents/SetupMedDosage";
import SetupDoseInterval from "pages/Setup/SetupComponents/SetupDoseInterval";
import SetupMedDoseDuration from "pages/Setup/SetupComponents/SetupMedDoseDuration";
import SetupOperationCategory from "pages/Setup/SetupComponents/SetupOperationCategory";
import SetupOperations from "pages/Setup/SetupComponents/SetupOperations";
import dischargedPatient from "pages/InPatient/DischargedPatient";
import SetupPathology from "pages/Setup/SetupComponents/SetupPathology";
import SetupPathologyUnit from "pages/Setup/SetupComponents/SetupPathologyUnit";
import SetupChargeType from "pages/Setup/SetupComponents/SetupChargeType";
import SetupSymptomsHead from "pages/Setup/SetupComponents/SetupSymptomsHead";
import SetupSymptomsType from "pages/Setup/SetupComponents/SetupSymptomsType";
//Tpa
import TpaManagement from "pages/Tpa/TpaManagement";
import SetupPathologyParameter from "pages/Setup/SetupComponents/SetupPathologyParameter";
import OpdBilling from "pages/Billing/BillingPages/OpdBilling";
import PathologyBilling from "pages/Billing/BillingPages/PathologyBilling";
import AppointmentBilling from "pages/Billing/BillingPages/AppointmentBilling";
import RadiologyBillDialog from "pages/Radiology/RadiologyBillDialog";
import RadiologyBilling from "pages/Billing/BillingPages/RadiologyBilling";
import BloodIssueBilling from "pages/Billing/BillingPages/BloodIssueBilling";
import BloodComponentBilling from "pages/Billing/BillingPages/BloodComponentBilling";
import AmbulanceList from "pages/Ambulance/AmbulanceList";

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
  {path: "/settings", component: Settings},
  {path: "/general", component: General},
  {path: '/medicines', component: Medicines},
  {path: '/pathologytest', component: PathologyTest},
  {path: '/items',component: Item},
  {path: '/calls', component: CallLog},
  {path: '/complain', component: Complain},
  {path: '/radiotest', component: RadioTest},
  {path: '/download', component: Downloads},
  {path: '/ambulancelist', component: AmbulanceList},
  // //profile
  { path: "/profile", component: UserProfile },
  {path: "/doctorwise", component: Doctorwise},
  {path:"/patientqueue", component: Patientqueue},
  {path: "/medicinepage", component: Medicinepage},
  {path: "/medicinepurchase", component: Medicinepurchase},
  {path: "/bill", component: Bill},
  {path: "/billgenerate", component: Billgeneration},
  {path: "/ipdprofile/:ipdno", component: IpdPatientProfile},
  {path: "/opdprofile/:pid", component: OpdProfile},
  {path: "/opdprofileview", component: OutPatientProfile},
  {path: "/ipddischargedreport", component: IpdDischargeReport},
  {path: "/opddischargedreport", component: OpdDischargedReport},
  {path: "/addstaff", component: AddStaff},
  {path: "/attendance", component: StaffAttendance},
  {path: "/payroll", component: Payroll},
  {path: "/leaves", component: Leaves},
  {path: "/setupbloodbank", component: SetupBloodBank},
  {path: "/tpa", component: TpaManagement},
  {path: "/setupcharges", component: SetupCharge},
  {path: "/chargecategory", component: SetupChargeCategory},
  {path: "/taxcategory", component: SetupTaxCategory},
  {path: "/unittype", component: SetupUnitType},
  {path: "/setupbed", component: SetupBed},
  {path: "/bed", component: SetupBedList},
  {path: "/bedtype", component: SetupBedType},
  {path: "/bedgroup", component: SetupBedGroup},
  {path: "/floor", component: SetupFloor},
  {path: "/findings", component: SetupFindings},
  {path: "/findingcategory", component: SetupFindingCategory},
  {path: "/medicinecategory", component: SetupPharmacy},
  {path: "/supplier", component: SetupSupplier},
  {path: "/medicinedosage",component: SetupMedDosage},
  {path: "/doseinterval", component: SetupDoseInterval},
  {path: "/doseduration", component: SetupMedDoseDuration},
  {path: "/setupoperation", component: SetupOperationCategory},
  {path: "/operations", component: SetupOperations},
  {path: "/discharged", component: dischargedPatient},
  {path: "/pathologysetup", component: SetupPathology},
  {path: "/pathologysetupunit", component: SetupPathologyUnit},
  {path: "/pathologyparameter", component: SetupPathologyParameter},
  {path: "/billing/opdbilling", component: OpdBilling},
  {path: "/billing/pathologybilling", component: PathologyBilling},
  {path: "/billing/appointmentbilling", component: AppointmentBilling},
  {path: "/billing/radiologybilling", component: RadiologyBilling},
  {path: "/billing/bloodissuebilling", component: BloodIssueBilling},
  {path: "/billing/bloodcomponentbilling", component: BloodComponentBilling},
  {path: "/charges/chargetype", component: SetupChargeType},
  {path: "/setup/symptoms", component: SetupSymptomsHead },
  {path: "/setup/symptomstype", component: SetupSymptomsType},
  // this route should be at the end of all other routes
  // eslint-disable-next-line react/display-name
  { path: "/", exact: true, component: () => <Redirect to="/dashboard" /> },
];

const publicRoutes = [
  { path: "/logout", component: Logout },
  { path: "/account/login", component: Login },
  { path: "/account/forgot-password", component: ForgetPwd },
  { path: "/account/registerstaff", component: RegisterStaff},
  { path: "/account/activation", component: SignupActivation},

];

export { authProtectedRoutes, publicRoutes };
