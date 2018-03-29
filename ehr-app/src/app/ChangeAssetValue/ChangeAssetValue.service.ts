import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { ChangeAssetValue } from '../org.example.biznet';
import 'rxjs/Rx';

// Can be injected into a constructor
@Injectable()
export class ChangeAssetValueService {

	
		private NAMESPACE: string = 'org.example.biznet.ChangeAssetValue';
	



    constructor(private dataService: DataService<ChangeAssetValue>) {
    };

    public getAll(): Observable<ChangeAssetValue[]> {
        return this.dataService.getAll(this.NAMESPACE);
    }

    public getTransaction(id: any): Observable<ChangeAssetValue> {
      return this.dataService.getSingle(this.NAMESPACE, id);
    }

    public addTransaction(itemToAdd: any): Observable<ChangeAssetValue> {
      return this.dataService.add(this.NAMESPACE, itemToAdd);
    }

    public updateTransaction(id: any, itemToUpdate: any): Observable<ChangeAssetValue> {
      return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
    }

    public deleteTransaction(id: any): Observable<ChangeAssetValue> {
      return this.dataService.delete(this.NAMESPACE, id);
    }

}

