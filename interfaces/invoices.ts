export interface INVOICES {
  length: number;
  headers: string,
  ISSUE_ID: number;
  FIRSTCLOSUREDATE: Date;
  CASEID: number | string;
  PATIENT: string;
  OWNER: string;
  HOSPITAL: string;
  SECONDARYTIERCLINIC: string;
  REPORTINGSPECIALIST: string;
  SPECIALTY: string;
  SPECIES: string;
  BODYAREAS: string;
  BODYAREACOUNT: number;
  IMAGESRECEIVED: number;
  TURNAROUNDFORINVOICING: string;
  FREEOFCHARGE: string;
  UNITSOFWORK: number;
  PRICEAFTERDISCOUNT: number;
  PRICEBEFOREDISCOUNT: number;
  LASTPRICE: number;
  PRICE: number;
  CURRENCY: string;
  INVOICINGNOTES: string;
  MANAGINGCOMPANY: string;
  PRICELIST: string | number;
  COMPANYTOINVOICE: string;
  COUNTRY: string;
  CORPORATEGROUP: string;
  INVOICESTATE: string;
  TYPEOFCASE: string;
  CLINICPROFILEKEY: string | number;
  CREDITPRICE: number;
  USECREDITSFORTHISCASE: string;
}
