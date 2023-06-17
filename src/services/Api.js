import axios from "axios"
import { toast } from "react-toastify"

const baseURL = process.env.REACT_APP_FSURL || "http://localhost:5000"
const mURL = process.env.REACT_APP_MURL || "http://localhost:3001"

const http = axios.create({
  baseURL: baseURL,
})

// ...

const URL = {
  USERS_URL: "table",
  SIGNUP_URL: "Signup",
  LOGIN_URL: "Login",
  // TOKEN_URL: "tokens",
  IPD_URL: "/api/patient",
  FRONT_OFFICE_URL: "/api/frontoffice/visitors_book",
  COMPLAIN_URL: "/api/frontoffice/complaint",
  OPD_URL: "/api/outpatient/opd_details",
  IPD_URL: "/api/ipd_details",
  BLOOD_URL: "/api/bloodbank_products",
  CONSULTANT_DOC_URL: "/api/nurse_Roles",
  CALL_LOG_URL: "/api/frontoffice/call_log",
  PHARMACY_BILL_URL: "/api/pharmacyBasicBill",
  PHARMACY_MEDS_URL: "/api/pharmacyMedicine",
  PHARMACY_BILL_GEN_URL: "/api/pharmacyTransaction",
  PHARMACY_BILL_DETAIL_URL: "/api/pharmacyBillDetails",
  PHARMACY_PURCHASE_URL: "/api/pharmacyPurchase",

  APPOINTMENT_URL: "/api/appointment/add_appointment",
  DOCTOR_WISE_URL: "/api/user_Roles",
  DOCTOR_APPOINTMENT_URL: "/api/appointment/add_appointment",
  SHIFT_WISE_URL: "/api/appointmentShift",
  SLOT_WISE_URL: "/api/patienQueueSlot",
  PATIENT_SEARCH_URL: "/api/appointment/add_patient",
  ADD_PATIENT_URL: "/api/appointment/add_patient",
  ADD_APPOINTMENT_URL: "/api/appointment/add_appointment",

  CHARGES_URL: "/api/setupcharge",
  CHARGES_CATEGORY_URL: "/api/chargeCategory",
  CHARGE_TYPE_URL: "/api/chargetype",
  SETUP_CHARGE_CATEGORY_URL: "/api/charge_category",
  SETUP_CHARGE_NAME: "/api/charge_name",
  SETUP_TAX_URL: "/api/taxCategory",
  SETUP_UNIT_URL: "/api/unitType",
  SETUP_PHARMACY_CTGRY_URL: "/api/medicine_Category",
  SETUP_MED_DOSAGE_URL: "/api/medicineDosage",
  SETUP_MED_SUPPLIER_URL: "/api/medicine_Supplier",
  SETUP_DOSAGE_URL: "/api/dosageInterval",
  SETUP_DOSAGE_DURATION_URL: "/api/dosageDuration",

  OPD_PAYMENT_URL: "/api/outpatient/payment",
  OPD_TIMELINE_URL: "/api/outpatient/timeline",
  OPD_MEDICATION_URL: "/api/outpatient/medication",
  OPD_DOSAGE_URL: "/api/outpatient/dosage",
  OPD_MEDICINE_CATEGORY_URL: "/api/outpatient/medicineCategory",
  OPD_MEDICINE_NAME_URL: "/api/outpatient/medicineName",
  OPD_OPERATION_URL: "/api/outpatient/operations",
  OPD_OPERATION_CATEGORY_URL: "/api/outpatient/operationCategory",
  OPD_OPERATION_NAME_URL: "/api/outpatient/operationName",
  OPD_CHARGE_URL: "/api/outpatient/patientcharges",
  OPD_CHARGE_CATEGORY_URL: "/api/outpatient/chargeCategory",
  OPD_CHARGE_NAME_URL: "/api/outpatient/chargeName",
  OPD_CHARGE_TYPE_URL: "/api/outpatient/chargeType",
  OPD_LAB_INVEST_URL: "/api/outpatient/labInvest",
  OPD_TREATMENT_HISTORY_URL: "/api/outpatient/treatmentHistory",
  OPD_VISITS: "/api/outpatient/visits",

  DISCHARGE_URL: "/api/dischargedPatient",

  NURSE_NOTE_URL: "/api/nursenote",
  CONSULTENT_URL: "/api/consultant_register",
  IPD_DETAILS_URL: "/api/ipd_patientdetails",
  POST_PAYMENT: "/api/payments",
  TIMELINE_URL: "/api/timeline",
  OPERATION_CATEGORY: "/api/operationCategory",
  OPERATION_NAME: "/api/operationName",
  OPERATION_URL: "/api/operation",
  MEDICINE_CATEGORY: "/api/medicineCategory",
  MEDICINE_NAME: "api/medicineName",
  MEDICINE_DOSAGE: "/api/medicineDosage",
  MEDICATION_URL: "/api/medication",
  CHARGE_TYPES_URL: "/api/chargeType",
  CHARGE_CATEGORY_URL: "/api/chargeCategory",
  CHARGE_NAME_URL: "/api/chargeName",
  CHARGE_URL: "/api/charge",
  PRESCRIPTION_TEST_URL: "/api/prescriptionTest",
  PRESCRIPTION_DETAILS_URL: "/api/prescripationDetails",
  PRESCRIPTION_BASIC_URL: "/api/prescriptionBasic",
  DOSAGE_DURATION_URL: "/api/dosageDuration",
  DOSAGE_INTERVEL_URL: "/api/dosageIntervel",
  FINDING_CATEGORY_URL: "/api/findingCategory",
  FINDINGS_URL: "/api/findings",
  RADIOLOGYS_URL: "/api/radiologys",
  PATHOLOGYS_URL: "/api/pathology",
  DISCHARGE_URL: "/api/dischargedPatient",
  BED_HISTORY_URL: "/api/bedHistory",
  TREATMENT_HISTORY_URL: "/api/treatmentHistory",
  LABINVESTIGATION_URL: "/api/labinvestigation",
  NURSE_WISE_RRL: "/api/nurse_Roles",
  RADIOLOGY_CATEGORY_URL: "/api/radio_category_name",
  RADIOLOGY_TEST_PARAMETESRS: "/api/radio_test_parameter_name",
  RADIOLOGY_POST: "/api/radiology_details",

  IPD_DISCHARED_REPORT_URL: "/api/ipdDischargedReport",
  ADD_STAFF_URL: "/api/addstaff",
  ADD_SPECIALIST_URL: "/api/specialist",
  ADD_DESIGNATION_URL: "/api/designation",
  STAFF_ROLE_URL: "/api/user_Roles",
  AUTH_LOGIN_URL: "/api/authlogin",
  PATIENT_URL: "/api/appointment/add_patient",

  SETUP_CHARGE_TYPE_URL: "/api/chargetype",

  RADILOGY_CATEGORY_URL: "/api/radiologyCategory",
  RADIOLOGY_UNIT_URL: "/api/radiologyunit",
  RADILOGY_PARAMETER_URL: "/api/radiology_parameter",

  ROLE_BASED_URL: "/api/rolebased",
}

function getRoleBased(emails){
  const data = {params:{email:emails}}
  return http.get(URL.ROLE_BASED_URL, data)
}

function postAuthUsers(data = {}) {
  return http.post(URL.AUTH_LOGIN_URL, data)
}

function getUser(data = {}) {
  return http.get(URL.USERS_URL, data)
}

function postStaffrole(data) {
  return http.post(URL.STAFF_ROLE_URL, data)
}

function getDesignation(data = {}) {
  return http.get(URL.ADD_DESIGNATION_URL, data)
}

function getSpecialist(data = {}) {
  return http.get(URL.ADD_SPECIALIST_URL, data)
}

function getDischargePatients() {
  return http.get(URL.DISCHARGE_URL)
}

function postUser(data = {}) {
  return http.post(URL.USERS_URL, data)
}

function getIpdDischargedReport(data = {}) {
  return http.get(URL.IPD_DISCHARED_REPORT_URL, data)
}

function postStaff(data = {}) {
  return http.post(URL.ADD_STAFF_URL, data)
}

// function getUser(data = {}) {
//   return http.get(URL.USERS_URL, data);
// };

// function postUser(data = {}) {
//   return http.post(URL.USERS_URL, data);
// };

// function deleteUser(data = {}) {
//   return http.delete(URL.USERS_URL, data);
// };

function postSetupChargeType(data = {}) {
  return http.post(URL.SETUP_CHARGE_TYPE_URL, data)
}

// function getSetupChargeType(data = {}){
//   return http.get(URL.SETUP_CHARGE_TYPE_URL, data)
// }

function postLogin(data = {}) {
  return http.get(URL.TOKEN_URL, data)
}

function getNurses(data = {}) {
  return http.get(URL.NURSE_WISE_RRL, data)
}

function postIpdUser(data = {}) {
  return http.post(URL.IPD_URL, data)
}

function getIpdUser(data = {}) {
  return http.get(URL.IPD_URL, data)
}

function postVisitor(data = {}) {
  return http.post(URL.FRONT_OFFICE_URL, data)
}

function getVisitor(data = {}) {
  return http.get(URL.FRONT_OFFICE_URL, data)
}

function postComplaint(data = {}) {
  return http.post(URL.COMPLAIN_URL, data)
}

function getComplaint(data = {}) {
  return http.get(URL.COMPLAIN_URL, data)
}

// function postAppointment(data = {}){
//   return http.post(URL.ADD_APPOINTMENT_URL,data)
// }

// function getAppointment(data = {}){
//   return http.get(URL.ADD_APPOINTMENT_URL,data)
// }

function postPatient(data = {}) {
  return http.post(URL.PATIENT_URL, data)
}

function getPatient(doctor, shift, date, slot) {
  const data = {
    params: { doctor: doctor, shift: shift, date: date, slot: slot },
  }
  return http.get(URL.PATIENT_SEARCH_URL, data)
}

function getOpd(data = {}) {
  return http.get(URL.OPD_URL, data)
}

function postOpd(data = {}) {
  return http.post(URL.OPD_URL, data)
}

function getIpd(data = {}) {
  return http.get(URL.IPD_URL, data)
}

function postIpd(data = {}) {
  return http.post(URL.IPD_URL, data)
}

function getBloodgroups(data = {}) {
  return http.get(URL.BLOOD_URL, data)
}

function getConsultant(data = {}) {
  return http.get(URL.CONSULTANT_DOC_URL, data)
}

function postConstant(data) {
  return http.post(URL.CONSULTENT_URL, data)
}

function postCallLog(data = {}) {
  return http.post(URL.CALL_LOG_URL, data)
}

function getCallLog(data = {}) {
  return http.get(URL.CALL_LOG_URL, data)
}

function getPharmacyBill(data = {}) {
  return http.get(URL.PHARMACY_BILL_URL, data)
}

function postPharmacyBill(data = {}) {
  return http.post(URL.PHARMACY_BILL_URL, data)
}

function getPharmacyMeds(data = {}) {
  return http.get(URL.PHARMACY_MEDS_URL, data)
}

function postPharmacyMeds(data = {}) {
  return http.post(URL.PHARMACY_MEDS_URL, data)
}

function postPharmacyBillDetails(data = {}) {
  return http.post(URL.PHARMACY_BILL_GEN_URL, data)
}

function postPharmacyBillTransaction(data = {}) {
  return http.post(URL.PHARMACY_BILL_DETAIL_URL, data)
}

function getPharmacyPurchase(data = {}) {
  return http.get(URL.PHARMACY_PURCHASE_URL, data)
}

function postPharmacyPurchase(data = {}) {
  return http.post(URL.PHARMACY_PURCHASE_URL, data)
}

function getAppointment(data = {}) {
  return http.get(URL.APPOINTMENT_URL, data)
}

function getRole(data = {}) {
  return http.get(URL.DOCTOR_WISE_URL, data)
}

function getDoctor(data = {}) {
  return http.get(URL.CONSULTANT_DOC_URL, data)
}
function getDoctorwiseAppoinment(doctor, date) {
  const data = { params: { doctor: doctor, date: date } }
  return http.get(URL.DOCTOR_APPOINTMENT_URL, data)
}

function getShiftdatas(shiftId) {
  console.log(shiftId, "ssss")
  const data = { params: { shiftId: shiftId } }
  return http.get(URL.SHIFT_WISE_URL, data)
}
function getSlotdatas(doctor, shift) {
  console.log(doctor, shift, "uuuuuuu")
  const data = { params: { staffId: doctor, shift: shift } }
  return http.get(URL.SLOT_WISE_URL, data)
}
function getPatients(doctor, shift, date, slot) {
  const data = {
    params: { doctor: doctor, shift: shift, date: date, slot: slot },
  }
  return http.get(URL.PATIENT_SEARCH_URL, data)
}
function postPatients(patients) {
  console.log(patients, "patients")
  return http.post(URL.ADD_PATIENT_URL, patients)
}
function getAllPatients(data = {}) {
  return http.get(URL.ADD_PATIENT_URL, data)
}
function postAppointment(formValues) {
  return http.post(URL.ADD_APPOINTMENT_URL, formValues)
}

function getCharges(data = {}) {
  return http.get(URL.CHARGES_URL, data)
}

function postCharges(data = {}) {
  return http.post(URL.CHARGES_URL, data)
}

function getChargeCategory(data = {}) {
  return http.get(URL.CHARGES_CATEGORY_URL, data)
}

function postChargeCategory(data = {}) {
  return http.post(URL.CHARGES_CATEGORY_URL, data)
}

function getChargetype(data = {}) {
  return http.get(URL.CHARGE_TYPE_URL, data)
}

function getSetupChargeCategory(data = {}) {
  return http.get(URL.SETUP_CHARGE_CATEGORY_URL, data)
}

function getSetupChargeName(data = {}) {
  return http.get(URL.SETUP_CHARGE_NAME, data)
}

function getTaxCategory(data = {}) {
  return http.get(URL.SETUP_TAX_URL, data)
}

function postTaxCategory(data = {}) {
  return http.post(URL.SETUP_TAX_URL, data)
}

function getUnitType(data = {}) {
  return http.get(URL.SETUP_UNIT_URL, data)
}

function postUnitType(data = {}) {
  return http.post(URL.SETUP_UNIT_URL, data)
}

function getPharmacyCtgry(data = {}) {
  return http.get(URL.SETUP_PHARMACY_CTGRY_URL, data)
}

function postPharmacyCtgry(data = {}) {
  return http.post(URL.SETUP_PHARMACY_CTGRY_URL, data)
}

function getMedDosage(data = {}) {
  return http.get(URL.SETUP_MED_DOSAGE_URL, data)
}

function postMedDosage(data = {}) {
  return http.post(URL.SETUP_MED_DOSAGE_URL, data)
}

function getMedSupplier(data = {}) {
  return http.get(URL.SETUP_MED_SUPPLIER_URL, data)
}

function postMedSupplier(data = {}) {
  return http.post(URL.SETUP_MED_SUPPLIER_URL, data)
}

function getDosageInterval(data = {}) {
  return http.get(URL.SETUP_DOSAGE_URL, data)
}

function postDosageInterval(data = {}) {
  return http.post(URL.SETUP_DOSAGE_URL, data)
}

function getDosageDuration(data = {}) {
  return http.get(URL.SETUP_DOSAGE_DURATION_URL, data)
}

function postDosageDuration(data = {}) {
  return http.post(URL.SETUP_DOSAGE_DURATION_URL, data)
}

function getOpdVisits(data = {}) {
  return http.get(URL.OPD_VISITS, data)
}

function postOpdVisits(data = {}) {
  return http.post(URL.OPD_VISITS, data)
}

function getOpdPayment(data = {}) {
  return http.get(URL.OPD_PAYMENT_URL, data)
}

function postOpdPayment(data = {}) {
  return http.post(URL.OPD_PAYMENT_URL, data)
}

function getOpdTimeline(data = {}) {
  return http.get(URL.OPD_TIMELINE_URL, data)
}

function postOpdTimeline(data = {}) {
  return http.post(URL.OPD_TIMELINE_URL, data)
}

function getOpdMedication(data = {}) {
  return http.get(URL.OPD_MEDICATION_URL, data)
}

function postOpdMedication(data = {}) {
  return http.post(URL.OPD_MEDICATION_URL, data)
}

function getDosage(data = {}) {
  return http.get(URL.OPD_DOSAGE_URL, data)
}

function getMedicineCategory(data = {}) {
  return http.get(URL.OPD_MEDICINE_CATEGORY_URL, data)
}

function getMedicineName(data = {}) {
  return http.get(URL.OPD_MEDICINE_NAME_URL, data)
}

function getOpdOperation(data = {}) {
  return http.get(URL.OPD_OPERATION_URL, data)
}

function postOpdOperation(data = {}) {
  return http.post(URL.OPD_OPERATION_URL, data)
}

function getOperationCategory(data = {}) {
  return http.get(URL.OPD_OPERATION_CATEGORY_URL, data)
}

function getOperationName(data = {}) {
  return http.get(URL.OPD_OPERATION_NAME_URL, data)
}

function getOpdCharges(data = {}) {
  return http.get(URL.OPD_CHARGE_URL, data)
}

function postOpdCharges(data = {}) {
  return http.post(URL.OPD_CHARGE_URL, data)
}

function getChargeName(data = {}) {
  return http.get(URL.OPD_CHARGE_NAME_URL, data)
}

function getChargeType(data = {}) {
  return http.get(URL.OPD_CHARGE_TYPE_URL, data)
}

function getLabInvest(data = {}) {
  return http.get(URL.OPD_LAB_INVEST_URL, data)
}

function getTreatmentHistory(data = {}) {
  return http.get(URL.OPD_TREATMENT_HISTORY_URL, data)
}

//ipd profile api

function postNurseNote(data) {
  return http.post(URL.NURSE_NOTE_URL, data)
}
function getNurseNote(data = {}) {
  return http.get(URL.NURSE_NOTE_URL, data)
}
function getIpdConsultant(data = {}) {
  return http.get(URL.CONSULTENT_URL)
}
function getPatientId(datas) {
  console.log(datas, "uuuuu")
  const data = { params: { id: datas } }
  return http.get(URL.IPD_DETAILS_URL, data)
}
function postPayment(data) {
  return http.post(URL.POST_PAYMENT, data)
}

function postTimeline(data) {
  return http.post(URL.TIMELINE_URL, data)
}
function getTimeline(data = {}) {
  return http.get(URL.TIMELINE_URL, data)
}
function getPaymet(patient_id, section) {
  const data = { params: { patientId: patient_id, section: section } }
  return http.get(URL.POST_PAYMENT)
}
function getOperationCategorys(data = {}) {
  return http.get(URL.OPERATION_CATEGORY, data)
}
function getIpdOperationName(categoryname) {
  const data = { params: { category: categoryname } }
  return http.get(URL.OPERATION_NAME, data)
}
function postOperation(formData) {
  return http.post(URL.OPERATION_URL, formData)
}
function getOperation() {
  return http.get(URL.OPERATION_URL)
}
function getMedicationCategroy() {
  return http.get(URL.MEDICINE_CATEGORY)
}
function getMedicneName(categoryNAME) {
  const data = { params: { category: categoryNAME } }
  return http.get(URL.MEDICINE_NAME, data)
}
function getMedicineDosage(categoryid) {
  const data = { params: { category: categoryid } }
  return http.get(URL.MEDICINE_DOSAGE, data)
}
function postMedication(data) {
  return http.post(URL.MEDICATION_URL, data)
}
function getMedication(ipdid) {
  const data = { params: { ipd_id: ipdid } }
  return http.get(URL.MEDICATION_URL, data)
}
function getIpdChargeType() {
  return http.get(URL.CHARGE_TYPES_URL)
}
function getIpdChargeCategory(typeid) {
  const data = { params: { search: typeid } }
  return http.get(URL.CHARGE_CATEGORY_URL, data)
}
function getIpdChargeName(categoryid) {
  const data = { params: { search: categoryid } }
  return http.get(URL.CHARGE_NAME_URL, data)
}
function postIpdCharges(formData) {
  return http.post(URL.CHARGE_URL, formData)
}
function getIpdCharges(ipdid) {
  const data = { params: { ipd_id: ipdid } }
  return http.get(URL.CHARGE_URL, data)
}
function postPrescriptionTest(data) {
  return http.post(URL.PRESCRIPTION_TEST_URL, data)
}
function postPrescriptionBasic(data) {
  return http.post(URL.PRESCRIPTION_BASIC_URL, data)
}
function postPrescriptionDetails(data) {
  return http.post(URL.PRESCRIPTION_DETAILS_URL, data)
}
function getIpdDosageDuration() {
  return http.get(URL.DOSAGE_DURATION_URL)
}
function getDosageIntervel() {
  return http.get(URL.DOSAGE_INTERVEL_URL)
}
function getFindingCategory() {
  return http.get(URL.FINDING_CATEGORY_URL)
}
function getFindings(categoryId) {
  const data = { params: { category: categoryId } }
  return http.get(URL.FINDINGS_URL, data)
}
function getRadiologys() {
  return http.get(URL.RADIOLOGYS_URL)
}
function getPathologys() {
  return http.get(URL.PATHOLOGYS_URL)
}
function getPrescription() {
  return http.get(URL.PRESCRIPTION_BASIC_URL)
}
function postDischargePatients(formData) {
  return http.post(URL.DISCHARGE_URL, formData)
}
// function getDischargePatients(){
//  return http.get(URL.DISCHARGE_URL)
// }
function getIpdTreatmentHistory() {
  return http.get(URL.TREATMENT_HISTORY_URL)
}
function getBedHistory() {
  return http.get(URL.BED_HISTORY_URL)
}
function getLabInvestigation() {
  return http.get(URL.LABINVESTIGATION_URL)
}
function getRadiologyCategory() {
  return http.get(URL.RADIOLOGY_CATEGORY_URL)
}
function getRadiologyTestParameters(ids) {
  const data = { params: { id: ids } }
  return http.get(URL.RADIOLOGY_TEST_PARAMETESRS, data)
}
function postRadiologyDetails(data) {
  return http.post(URL.RADIOLOGY_POST, data)
}
function getRadiologyDetails() {
  return http.get(URL.RADIOLOGY_POST)
}

function postRadiologyCatetegory(data) {
  return http.post(URL.RADILOGY_CATEGORY_URL, data)
}
function getRadiologyCategorys() {
  return http.get(URL.RADILOGY_CATEGORY_URL)
}
function postRadiologyUnit(data) {
  return http.post(URL.RADIOLOGY_UNIT_URL, data)
}
function getRadiologyUnit() {
  return http.get(URL.RADIOLOGY_UNIT_URL)
}
function postRadiologyparameter(data) {
  return http.post(URL.RADILOGY_PARAMETER_URL, data)
}
function getRadiologyParameter() {
  return http.get(URL.RADILOGY_PARAMETER_URL)
}

http.interceptors.request.use(config => {
  const token = sessionStorage.getItem("accessToken")
  config.headers.Authorization = `Bearer ${token}`
  return config
})

http.interceptors.response.use(
  response => response,
  error => {
    const { status } = error.response
    if (status === 401) {
      toast.error("Unauthorized")
    } else if (status === 200) {
      toast.success("success!")
      console.log("success")
    } else {
      toast.error("An error occurred")
    }
    return Promise.reject(error)
  }
)

const api = {
  getUser,
  postUser,
  postLogin,
  http,
  postIpdUser,
  getIpdUser,
  postVisitor,
  getVisitor,
  postRadiologyDetails,
  postComplaint,
  getComplaint,
  postAppointment,
  getAppointment,
  postPatient,
  getRadiologyTestParameters,
  getPatient,
  getRadiologyCategory,
  getOpd,
  postOpd,
  getRadiologyDetails,
  getIpd,
  postIpd,
  getBloodgroups,
  getConsultant,
  postCallLog,
  getCallLog,
  getPharmacyBill,
  getPharmacyMeds,
  postPharmacyMeds,
  postPharmacyBill,
  postPharmacyBillDetails,
  postPharmacyBillTransaction,
  getPharmacyPurchase,
  postPharmacyPurchase,
  getDoctor,
  getDoctorwiseAppoinment,
  getShiftdatas,
  getSlotdatas,
  postConstant,
  getPatients,
  postPatients,
  getAllPatients,
  getCharges,
  postCharges,
  getChargeCategory,
  postChargeCategory,
  getChargetype,
  getSetupChargeCategory,
  getSetupChargeName,
  getTaxCategory,
  postTaxCategory,
  getUnitType,
  postUnitType,
  getPharmacyCtgry,
  postPharmacyCtgry,
  getMedDosage,
  postMedDosage,
  getMedSupplier,
  postMedSupplier,
  getDosageInterval,
  postDosageInterval,
  getDosageDuration,
  postDosageDuration,
  getOpdVisits,
  postOpdVisits,
  getOpdPayment,
  postOpdPayment,
  getOpdTimeline,
  postOpdTimeline,
  getOpdMedication,
  postOpdMedication,
  getDosage,
  getMedicineCategory,
  getMedicineName,
  getOpdOperation,
  postOpdOperation,
  getOperationCategory,
  getOperationName,
  getOpdCharges,
  postOpdCharges,
  getChargeName,
  getChargeType,
  getLabInvest,
  getTreatmentHistory,
  getDischargePatients,
  postNurseNote,
  getNurseNote,
  getIpdConsultant,
  getPatientId,
  postPayment,
  postTimeline,
  getTimeline,
  getPaymet,
  getOperationCategorys,
  getIpdOperationName,
  postOperation,
  getOperation,
  getMedicationCategroy,
  getMedicneName,
  getMedicineDosage,
  postMedication,
  getMedication,
  getIpdChargeType,
  getIpdChargeCategory,
  getIpdChargeName,
  postIpdCharges,
  getIpdCharges,
  postPrescriptionTest,
  postPrescriptionBasic,
  postPrescriptionDetails,
  getIpdDosageDuration,
  getDosageIntervel,
  getFindingCategory,
  getFindings,
  getRadiologys,
  getPathologys,
  getPrescription,
  postDischargePatients,
  getDischargePatients,
  getIpdTreatmentHistory,
  getBedHistory,
  getLabInvestigation,
  getNurses,
  getIpdDischargedReport,
  postStaff,
  getRole,
  getSpecialist,
  getDesignation,
  postStaffrole,
  postAuthUsers,
  postSetupChargeType,
  postRadiologyCatetegory,
  getRadiologyCategorys,
  postRadiologyUnit,
  getRadiologyUnit,
  getRadiologyParameter,
  getRoleBased
}

export default api
