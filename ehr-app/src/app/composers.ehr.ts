import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
// export namespace composers.ehr{
   export enum Gender {
      MALE,
      FEMALE,
      OTHER,
   }
   export enum Nationality {
      AMERICAN,
      BRITISH,
      INDIAN,
      PAKISTANI,
      CANADIAN,
      OTHER,
   }
   export class PatientInfo extends Asset {
      patientID: string;
      name: Name;
      gender: Gender;
      dayOfBirth: Date;
      contactDetails: ContactDetails;
      nationality: Nationality;
      medicationArray: string[];
      pastVisitsArray: Visits[];
   }
   export class Name {
      firstName: string;
      lastName: string;
   }
   export class Address {
      city: string;
      country: string;
      street: string;
      zip: number;
      box: string;
   }
   export class ContactDetails {
      email: string;
      phone: string;
      address: Address;
   }
   export class Visits {
      visitDate: Date;
      procedure: string;
      doctor: string;
      location: Address;
      medicinePrescribed: string[];
   }
   export class DoctorName {
      doctor: string;
   }
   export class updateMedication extends Transaction {
      medicationArray: string[];
      patientInfo: PatientInfo;
   }
   export class updatePastVisits extends Transaction {
      newVisit: Visits;
      patientInfo: PatientInfo;
   }
   export class updateContact extends Transaction {
      contactDetails: ContactDetails;
      patientInfo: PatientInfo;
   }
// }
