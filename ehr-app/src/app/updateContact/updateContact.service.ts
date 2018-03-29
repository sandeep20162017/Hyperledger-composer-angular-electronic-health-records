import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { updateContact } from '../composers.ehr';
import 'rxjs/Rx';

// Can be injected into a constructor
@Injectable()
export class updateContactService {

	
		private NAMESPACE: string = 'composers.ehr.updateContact';
	



    constructor(private dataService: DataService<updateContact>) {
    };

    public getAll(): Observable<updateContact[]> {
        return this.dataService.getAll(this.NAMESPACE);
    }

    public getTransaction(id: any): Observable<updateContact> {
      return this.dataService.getSingle(this.NAMESPACE, id);
    }

    public addTransaction(itemToAdd: any): Observable<updateContact> {
      return this.dataService.add(this.NAMESPACE, itemToAdd);
    }

    public updateTransaction(id: any, itemToUpdate: any): Observable<updateContact> {
      return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
    }

    public deleteTransaction(id: any): Observable<updateContact> {
      return this.dataService.delete(this.NAMESPACE, id);
    }

}

