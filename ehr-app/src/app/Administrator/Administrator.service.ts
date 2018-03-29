import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { Administrator } from '../composers.participants';
import 'rxjs/Rx';

// Can be injected into a constructor
@Injectable()
export class AdministratorService {

	
		private NAMESPACE: string = 'composers.participants.Administrator';
	



    constructor(private dataService: DataService<Administrator>) {
    };

    public getAll(): Observable<Administrator[]> {
        return this.dataService.getAll(this.NAMESPACE);
    }

    public getparticipant(id: any): Observable<Administrator> {
      return this.dataService.getSingle(this.NAMESPACE, id);
    }

    public addParticipant(itemToAdd: any): Observable<Administrator> {
      return this.dataService.add(this.NAMESPACE, itemToAdd);
    }

    public updateParticipant(id: any, itemToUpdate: any): Observable<Administrator> {
      return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
    }

    public deleteParticipant(id: any): Observable<Administrator> {
      return this.dataService.delete(this.NAMESPACE, id);
    }

}
