import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
// export namespace composers.finance{
   export class Expenses {
      supplies: number;
      staff: number;
      medications: number;
   }
   export class Bill extends Asset {
      billID: string;
      patientID: string;
      moneyID: string;
      amount: number;
      paid: boolean;
   }
   export class HospitalSupplies extends Asset {
      supplyID: string;
      drugs: string;
   }
   export class HospitalMoneyPool extends Asset {
      moneyID: string;
      moneypool: number;
   }
   export enum SupplyState {
      full,
      low,
      empty,
   }
   export class SendBill extends Transaction {
      bill: Bill;
   }
   export class PayBill extends Transaction {
      bill: Bill;
   }
// }
