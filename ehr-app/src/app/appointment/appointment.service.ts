import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { appointment } from '../composers.appointments';
import 'rxjs/Rx';

// Can be injected into a constructor
@Injectable()
export class appointmentService {

	
		private NAMESPACE: string = 'composers.appointments.appointment';
	



    constructor(private dataService: DataService<appointment>) {
    };

    public getAll(): Observable<appointment[]> {
        return this.dataService.getAll(this.NAMESPACE);
    }

    public getAsset(id: any): Observable<appointment> {
      return this.dataService.getSingle(this.NAMESPACE, id);
    }

    public addAsset(itemToAdd: any): Observable<appointment> {
      return this.dataService.add(this.NAMESPACE, itemToAdd);
    }

    public updateAsset(id: any, itemToUpdate: any): Observable<appointment> {
      return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
    }

    public deleteAsset(id: any): Observable<appointment> {
      return this.dataService.delete(this.NAMESPACE, id);
    }

}
