import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { updateMedication } from '../composers.ehr';
import 'rxjs/Rx';

// Can be injected into a constructor
@Injectable()
export class updateMedicationService {

	
		private NAMESPACE: string = 'composers.ehr.updateMedication';
	



    constructor(private dataService: DataService<updateMedication>) {
    };

    public getAll(): Observable<updateMedication[]> {
        return this.dataService.getAll(this.NAMESPACE);
    }

    public getTransaction(id: any): Observable<updateMedication> {
      return this.dataService.getSingle(this.NAMESPACE, id);
    }

    public addTransaction(itemToAdd: any): Observable<updateMedication> {
      return this.dataService.add(this.NAMESPACE, itemToAdd);
    }

    public updateTransaction(id: any, itemToUpdate: any): Observable<updateMedication> {
      return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
    }

    public deleteTransaction(id: any): Observable<updateMedication> {
      return this.dataService.delete(this.NAMESPACE, id);
    }

}

