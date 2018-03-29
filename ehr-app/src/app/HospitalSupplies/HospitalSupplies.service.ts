import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { HospitalSupplies } from '../composers.finance';
import 'rxjs/Rx';

// Can be injected into a constructor
@Injectable()
export class HospitalSuppliesService {

	
		private NAMESPACE: string = 'composers.finance.HospitalSupplies';
	



    constructor(private dataService: DataService<HospitalSupplies>) {
    };

    public getAll(): Observable<HospitalSupplies[]> {
        return this.dataService.getAll(this.NAMESPACE);
    }

    public getAsset(id: any): Observable<HospitalSupplies> {
      return this.dataService.getSingle(this.NAMESPACE, id);
    }

    public addAsset(itemToAdd: any): Observable<HospitalSupplies> {
      return this.dataService.add(this.NAMESPACE, itemToAdd);
    }

    public updateAsset(id: any, itemToUpdate: any): Observable<HospitalSupplies> {
      return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
    }

    public deleteAsset(id: any): Observable<HospitalSupplies> {
      return this.dataService.delete(this.NAMESPACE, id);
    }

}
