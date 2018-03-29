import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { SendBill } from '../composers.finance';
import 'rxjs/Rx';

// Can be injected into a constructor
@Injectable()
export class SendBillService {

	
		private NAMESPACE: string = 'composers.finance.SendBill';
	



    constructor(private dataService: DataService<SendBill>) {
    };

    public getAll(): Observable<SendBill[]> {
        return this.dataService.getAll(this.NAMESPACE);
    }

    public getTransaction(id: any): Observable<SendBill> {
      return this.dataService.getSingle(this.NAMESPACE, id);
    }

    public addTransaction(itemToAdd: any): Observable<SendBill> {
      return this.dataService.add(this.NAMESPACE, itemToAdd);
    }

    public updateTransaction(id: any, itemToUpdate: any): Observable<SendBill> {
      return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
    }

    public deleteTransaction(id: any): Observable<SendBill> {
      return this.dataService.delete(this.NAMESPACE, id);
    }

}

