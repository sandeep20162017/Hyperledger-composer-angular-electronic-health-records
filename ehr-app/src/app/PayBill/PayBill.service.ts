import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { PayBill } from '../composers.finance';
import 'rxjs/Rx';

// Can be injected into a constructor
@Injectable()
export class PayBillService {

	
		private NAMESPACE: string = 'composers.finance.PayBill';
	



    constructor(private dataService: DataService<PayBill>) {
    };

    public getAll(): Observable<PayBill[]> {
        return this.dataService.getAll(this.NAMESPACE);
    }

    public getTransaction(id: any): Observable<PayBill> {
      return this.dataService.getSingle(this.NAMESPACE, id);
    }

    public addTransaction(itemToAdd: any): Observable<PayBill> {
      return this.dataService.add(this.NAMESPACE, itemToAdd);
    }

    public updateTransaction(id: any, itemToUpdate: any): Observable<PayBill> {
      return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
    }

    public deleteTransaction(id: any): Observable<PayBill> {
      return this.dataService.delete(this.NAMESPACE, id);
    }

}

