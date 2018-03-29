import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { SampleAsset } from '../org.example.biznet';
import 'rxjs/Rx';

// Can be injected into a constructor
@Injectable()
export class SampleAssetService {

	
		private NAMESPACE: string = 'org.example.biznet.SampleAsset';
	



    constructor(private dataService: DataService<SampleAsset>) {
    };

    public getAll(): Observable<SampleAsset[]> {
        return this.dataService.getAll(this.NAMESPACE);
    }

    public getAsset(id: any): Observable<SampleAsset> {
      return this.dataService.getSingle(this.NAMESPACE, id);
    }

    public addAsset(itemToAdd: any): Observable<SampleAsset> {
      return this.dataService.add(this.NAMESPACE, itemToAdd);
    }

    public updateAsset(id: any, itemToUpdate: any): Observable<SampleAsset> {
      return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
    }

    public deleteAsset(id: any): Observable<SampleAsset> {
      return this.dataService.delete(this.NAMESPACE, id);
    }

}
