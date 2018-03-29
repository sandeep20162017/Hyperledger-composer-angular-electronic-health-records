import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { PatientInfo } from '../composers.ehr';
import 'rxjs/Rx';

// Can be injected into a constructor
@Injectable()
export class PatientInfoService {

	
		private NAMESPACE: string = 'composers.ehr.PatientInfo';
	



    constructor(private dataService: DataService<PatientInfo>) {
    };

    public getAll(): Observable<PatientInfo[]> {
        return this.dataService.getAll(this.NAMESPACE);
    }

    public getAsset(id: any): Observable<PatientInfo> {
      return this.dataService.getSingle(this.NAMESPACE, id);
    }

    public addAsset(itemToAdd: any): Observable<PatientInfo> {
      return this.dataService.add(this.NAMESPACE, itemToAdd);
    }

    public updateAsset(id: any, itemToUpdate: any): Observable<PatientInfo> {
      return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
    }

    public deleteAsset(id: any): Observable<PatientInfo> {
      return this.dataService.delete(this.NAMESPACE, id);
    }

}
