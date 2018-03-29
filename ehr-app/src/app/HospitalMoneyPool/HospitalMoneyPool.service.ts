import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { HospitalMoneyPool } from '../composers.finance';
import 'rxjs/Rx';

// Can be injected into a constructor
@Injectable()
export class HospitalMoneyPoolService {

	
		private NAMESPACE: string = 'composers.finance.HospitalMoneyPool';
	



    constructor(private dataService: DataService<HospitalMoneyPool>) {
    };

    public getAll(): Observable<HospitalMoneyPool[]> {
        return this.dataService.getAll(this.NAMESPACE);
    }

    public getAsset(id: any): Observable<HospitalMoneyPool> {
      return this.dataService.getSingle(this.NAMESPACE, id);
    }

    public addAsset(itemToAdd: any): Observable<HospitalMoneyPool> {
      return this.dataService.add(this.NAMESPACE, itemToAdd);
    }

    public updateAsset(id: any, itemToUpdate: any): Observable<HospitalMoneyPool> {
      return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
    }

    public deleteAsset(id: any): Observable<HospitalMoneyPool> {
      return this.dataService.delete(this.NAMESPACE, id);
    }

}
