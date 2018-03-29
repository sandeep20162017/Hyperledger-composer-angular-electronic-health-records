import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
// export namespace composers.participants{
   export abstract class Person extends Participant {
      ID: string;
      title: string;
      firstname: string;
      lastname: string;
   }
   export class Administrator extends Person {
   }
   export class Doctor extends Person {
      department: string;
      salary: string;
   }
   export class Patient extends Person {
      lastvisit: Date;
      balanceDue: number;
   }
// }
