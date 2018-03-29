import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { addAppointment } from '../composers.appointments';
import 'rxjs/Rx';

// Can be injected into a constructor
@Injectable()
export class addAppointmentService {

	
		private NAMESPACE: string = 'composers.appointments.addAppointment';
	



    constructor(private dataService: DataService<addAppointment>) {
    };

    public getAll(): Observable<addAppointment[]> {
        return this.dataService.getAll(this.NAMESPACE);
    }

    public getTransaction(id: any): Observable<addAppointment> {
      return this.dataService.getSingle(this.NAMESPACE, id);
    }

    public addTransaction(itemToAdd: any): Observable<addAppointment> {
      return this.dataService.add(this.NAMESPACE, itemToAdd);
    }

    public updateTransaction(id: any, itemToUpdate: any): Observable<addAppointment> {
      return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
    }

    public deleteTransaction(id: any): Observable<addAppointment> {
      return this.dataService.delete(this.NAMESPACE, id);
    }

}

