import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { updatePastVisits } from '../composers.ehr';
import 'rxjs/Rx';

// Can be injected into a constructor
@Injectable()
export class updatePastVisitsService {

	
		private NAMESPACE: string = 'composers.ehr.updatePastVisits';
	



    constructor(private dataService: DataService<updatePastVisits>) {
    };

    public getAll(): Observable<updatePastVisits[]> {
        return this.dataService.getAll(this.NAMESPACE);
    }

    public getTransaction(id: any): Observable<updatePastVisits> {
      return this.dataService.getSingle(this.NAMESPACE, id);
    }

    public addTransaction(itemToAdd: any): Observable<updatePastVisits> {
      return this.dataService.add(this.NAMESPACE, itemToAdd);
    }

    public updateTransaction(id: any, itemToUpdate: any): Observable<updatePastVisits> {
      return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
    }

    public deleteTransaction(id: any): Observable<updatePastVisits> {
      return this.dataService.delete(this.NAMESPACE, id);
    }

}

