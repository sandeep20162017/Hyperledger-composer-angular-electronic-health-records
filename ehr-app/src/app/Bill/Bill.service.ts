import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { Bill } from '../composers.finance';
import 'rxjs/Rx';

// Can be injected into a constructor
@Injectable()
export class BillService {

	
		private NAMESPACE: string = 'composers.finance.Bill';
	



    constructor(private dataService: DataService<Bill>) {
    };

    public getAll(): Observable<Bill[]> {
        return this.dataService.getAll(this.NAMESPACE);
    }

    public getAsset(id: any): Observable<Bill> {
      return this.dataService.getSingle(this.NAMESPACE, id);
    }

    public addAsset(itemToAdd: any): Observable<Bill> {
      return this.dataService.add(this.NAMESPACE, itemToAdd);
    }

    public updateAsset(id: any, itemToUpdate: any): Observable<Bill> {
      return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
    }

    public deleteAsset(id: any): Observable<Bill> {
      return this.dataService.delete(this.NAMESPACE, id);
    }

}
